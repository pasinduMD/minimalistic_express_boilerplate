import express, { Application, Request, Response } from "express";

const app: Application = express();

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  return res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
