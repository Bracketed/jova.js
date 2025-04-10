<div align="center" id="top">
    <img src="https://raw.githubusercontent.com/Bracketed/Bracketed-Packages/main/assets/LogoText.png" alt="Bracketed logo" width="800"/>
    <br />
    Bracketed Softworks - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://discord.com/invite/JZ4939cvMT" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a>
</div>

<br>

<h2 align="center" >@bracketed/jova.js</h2>

A semi-advanced Express.js framework by Bracketed Softworks!
This is a package built revolving around [Express.js](https://www.npmjs.com/package/express) to allow the easy usage of Express' API and adding extra things like built in middlewares, event listeners etc.

Documentation & Guide available at <https://jova.js.org>, **the majority of the content which used to be part of our README.md is now at our js.org website**.

<h2>What is this?</h2>

\- A Framework package built for [Express.js](https://www.npmjs.com/package/express) that uses [@bracketed/logger](https://www.npmjs.com/package/@bracketed/logger) for logging.
\- It utilises a range of packages to bring you the best experience! Some of these are, [ioRedis](https://www.npmjs.com/package/ioredis) for Database-Based ratelimit buckets, [CORS](https://www.npmjs.com/package/cors) for CORS middleware and a few minor packages that can be found in the dependencies tab for small tasks in Jova.js.

<h2>Summary (Directory)</h2>

- [Installation](#Installation)
    <!--truncate-->
    - [Yarn](#YarnInstall)
    - [Npm](#NpmInstall)
- [Usage](#Usage)
- [Contribution](#Contribution)

<h2 id="Installation">Installation</h2>

Install via `yarn` or `npm`:

<p id="YarnInstall">Yarn:</p>

```sh
yarn add @bracketed/jova.js
```

<p id="NpmInstall">Npm:</p>

```sh
npm install --save @bracketed/jova.js
```

<h2 id="Usage">Usage</h2>

Jova.js has a specific file structure it works by, this is shown below:

```txt
project
│   index.ts
│
└───events
│   │   Ready.ts
│   │   Error.ts
│   │   ...
│   │
│   └───more-events (subfolders are supported)
│       │   Mount.ts
│       │   Route.ts
│       │   ...
│
└───routes (subfolders are supported)
│   │   Route.ts
│   │   Index.ts
│   │   ...
│
└───middlewares (subfolders are supported)
│   │   Middleware1.ts
│   │   Middleware2.ts
│   │   ...
│
└───static (subfolders are supported)
    │   file1.css
    │   file2.txt
    │   ...
```

Jova.js also has two other exports, `@bracketed/jova.js/types` and `@bracketed/jova.js/decorators`.

- `@bracketed/jova.js/decorators` - For decorators usage in handlers such as route handlers, event handlers and middleware handlers.
- `@bracketed/jova.js/types` - Typings for Jova.js, used in routes, middlewares, events etc.

Initiating a new Jova Server.

```typescript
// ESM
import { JovaServer } from '@bracketed/jova.js';

const Jova = new JovaServer();

await Jova.listen(3000);
```

```typescript
// CJS
const { JovaServer } = require('@bracketed/jova.js');

const Jova = new JovaServer(); // All options for JovaServer are documented in the instance as jsDocs

await Jova.listen(3000);
```

You can find an application example in the Jova.js repository [here](https://github.com/bracketed/jova.js) or the direct folder [here](https://github.com/Bracketed/jova.js/tree/master/test).

The default Express API can be utilised from the default Jova instance after being initiated e.g: get(), post(), etc or via the `container` object exported by `@bracketed/jova.js`.

However, you can set up routes, middlewares and event listeners like this:

**Events** - [Via the documentation at jova.js.org](https://jova.js.org/docs/Guide/Events)

**Routes** - [Via the documentation at jova.js.org](https://jova.js.org/docs/Guide/Routes)

**Middlewares** - [Via the documentation at jova.js.org](https://jova.js.org/docs/Guide/Middlewares)

<h1 id="Contribution">Contribution & Help</h1>

Feel free to contribute to this project, join our [discord](https://discord.com/invite/JZ4939cvMT) and help us with future developments of Project Bracketed & Packages by Bracketed Softworks.
Please also notify us of errors within our projects as we may not be aware of them at the time.

<br>

<div align="center" style="font-weight: bold">
    <h2>Thanks for using our packages!</h2>
    <img src="https://github.com/Bracketed/Branding/blob/main/Banners/LogoBannerTextMini.png?raw=true" alt="Bracketed logo" width="900" style="border-radius: 25px" />
    Bracketed Softworks - <a href="https://bracketed.co.uk" >Website</a> | <a href="https://discord.com/invite/JZ4939cvMT" >Discord</a> | <a href="https://github.com/Bracketed" >Github</a> | <a href="https://x.com/teambracketed" >Twitter</a> | <a href="#top" >Back To The Top</a>
    <br>
    <br>
    <img src="https://discordapp.com/api/guilds/1041758035355369542/widget.png?style=banner2" alt="Discord Banner" href="https://discord.com/invite/JZ4939cvMT"/>
</div>
