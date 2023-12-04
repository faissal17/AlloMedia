#!/bin/bash
echo 'run after_install.sh: ' >> /AlloMedia/deploy.log

echo 'cd /AlloMedia' >> /AlloMedia/deploy.log
cd /AlloMedia >> /AlloMedia/deploy.log

echo 'npm install' >> /AlloMedia/deploy.log 
npm install >> /AlloMedia/deploy.log