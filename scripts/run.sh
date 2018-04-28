#!/bin/bash

echo "did this deploy?"

cd /home/ec2-user/portfolio

pm2 start server.js -f
