export type EventHandler = (...args: any[]) => Promise<any | void> | void | any;
