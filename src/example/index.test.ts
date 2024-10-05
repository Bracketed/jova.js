import { JovaServer } from '../index.js';

const Jova = new JovaServer({ cors: { origin: '*' } });

await Jova.listen(3000);
