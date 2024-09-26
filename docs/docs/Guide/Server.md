# Server

Initiating a new Jova Server.

```ts
// ESM
import { JovaServer } from '@bracketed/jova.js';

const Jova = new JovaServer();

await Jova.listen(3000);
```

```ts
// CJS
const { JovaServer } = require('@bracketed/jova.js');

const Jova = new JovaServer(); // All options for JovaServer are documented in the instance as jsDocs

await Jova.listen(3000);
```

You can find an application example in the Jova.js repository [here](https://github.com/bracketed/jova.js) or the direct folder [here](https://github.com/Bracketed/jova.js/tree/master/src/example).

The default Express API can be utilised from the default Jova instance after being initiated e.g: get(), post(), etc.

Since version `v1.5.0`, the `application`, `container`, `logger` and `utilities` instances are now accessible via `this` inside of your handler.
The examples in the `src/example` folder have been updated accordingly to use this new structure.
