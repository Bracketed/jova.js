[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [index](../wiki/index) / JovaServer

# Class: JovaServer

The Jova Server Class.

 JovaServer

## Extends

- `EventEmitter`

## Constructors

### new JovaServer()

> **new JovaServer**(`options`?): [`JovaServer`](../wiki/index.Class.JovaServer)

Creates an instance of JovaServer.

#### Parameters

• **options?**: [`JovaServerOptions`](../wiki/types.config.jovaServerOptionsObject.Interface.JovaServerOptions) = `{}`

#### Returns

[`JovaServer`](../wiki/index.Class.JovaServer)

#### Default

```ts
{}
```

#### Overrides

`EventEmitter.constructor`

#### Defined in

[index.ts:148](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L148)

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

[index.ts:253](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L253)

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

[index.ts:242](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L242)

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

[index.ts:440](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L440)

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

[index.ts:287](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L287)

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

    app.engine('jade', require('jade').__express);

For engines that do not provide `.__express` out of the box,
or if you wish to "map" a different extension to the template engine
you may use this method. For example mapping the EJS template engine to
".html" files:

    app.engine('html', require('ejs').renderFile);

In this case EJS provides a `.renderFile()` method with
the same signature that Express expects: `(path, options, callback)`,
though note that it aliases this method as `ejs.__express` internally
so if you're using ".ejs" extensions you dont need to do anything.

Some template engines do not follow this convention, the
[Consolidate.js](https://github.com/visionmedia/consolidate.js)
library was created to map all of node's popular template
engines to follow this convention, thus allowing them to
work seamlessly within Express.

#### Parameters

• **ext**: `string`

• **fn**

#### Returns

`this`

#### Param

string

#### Param

(path: string, options: object, callback: (e: any, rendered?: string) => void) => void

#### Defined in

[index.ts:424](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L424)

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

[index.ts:276](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L276)

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

[index.ts:353](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L353)

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

[index.ts:456](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L456)

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

[index.ts:393](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L393)

***

### mount

> `readonly` **mount**: `string` \| `string`[]

The `mount` property contains one or more path patterns on which a sub-app was mounted.

Source: http://expressjs.com/en/5x/api.html#app.mountpath

#### Defined in

[index.ts:466](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L466)

***

### mountpath

> `readonly` **mountpath**: `string` \| `string`[]

The `mountpath` property contains one or more path patterns on which a sub-app was mounted.

Source: http://expressjs.com/en/5x/api.html#app.mountpath

#### Defined in

[index.ts:476](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L476)

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

[index.ts:367](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L367)

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

The callback uses the samesignature as middleware, the only differencing
being that the value of the placeholder is passed, in this case the _id_
of the user. Once the `next()` function is invoked, just like middleware
it will continue on to execute the route, or subsequent parameter functions.

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

#### Parameters

• **name**: `string` \| `string`[]

• **handler**: `RequestParamHandler`

#### Returns

`this`

Alternatively, you can pass only a callback, in which case you have the opportunity to alter the app.param()

#### Parameters

• **callback**

#### Returns

`this`

#### Deprecated

since version 4.11

#### Defined in

[index.ts:296](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L296)

***

### path()

> `readonly` **path**: () => `string`

Returns the canonical path of the application, a string.

The behavior of this method can become very complicated in complex cases of mounted apps:
it is usually better to use request.baseUrl to get the canonical path of the app.

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

[index.ts:489](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L489)

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

[index.ts:120](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L120)

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

[index.ts:307](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L307)

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

[index.ts:318](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L318)

***

### registry

> `readonly` **registry**: [`Registry`](../wiki/registry.Registry.Class.Registry)

The application registry, contains all the routes, middlewares and event handlers.

#### Defined in

[index.ts:137](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L137)

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

Example:

   app.render('email', { name: 'Tobi' }, function(err, html){
     // ...
   })

#### Parameters

• **name**: `string`

• **options?**: `object`

• **callback?**

#### Returns

`void`

#### Parameters

• **name**: `string`

• **callback**

#### Returns

`void`

#### Defined in

[index.ts:329](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L329)

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

[index.ts:339](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L339)

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

[index.ts:380](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L380)

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

[index.ts:201](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L201)

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

[index.ts:610](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L610)

***

### set()

> **set**(`Name`, `Value`): `void`

Assigns setting name to value.
You may store any value that you want, but certain names can be used to configure the behavior of the server.
These special names are listed in the app settings table.

Calling app.set('foo', true) for a Boolean property is the same as calling app.enable('foo').
Similarly, calling app.set('foo', false) for a Boolean property is the same as calling app.disable('foo').

Source: http://expressjs.com/en/5x/api.html#app.set

#### Parameters

• **Name**: `string`

JovaSettingsTable | string

• **Value**: `any`

any

#### Returns

`void`

#### Defined in

[index.ts:410](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L410)

***

### testServerDeploy()

> **testServerDeploy**(`port`?, `exit`?): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Run a Jova test server, starts up and shuts back down returning an optional 0 exit code for success or 1 for error.

#### Parameters

• **port?**: `string` \| `number`

• **exit?**: `true`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

#### Defined in

[index.ts:669](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/index.ts#L669)
