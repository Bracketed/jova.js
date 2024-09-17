[Jova.js by Bracketed Softworks v1.0.0](../wiki/modules) / [types/JovaEvents](../wiki/types.JovaEvents) / ApplicationEvent

# Enumeration: ApplicationEvent

Events for Jova Listeners.

## Enumeration Members

### ALL

> **ALL**: `"any"`

Catch all events.

Listener Handler Params: `event: ApplicationEvent, ...args: any[]`

#### Defined in

[types/JovaEvents.ts:31](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/JovaEvents.ts#L31)

***

### ERROR

> **ERROR**: `"error"`

If an error occurs in the Jova Server.

Listener Handler Params: `error: Error | unknown`

#### Defined in

[types/JovaEvents.ts:39](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/JovaEvents.ts#L39)

***

### MOUNT

> **MOUNT**: `"mount"`

The mount event is fired on a sub-app, when it is mounted on a parent app. The parent app is passed to the callback function.

Listener Handler Params: `application: JovaServer`

#### Defined in

[types/JovaEvents.ts:47](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/JovaEvents.ts#L47)

***

### READY

> **READY**: `"ready"`

When the Jova Server has successfully started.

Listener Handler Params: `none`

#### Defined in

[types/JovaEvents.ts:15](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/JovaEvents.ts#L15)

***

### ROUTE

> **ROUTE**: `"route"`

When a route runs its handler function.

Listener Handler Params: `request: ApplicationRequest`

#### Defined in

[types/JovaEvents.ts:23](https://github.com/Bracketed/jova.js/blob/c23178b8e91726d68082478cffbb501e8952a3a3/src/types/JovaEvents.ts#L23)
