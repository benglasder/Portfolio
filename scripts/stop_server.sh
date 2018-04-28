#!/bin/bash

echo "Killing all node processes"

isExistApp='pgrep node'

if [[ -n $isExistApp ]]; then
    service node stop
fi

echo "$isExistApp"

echo "Node processes have been stopped"



