import { Router } from "express"
import { createItem, getItems } from "./handlers/item"
import { body } from "express-validator"

const router = Router()

router.get('/', getItems)

router.post('/', 
    body('name')
        .notEmpty().withMessage('The menu item must have a name'),
    body('price')
        .isNumeric().withMessage('Please enter a valid menu item price')
        .custom( value => value > 0).withMessage(('Please enter a valid product price')),
    
    createItem
)


export default router