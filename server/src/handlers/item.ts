import { Request, Response } from "express"
import Item from "../models/Item"

export const getItems = async (req: Request, res: Response) => {
    res.send('FROM GET ITEMS')
}

export const getItemById = async (req: Request, res: Response) => {
    res.send('FROM GET ITEM BY ID')
}

export const createItem = async (req: Request, res: Response) => {
    const product = await Item.create(req.body)
    res.status(201).json({ data: product })
}

export const updateItem = async (req : Request, res : Response) => {
    res.send('FROM UPDATE ITEM')
}

export const updateAvailability = async (req : Request, res : Response) => {
    res.send('FROM UPDATE AVAILABILITY')
}

export const deleteItem = async (req: Request, res: Response) => {
    res.send('FROM DELETE ITEM')
}