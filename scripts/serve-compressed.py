"""Serve built static HTML/CSS/JS compressed, like a production CDN.
This avoids benchmarking Python's uncompressed development-like HTTP server.
Not a Next.js dev server; the build is already exported in out/.
"""
import argparse
import gzip
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

parser=argparse.ArgumentParser()
parser.add_argument("--port",type=int,default=4173)
parser.add_argument("--directory",default=".site")
args=parser.parse_args()

class Handler(SimpleHTTPRequestHandler):
    protocol_version = "HTTP/1.1"
    def send_head(self):
        path=self.translate_path(self.path.split("?",1)[0])
        # Route trailing slashes to Next export's index.html.
        from pathlib import Path
        target=Path(path)
        if target.is_dir():
            target=target/"index.html"
        if target.is_file() and self.headers.get("Accept-Encoding","").find("gzip")>=0 and target.suffix in {".html",".js",".css",".json",".txt",".svg"}:
            raw=target.read_bytes()
            packed=gzip.compress(raw,compresslevel=6,mtime=0)
            self.send_response(200)
            self.send_header("Content-Type",self.guess_type(str(target)))
            self.send_header("Content-Encoding","gzip")
            self.send_header("Content-Length",str(len(packed)))
            self.send_header("Cache-Control","public, max-age=3600")
            self.end_headers()
            self.wfile.write(packed)
            return None
        return super().send_head()
server=ThreadingHTTPServer(("127.0.0.1",args.port),lambda *a,**k: Handler(*a,directory=args.directory,**k))
print("Serving prebuilt, compressed static export", flush=True)
server.serve_forever()
