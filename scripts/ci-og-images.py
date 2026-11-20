from pathlib import Path
import struct,zlib
colors=[(219,202,185),(217,192,171),(216,206,185),(219,191,174),(193,211,187),(226,221,206),(227,208,182),(195,201,207),(217,221,207),(216,191,162)]
names=["og-home","og-about","arc-desk-lamp","ripple-ceramic-vase","canvas-weekender","cloud-knit-throw","everyday-tote","studio-headphones","pour-over-set","minimalist-watch"]
def chunk(kind,body):
 return struct.pack(">I",len(body))+kind+body+struct.pack(">I",zlib.crc32(kind+body)&0xffffffff)
def make(path,rgb):
 w,h=1200,630
 raw=b"".join(b"\x00"+bytes(rgb)*w for _ in range(h))
 payload=b"\x89PNG\r\n\x1a\n"+chunk(b"IHDR",struct.pack(">IIBBBBB",w,h,8,2,0,0,0))+chunk(b"IDAT",zlib.compress(raw,9))+chunk(b"IEND",b"")
 p=Path(path);p.parent.mkdir(parents=True,exist_ok=True);p.write_bytes(payload)
for i,name in enumerate(names):
 path=f"public/{name}.png" if i<2 else f"public/og/products/{name}.png"
 make(path,colors[i])
print("Prepared 10 deterministic valid PNG assets for test build")
