@echo off
REM ============================================================
REM  Publish portfolio to GitHub Pages
REM  1) Create repo https://github.com/new named: SanChainn.github.io
REM     (Public, do NOT add README/license/gitignore)
REM  2) Run this file. Site goes live at:
REM     https://sanchainn.github.io/
REM ============================================================

cd /d "%~dp0"

git remote remove origin 2>nul
git remote add origin https://github.com/SanChainn/SanChainn.github.io.git
git push -u origin main

echo.
echo Done! Your site will be live in 1-2 minutes at:
echo   https://sanchainn.github.io/
echo.
pause