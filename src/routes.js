import {app} from './consts';
import { second } from './demo1.js';


app.get('/', (req, res) => {
  const result2 = second('Ahoj web ', 666);
  res.send(result2);
});
