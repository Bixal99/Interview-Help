from pathlib import Path
import subprocess
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

# List previous versions via PowerShell COM is awkward; try calling
# Windows Explorer previous versions is Shadow Copies / File History.
# Alternative: use OneDrive personal API via odopen - skip.

# Invoke Restore previous versions programmatically is hard.
# Try reading from Windows File History store if present.
candidates = [
    Path.home() / "AppData/Local/Microsoft/Windows/FileHistory",
    Path("C:/Users/msi/OneDrive"),
]
for c in candidates:
    print("exists", c, c.exists())

# Check dangling blobs content markers via git cat-file in subprocess later
print("done")
