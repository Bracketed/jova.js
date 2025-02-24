# Enumeration: ApplicationEvent

Events for Jova Listeners.

 string

## Enumeration Members

### ALL

> **ALL**: `"any"`

Catch all events.

Listener Handler Params: `event: ApplicationEvent, ...args: any[]`

 string

#### Defined in

[types/JovaEvents.ts:31](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/JovaEvents.ts#L31)

***

### ERROR

> **ERROR**: `"error"`

If an error occurs in the Jova Server.

Listener Handler Params: `error: Error | unknown`

 string

#### Defined in

[types/JovaEvents.ts:39](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/JovaEvents.ts#L39)

***

### MOUNT

> **MOUNT**: `"mount"`

The mount event is fired on a sub-app, when it is mounted on a parent application. The parent app is passed to the callback function.

Listener Handler Params: `application: JovaServer`

 string

#### Defined in

[types/JovaEvents.ts:47](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/JovaEvents.ts#L47)

***

### READY

> **READY**: `"ready"`

When the Jova Server has successfully started.

Listener Handler Params: `none`

 string

#### Defined in

[types/JovaEvents.ts:15](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/JovaEvents.ts#L15)

***

### ROUTE

> **ROUTE**: `"route"`

When a route runs its handler function.

Listener Handler Params: `request: ApplicationRequest`

 string

#### Defined in

[types/JovaEvents.ts:23](https://github.com/Bracketed/jova.js/blob/2f92fdba02fb19f5694e65f757c95f41b8415e1b/src/types/JovaEvents.ts#L23)
