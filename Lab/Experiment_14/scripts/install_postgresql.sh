#!/usr/bin/env bash
# PostgreSQL install for WSL / Ubuntu / Debian
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# postgresql starts automatically on Debian/Ubuntu; verify:
sudo systemctl status postgresql --no-pager

# if not running, start + enable on boot
sudo systemctl enable --now postgresql

# macOS (Homebrew) instead:
#   brew install postgresql@16
#   brew services start postgresql@16
#   pg_isready ; psql --version
# Windows: wsl --install -d Ubuntu   (then run this script inside Ubuntu)
