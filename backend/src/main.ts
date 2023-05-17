import cors from 'cors';
import express from 'express';

const port = 6060;
const host = 'localhost';

const app = express();

app.use(cors());

// eslint-disable-next-line prefer-const
let contactDatabase = [
  { name: 'Christoph-Thomas Abs' },
  { name: 'Moritz Tittler' },
  { name: 'Tim Jeske' },
  { name: 'Ricarda Priebe' }
]

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/contacts', (req, res) => {
  res.send(contactDatabase);
});

app.post('/contacts', (req, res) => {
  // Add contact record
});

app.put('/contacts', (req, res) => {
  // Change contact record
});

app.delete('/contacts', (req, res) => {
  // Delete contact record
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
