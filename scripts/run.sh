#!/bin/bash

echo "did this deploy?"

cd /home/ec2-user/portfolio


#!/bin/bash
# sudo chmod 755 /var/www/server.js # optional
# this will restart app/server on instance reboot
crontab -l | { cat; echo "@reboot pm2 start server.js -i 0 --name \"portfolio\""; } | crontab -
sudo pm2 stop node-app
# actually start the server
sudo pm2 start server.js -i 0 --name "portfolio"