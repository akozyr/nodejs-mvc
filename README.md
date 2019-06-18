# Node.js implementation of MVC pattern
This repository contains Node.js implementation of MVC pattern (currently without models integration).
The app includes such parts:
- products (realtime fake products generation using `dummy-json` package and `socket.io` package for on-the-fly communication between clients and the server)
- images (uploading images to the server and tagging them accordingly to their content using `puppeteer` package as headless chrome Node API for scraping computed tags from Google Images search)

### Installation
The app requires Node.js 10.0+ and NPM 6.0+. The repository contains Dockerfile, so you can raise required environment using the next commands:
```
# build the image:
docker build --build-arg exposed_port=81 -t akozyr/nodejs-mvc .

# run the container:
docker run -p 80:81 -v ${PWD}:/usr/src/app akozyr/nodejs-mvc
```

That's it. Then access to [the app](http://localhost). Enjoy!

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


