import express, {Application, Request, Response, NextFunction} from "express";

const app:Application = express();

const add = (a: number , b:number): number => a + b;

app.get('/', (req:Request, res:Response) => {
    const result: string = add(5,5).toString();
    res.send(result);
});

app.listen(5000, () => console.log('Server running...'));