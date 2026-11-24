#!/usr/bin/env bash
# Install MongoDB 8.0 Community Edition on Ubuntu 24.04 (noble)
# Source: https://www.mongodb.com/docs/v8.0/tutorial/install-mongodb-on-ubuntu/
# Usage: bash scripts/install_mongodb_ubuntu.sh
set -e

sudo apt update -y
sudo apt-get install gnupg curl -y

curl -fsSL https://www.mongodb.org/static/pgp/server-8.0.asc | \
   sudo gpg -o /usr/share/keyrings/mongodb-server-8.0.gpg \
   --dearmor

echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-8.0.gpg ] https://repo.mongodb.org/apt/ubuntu noble/mongodb-org/8.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-8.0.list

sudo apt-get update
sudo apt-get install -y mongodb-org

# start mongodb
sudo systemctl start mongod
sudo systemctl daemon-reload
sudo systemctl status mongod --no-pager
sudo systemctl enable mongod

echo "Done. Start the shell with: mongosh"
# sudo systemctl stop mongod
# sudo systemctl restart mongod
