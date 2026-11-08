"""Unpack the versioned image library for local checks and production builds."""
from pathlib import Path
import hashlib
import sys
import zipfile

root = Path(__file__).resolve().parent.parent
archive = root / 'assets' / 'editorial-images.zip'
public = root / 'public'
cache = root / '.editorial-images.local'
if '--pack' in sys.argv:
    archive.parent.mkdir(exist_ok=True)
    with zipfile.ZipFile(archive, 'w', zipfile.ZIP_DEFLATED) as bundle:
        for path in sorted((public / 'images').rglob('*')):
            if path.is_file():
                bundle.write(path, path.relative_to(public))
    print('Packed editorial image library')
    sys.exit(0)

parts = sorted(archive.parent.glob('editorial-images.part*'))
if parts:
    data = b''.join(part.read_bytes() for part in parts)
    expected = (archive.parent / 'editorial-images.sha256').read_text().strip()
    if hashlib.sha256(data).hexdigest() != expected:
        raise ValueError('Image archive checksum mismatch')
    if not archive.exists() or archive.read_bytes() != data:
        archive.write_bytes(data)
fingerprint = hashlib.sha256(archive.read_bytes()).hexdigest()
with zipfile.ZipFile(archive) as bundle:
    entries = bundle.infolist()
    for entry in entries:
        name = Path(entry.filename)
        if name.is_absolute() or '..' in name.parts or name.parts[0] != 'images':
            raise ValueError('Unexpected image bundle path: ' + entry.filename)
        if name.suffix not in {'.webp', '.jpg'}:
            raise ValueError('Unexpected image format: ' + entry.filename)
    if cache.exists() and cache.read_text() == fingerprint and all((public / e.filename).exists() for e in entries):
        print('Editorial images are ready')
    else:
        bundle.extractall(public)
        cache.write_text(fingerprint)
        print('Prepared', len(entries), 'editorial image files')
