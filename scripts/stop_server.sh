#!/bin/bash

echo "Killing all node processes"

isExistApp='pgrep node'

if [[ -n $isExistApp ]]; then
    service node stop
fi

echo "Deleting Project Folder... just in case"

cd /home/ec2-user

rm -rf portfolio

echo "$isExistApp"

echo "Node process have been stopped"




