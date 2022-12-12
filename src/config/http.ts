import compression from 'compression';
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import helmet from 'helmet';

type RequestProps<A, B, C, D> = Request<A, B, C, D>;
type ResponseProps = Response;
type NextFunctionProps = NextFunction;

const app = express();

app.use(helmet());
app.use(compression({ level: 9 }));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const appRoutes = express.Router();

export { app, appRoutes, RequestProps, ResponseProps, NextFunctionProps };
