import express from 'express';
import {mowerRouter} from "./routes";

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.use('/mowers', mowerRouter);
app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${PORT}`);
});

