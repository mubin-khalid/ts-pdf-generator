import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("*", function (req: Request, res: Response, next: NextFunction) {
  next();
});

export default app;