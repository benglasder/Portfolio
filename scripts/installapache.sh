#!/bin/bash

rm /var/www/html/appspec.yml

yum -y install httpd > /var/log/installapache.out 2>&1