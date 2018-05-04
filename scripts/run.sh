#!/bin/bash

cd /home/ec2-user/portfolio

echo "starting node..."
npm start > /dev/null 2> /dev/null < /dev/null & echo $! > node.pid
