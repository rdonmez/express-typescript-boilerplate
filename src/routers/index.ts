import { Router, Request, Response } from "express";
import { HttpCode } from "../core/httpcodes";

export const router = Router();

router.get("/", (req: Request, res: Response ) => {
    res.status(HttpCode.OK).send({ message: "Welcome to API" })
})