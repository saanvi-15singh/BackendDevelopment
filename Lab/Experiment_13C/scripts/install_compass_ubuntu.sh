#!/usr/bin/env bash
# Optional: install MongoDB Compass (GUI) on Ubuntu/Debian.
# First download the .deb from the MongoDB Compass download page into this folder.
sudo dpkg -i mongodb-compass_*.deb
sudo apt-get install -f   # install missing dependencies
# Launch:  mongodb-compass
# Connect with:  mongodb://127.0.0.1:27017
