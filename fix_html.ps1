$filePath = "index.html"
$allLines = Get-Content -Path $filePath
$totalBefore = $allLines.Count
Write-Host "Lines before: $totalBefore"

# Keep lines 0-759 (1-indexed 1-760) and 958+ (1-indexed 959+)
$part1 = $allLines[0..759]
$part2 = $allLines[958..($allLines.Count - 1)]
$result = $part1 + $part2

Write-Host "Lines after: $($result.Count)"
Write-Host "Line 759 (should be </section>): $($result[759])"
Write-Host "Line 760 (should be blank or Benefits): $($result[760])"
Write-Host "Line 761: $($result[761])"

$result | Set-Content -Path $filePath -Encoding UTF8
Write-Host "Done."
