# Structure

Jova.js has a specific file structure it works by, this is shown below, the folders Jova searches for can be modified in the `JovaServer` options upon creating a new `JovaServer`.

## Default JovaServer Structure

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
└───routes
│   │   Route.ts
│   │   Index.ts
│   │   ...
│
└───middlewares
    │   Middleware1.ts
    │   Middleware2.ts
    │   ...

```
