import { Request, Response } from "express"
import { User } from "../model/user.model"

const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find();
        if(!users) {
            return res.status(204).json({ message: 'No hay usuarios' })
        }
        return res.status(200).json({ users })
    } catch (error: any) {
        console.log(error.message)
        return res.status(500).json({ message: 'Error del servidor' })
    }
}

const addUser = async (req: Request, res: Response) => {
    try {
        const { name, password } = req.body;
        const user = new User({ name, password });
        await user.save();
        return res.status(201).json({ message: 'Usuario creado' })
    } catch (error: any) {
        console.log(error.message)
        return res.status(500).json({ message: 'Error del servidor' })
    }
}

export {
    getUsers,
    addUser
}
