---
title: NodeJS - JavaScript powering the backend
author: Swastik Yadav
date: 2021-07-30
hero: ./banner.png
excerpt: Introduction to NodeJS. NodeJS is a JavaScript run time environment. It is the way to run JavaScript outside the browser.
---

Hello Everyone,

In this post we will go through an introduction of NodeJS. It is built on **Chrome's V8 JS engine**. Basically NodeJS allows us to use JavaScript to build servers and backend applications.

**NodeJS is a JavaScript run time environment**. It is the way to run JavaScript outside the browser.

Differences between browser and node.js environment.

[![NodeJS image](https://slid-capture.s3.ap-northeast-2.amazonaws.com/public/capture_images/4bcdf646bcf344469e3518c4255c80da/f0fd8031-9924-49c8-bcfb-db9307048b32.jpg)](https://slid.cc/vdocs/4bcdf646bcf344469e3518c4255c80da?v=b6c861c8d55647e8b86aed0642baf301&start=387.95633790320204)

## Globals in NodeJS
In NodeJS there is no window, because there is no browser, so there is no window object.

But there are global variables, and here are some most commonly used global variables in NodeJS.

- \_\_dirname: Path to current directory.
- \_\_filename: file name.
- require: function to use modules (CommonJS).
- module: info about current module (file).
- process: info about env where the program is being executed.

Modules are just separated scripts and files, there are several built in modules in NodeJS. Let's cover the most popular ones.

- OS module
- PATH module
- FS module
- HTTP module

### OS Module
OS module provides information about the operating system. Here are some examples.

```js
const os = require('os');

const currentOS = {
  userInfo: os.userInfo(),
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
```

### Path Module
Path module provides functions and information for the file paths.

```js
const require("path");

console.log(path.sep);
// consoles the folder separator ("/").

const filePath = path.join("/content", "subfolder", "test.txt");
// Joins the path of the given folder and files ("/content/subfolder/test.txt").

const base =  path.basename(filePath);
// Gives the base of the given file path.

const absolutePath = path.resolve(__dirname, "content", "subfolder", "test.txt");
// This joins and returns the absolute file path.
```

### FS Module
FS module provides functions and info about the file system. This mainly helps us to read and write files.

There are two ways to use FS module:

- **Sync**: Reads and writes the file synchronously.
- **Async**: Reads and writes the file asynchronously using callbacks.

```js
/* Sync Example */
const { readFileSync, writeFileSync } = require("fs");

const fileContent = readFileSync("./content/first.txt", "utf8");
console.log(fileContent); // consoles the content of given file.
// readFileSync reads the content of the given file synchronously.

writeFileSync(
	"./content/result-sync.txt",
	`Here is the result: ${fileContent}`
);
// writeFileSync writes the given content to the given file. And creates the file if it does not exists.

/* Async Example */
const { readFile, writeFile } = require("fs");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(result);
});

writeFile(
	"./content/result-sync.txt",
	`Here is the result: ${fileContent}`,
  	(err, result) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log(result);
    }
);
```

### HTTP Module
This module let's us make Http request in NodeJS to transfer data over Http. HTTP module creates an HTTP server that listens to server ports and gives a response back to the client.

```js
const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
```

## NodeJS Event Loop
With help of event loop we can offload some time consuming operations.

The event loop is what allows Node.js to perform non-blocking I/O operations — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

For example without the event loop if a user requests for a time consuming operation, other users will be blocked till the operation is completed.

And with the event loop, the operation is offloaded and executed only when completed, hence other users are not blocked.

More detail on NodeJS event loop: https://nodejs.dev/learn/the-nodejs-event-loop

```js
const { readFile, writeFile } = require('fs');

console.log('started first task');
// CHECK FILE PATH!!!!
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err);
    return
  }
  // console.log(result)
  console.log('completed first task')
})
console.log('starting next task');

// Result:
// started first task
// starting next task
// completed first task
```

## Event-driven programming
In event-driven programming, we listen for specific events and register functions that will execute in response to those events. So, once our event takes place callback function fires.

Event objects have many methods, the two most used are:

- **on**: listen for an event.
- **emit**: emit an event.

```js
const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data recieved: ${name} with id: ${id}`);
});

customEmitter.emit("response", "john", 34);
```

A bunch of built-in modules rely heavily on this concept of events.

## Streams
In NodeJS streams are used to read and write sequentially. Streams help us handle and manipulate streaming data, for example, continuous source or a big file stream.

There are four types of streams:

- **Writeable**: To write data sequentially.
- **Readable**: To read data sequentially.
- **Duplex**: To both read and write data sequentially.
- **Transform**: To modify data while reading or writing.

```js
const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))
```

### HTTP stream example.

```js
const http = require("http");
const fs = require("fs");

http.createServer(function(req, res) {
  // const text = fs.readFileSync('./content/big.txt', 'utf8')
  // res.end(text)
  
  const fileStream = fs.createReadStream("./content/big.txt", "utf8");
  fileStream.on("open", () => {
    fileStream.pipe(res);
  })
  fileStream.on("error", (err) => {
    res.end(err);
  })
}).listen(5000);
```

## Basic NodeJS server app setup.
Here is a basic server setup with core NodeJS.

```js
const http = require('http')
const { readFileSync } = require('fs')

// get all files
const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
```

-----------------------

That's it for the basics of core NodeJS. If you found this helpful, please do share and subscribe to my newsletter below or [here](./subscribe).

Thank You!