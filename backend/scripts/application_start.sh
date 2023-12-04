#!/bin/bash

echo 'run application_start.sh: ' >> /AlloMedia/deploy.log

echo 'pm2 restart nodejs-express-app' >> /AlloMedia/deploy.log
pm2 restart nodejs-express-app >> /AlloMedia/deploy.log