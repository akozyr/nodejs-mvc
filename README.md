# Node.js implementation of MVC pattern
This repository contains Node.js implementation of MVC pattern (currently without models integration).
The app includes such parts:
- products (realtime fake products generation using `dummy-json` package and `socket.io` package for on-the-fly communication among clients and the server);
- images (uploading images to the server and tagging them accordingly to their content using `puppeteer` package as headless chrome Node API for scraping computed tags from Google Images search). **NOTE:** These tags cannot be taken as real tags for images, for this purpose please use 3rd-party APIs.

### Installation
The app requires Node.js 10.0+ and NPM 6.0+. The repository contains Docker configuration, so you can raise required environment using the next command (should be executed once):
```
# build the image:
docker build --build-arg exposed_port=81 -t akozyr/nodejs-mvc .
```
### Launching
When we have the image built then we can run our container using the command below:
```
# run the container:
docker run -p 80:81 -v ${PWD}:/usr/src/app akozyr/nodejs-mvc
```

That's it. Then access [the app](http://localhost). Enjoy!

### 3rd-party packages
The app is currently extended with the following packages.

| Package | Repository |
| --- | --- |
| Dummy-Json | https://github.com/webroo/dummy-json |
| Express | https://github.com/expressjs/express |
| Express-Fileupload | https://github.com/richardgirges/express-fileupload |
| Pug | https://github.com/pugjs/pug |
| Puppeteer | https://github.com/GoogleChrome/puppeteer |
| Socket.io | https://github.com/socketio/socket.io; https://github.com/socketio/socket.io-client |

### License
MIT


