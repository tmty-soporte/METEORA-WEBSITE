"""Remove stale orphaned SVG block from index.html (lines 761-958, 0-indexed 760-957)."""
path = r"c:\Users\tecno\Documents\desarrollo web\meteora-web\index.html"

with open(path, "r", encoding="utf-8") as f:
    lines = f.readlines()

print(f"Total lines before: {len(lines)}")

# Keep lines 0-759 (1-indexed 1-760) and lines 958+ (1-indexed 959+)
# The stale orphaned block is 1-indexed lines 761-958 → 0-indexed 760-957
cleaned = lines[:760] + lines[958:]

print(f"Total lines after:  {len(cleaned)}")

# Quick sanity check
print("Line 758-762 after (should be section close then blank then Benefits):")
for i, l in enumerate(cleaned[757:763], start=758):
    print(f"  {i}: {l}", end="")

with open(path, "w", encoding="utf-8") as f:
    f.writelines(cleaned)

print("\nDone.")
