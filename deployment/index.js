#!/usr/bin/env node

var NodeDeployment = require("codedeploy-scripts").NodeDeployment;

var deployment = new NodeDeployment({
    appName: "portfolio",
    nodePort: "5020",
    serverScript: "build/server/server.js",
    secretBucket: "tqc-encrypted"
});

deployment.run();