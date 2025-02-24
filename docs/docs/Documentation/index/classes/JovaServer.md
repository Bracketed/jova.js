# Class: JovaServer

The Jova Server Class.

 JovaServer

## Extends

- `EventEmitter`

## Constructors

### new JovaServer()

> **new JovaServer**(`options`): [`JovaServer`](JovaServer.md)

Creates an instance of JovaServer.

#### Parameters

• **options**: [`JovaServerOptions`](../../types/config/jovaServerOptionsObject/interfaces/JovaServerOptions.md) = `{}`

#### Returns

[`JovaServer`](JovaServer.md)

#### Default

```ts
undefined
```

#### Overrides

`EventEmitter.constructor`

#### Defined in

[index.ts:147](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L147)

## Properties

### all

> `readonly` **all**: `IRouterMatcher`\<`Express`, `"all"`\>

This method is like the standard methods, except it matches all HTTP verbs.

Source: http://expressjs.com/en/5x/api.html#app.all

#### Param

string

#### Param

any

#### Defined in

[index.ts:251](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L251)

***

### any

> `readonly` **any**: `IRouterMatcher`\<`Express`, `"all"`\>

Alias for `all`.

This method is like the standard methods, except it matches all HTTP verbs.

Source: http://expressjs.com/en/5x/api.html#app.all

#### Param

string

#### Param

any

#### Defined in

[index.ts:240](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L240)

***

### container

> **container**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\> & `Locals`

The `container` object has properties that are local variables within the application,
and will be available in templates rendered with response.render.

Once set, the value of `container` properties persist throughout the life of the application,
in contrast with response.locals properties that are valid only for the lifetime of the request.
You can access local variables in templates rendered within the application.
This is useful for providing helper functions to templates, as well as application-level data.
Local variables are available in middleware via `request.app.locals`.

Source: http://expressjs.com/en/5x/api.html#app.locals

#### Defined in

[index.ts:438](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L438)

***

### delete

> `readonly` **delete**: `IRouterMatcher`\<`Express`, `"delete"`\>

Routes HTTP DELETE requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.delete

#### Param

string

#### Param

any

#### Defined in

[index.ts:285](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L285)

***

### engine()

> `readonly` **engine**: (`ext`, `fn`) => `this`

Registers the given template engine `callback` as `ext`.

Source: http://expressjs.com/en/5x/api.html#app.engine

Register the given template engine callback `fn`
as `ext`.

By default will `require()` the engine based on the
file extension. For example if you try to render
a "foo.jade" file Express will invoke the following internally:

#### Parameters

• **ext**: `string`

• **fn**

#### Returns

`this`

#### Example

```ts
app.engine('jade', require('jade').__express);

// For engines that do not provide `.__express` out of the box,
// or if you wish to "map" a different extension to the template engine
// you may use this method. For example mapping the EJS template engine to
// ".html" files:

app.engine('html', require('ejs').renderFile);

// In this case EJS provides a `.renderFile()` method with
// the same signature that Express expects: `(path, options, callback)`,
// though note that it aliases this method as `ejs.__express` internally
// so if you're using ".ejs" extensions you don't need to do anything.

// Some template engines do not follow this convention, the
// [Consolidate.js](https://github.com/visionmedia/consolidate.js)
// library was created to map all of node's popular template
// engines to follow this convention, thus allowing them to
// work seamlessly within Express.
```

#### Param

string

#### Param

(path: string, options: object, callback: (e: any, rendered?: string) => void) => void

#### Defined in

[index.ts:422](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L422)

***

### get

> `readonly` **get**: (`name`) => `any` & `IRouterMatcher`\<`Express`, `any`\>

Contextual function.

HTTP GET:

Routes HTTP GET requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.get.method

Get Setting:

Returns the value of name app setting, where name is one of the strings in the app settings table.

Source: https://expressjs.com/en/5x/api.html#app.get

#### Param

get) path string

#### Param

get) callback any

#### Param

setting) setting string | JovaSettingsTable

#### Defined in

[index.ts:274](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L274)

***

### head

> `readonly` **head**: `IRouterMatcher`\<`Express`, `"head"`\>

Routes HTTP HEAD requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.head

[ NO DOCUMENTATION CURRENT ]

#### Param

string

#### Param

any

#### Defined in

[index.ts:351](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L351)

***

### locals

> **locals**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `any`\> & `Locals`

The `locals` object has properties that are local variables within the application,
and will be available in templates rendered with response.render.

Once set, the value of `locals` properties persist throughout the life of the application,
in contrast with response.locals properties that are valid only for the lifetime of the request.
You can access local variables in templates rendered within the application.
This is useful for providing helper functions to templates, as well as application-level data.
Local variables are available in middleware via `request.app.locals`.

Source: http://expressjs.com/en/5x/api.html#app.locals

#### Defined in

[index.ts:454](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L454)

***

### middleware

> `readonly` **middleware**: `ApplicationRequestHandler`\<`Express`\>

Mounts the specified middleware function or functions at the specified path:
the middleware function is executed when the base of the requested path matches `path`.

Source: http://expressjs.com/en/5x/api.html#app.use

#### Param

string

#### Param

any

#### Defined in

[index.ts:391](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L391)

***

### options

> `readonly` **options**: `IRouterMatcher`\<`Express`, `"options"`\>

Routes HTTP OPTIONS requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.options

[ NO DOCUMENTATION CURRENT ]

#### Param

string

#### Param

any

#### Defined in

[index.ts:365](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L365)

***

### param()

> `readonly` **param**: (`name`, `handler`) => `this`(`callback`) => `this`

Add callback triggers to route parameters.

Source: http://expressjs.com/en/5x/api.html#app.param

Map the given param placeholder `name`(s) to the given callback(s).

Parameter mapping is used to provide pre-conditions to routes
which use normalized placeholders. For example a _:user_id_ parameter
could automatically load a user's information from the database without
any additional code,

The callback uses the same signature as middleware, the only differencing
being that the value of the placeholder is passed, in this case the _id_
of the user. Once the `next()` function is invoked, just like middleware
it will continue on to execute the route, or subsequent parameter functions.

#### Parameters

• **name**: `string` \| `string`[]

• **handler**: `RequestParamHandler`

#### Returns

`this`

#### Example

```ts
app.param('user_id', function(req, res, next, id){
  User.find(id, function(err, user){
    if (err) {
      next(err);
    } else if (user) {
      req.user = user;
      next();
    } else {
      next(new Error('failed to load user'));
    }
  });
});
```

Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()

#### Parameters

• **callback**

#### Returns

`this`

#### Deprecated

since version 4.11

#### Defined in

[index.ts:294](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L294)

***

### path()

> `readonly` **path**: () => `string`

Returns the canonical path of the application, a string.

The behavior of this method can become very complicated in complex cases of mounted apps:
it is usually better to use request.baseUrl to get the canonical path of the application.

Source: http://expressjs.com/en/5x/api.html#app.path

Return the app's absolute pathname
based on the parent(s) that have
mounted it.

For example if the application was
mounted as "/admin", which itself
was mounted as "/blog" then the
return value would be "/blog/admin".

#### Returns

`string`

#### Defined in

[index.ts:467](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L467)

***

### port

> `readonly` **port**: `string` \| `number`

The port number defined by the Server Options or in the `listen` function.

#### Example

```ts
3000
```

#### Default

```ts
3000
```

#### Defined in

[index.ts:119](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L119)

***

### post

> `readonly` **post**: `IRouterMatcher`\<`Express`, `"post"`\>

Routes HTTP POST requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.post

#### Param

string

#### Param

any

#### Defined in

[index.ts:305](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L305)

***

### put

> `readonly` **put**: `IRouterMatcher`\<`Express`, `"put"`\>

Routes HTTP PUT requests to the specified path with the specified callback functions.

Source: http://expressjs.com/en/5x/api.html#app.put

#### Param

string

#### Param

any

#### Defined in

[index.ts:316](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L316)

***

### registry

> `readonly` **registry**: [`ApplicationRegistry`](../../types/classes/ApplicationRegistry.md)

The application registry, contains all the routes, middlewares and event handlers.

#### Defined in

[index.ts:136](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L136)

***

### render()

> `readonly` **render**: (`name`, `options`?, `callback`?) => `void`(`name`, `callback`) => `void`

Returns the rendered HTML of a view via the `callback` function.
It accepts an optional parameter that is an object containing local variables for the view.
It is like response.render(), except it cannot send the rendered view to the client on its own.

Source: http://expressjs.com/en/5x/api.html#app.render

Render the given view `name` name with `options`
and a callback accepting an error and the
rendered template string.

#### Parameters

• **name**: `string`

• **options?**: `object`

• **callback?**

#### Returns

`void`

#### Example

```ts
app.render('email', { name: 'Tobi' }, function(err, html){
  // ...
});
```

#### Parameters

• **name**: `string`

• **callback**

#### Returns

`void`

#### Defined in

[index.ts:327](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L327)

***

### route()

> `readonly` **route**: \<`T`\>(`prefix`) => `IRoute`\<`T`\>(`prefix`) => `IRoute`\<`string`\>

Returns an instance of a single route, which you can then use to handle HTTP verbs with optional middleware.
Use `route` to avoid duplicate route names (and thus typo errors).

Source: http://expressjs.com/en/5x/api.html#app.route

#### Type Parameters

• **T** *extends* `string`

#### Parameters

• **prefix**: `T`

#### Returns

`IRoute`\<`T`\>

#### Parameters

• **prefix**: `PathParams`

#### Returns

`IRoute`\<`string`\>

#### Defined in

[index.ts:337](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L337)

***

### use

> `readonly` **use**: `ApplicationRequestHandler`\<`Express`\>

Mounts the specified middleware function or functions at the specified path:
the middleware function is executed when the base of the requested path matches `path`.

Source: http://expressjs.com/en/5x/api.html#app.use

#### Param

string

#### Param

any

#### Defined in

[index.ts:378](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L378)

## Methods

### checkFreePort()

> **checkFreePort**(`port`, `recursive`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

Check for a free port to host your Jova server, optionally fund an available one.

#### Parameters

• **port**: `string` \| `number`

• **recursive?**: `boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`number`\>

#### Defined in

[index.ts:199](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L199)

***

### listen()

> **listen**(`port`?, `allowPortIncrement`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Start the Jova Server, begin listening to a port & its incoming requests.

#### Parameters

• **port?**: `string` \| `number`

• **allowPortIncrement?**: `boolean`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Examples

```ts
const server = new JovaServer();

await server.listen(3000); // Without port increment
```

```ts
const server = new JovaServer({ port: 3000 });

await server.listen();
```

```ts
const server = new JovaServer();

await server.listen(3000, true); // With port increment
```

#### Defined in

[index.ts:587](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L587)

***

### set()

> **set**(`Name`, `Value`): `void`

Assigns setting name to value.
You may store any value that you want, but certain names can be used to configure the behavior of the server.
These special names are listed in the app settings table.

Calling application.set('foo', true) for a Boolean property is the same as calling application.enable('foo').
Similarly, calling application.set('foo', false) for a Boolean property is the same as calling application.disable('foo').

Source: http://expressjs.com/en/5x/api.html#app.set

#### Parameters

• **Name**: `string`

JovaSettingsTable | string

• **Value**: `any`

any

#### Returns

`void`

#### Defined in

[index.ts:408](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L408)

***

### testServerDeploy()

> **testServerDeploy**(`port`, `exit`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Run a Jova test server, starts up and shuts back down returning an optional 0 exit code for success or 1 for error.

#### Parameters

• **port**: `string` \| `number`

• **exit?**: `true`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Defined in

[index.ts:643](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/index.ts#L643)
