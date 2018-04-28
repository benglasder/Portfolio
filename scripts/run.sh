#!/bin/bash

cd /home/ec2-user/portfolio

echo "Killing all node processes..."
killall node

echo "starting node..."
npm run start
