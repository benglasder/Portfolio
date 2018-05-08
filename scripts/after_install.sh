#!/bin/bash

echo "Moving Environment File"

cd /home/ec2-user/configs

cp .env ../portfolio/.env

cd ../portfolio

echo "Restoring Nuget Packages"

npm install
