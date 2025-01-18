import { Request, Response, Router } from "express";
import { getUsers, addUser } from "../controller/users.controller";

const router = Router();

router.get('/', (req: Request, res: Response) => {
    getUsers(req, res);
});

router.post('/', (req: Request, res: Response) => {
    addUser(req, res);
});

export default router
