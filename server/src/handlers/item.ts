import { Request, Response } from "express"

export const getItems = async (req: Request, res: Response) => {
    res.send('FROM GET MENU ITEMS')
}

export const createItem = async (req: Request, res: Response) => {
    res.send('FROM CREATE ITEM')
}

export const deleteItem = async (req: Request, res: Response) => {
    res.send('FROM DELETE ITEM')
}