import { Router } from "express"
import { createItem, deleteItem, getItems, updateAvailability, updateItem } from "./handlers/item"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

router.get('/', 
    getItems
)

router.post('/', 
    body('name')
        .notEmpty().withMessage('The menu item must have a name'),
    body('price')
        .isNumeric().withMessage('Please enter a valid menu item price')
        .custom( value => value > 0).withMessage(('Please enter a valid item price')),
    
    handleInputErrors,
    createItem
)

router.put('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    body('name')
    .notEmpty().withMessage('The item name must not be empty'),
        
    body('price')
        .isNumeric().withMessage('Please enter a valid item price')
        .notEmpty().withMessage('The item price must not be empty')
        .custom( value => value > 0).withMessage('Please enter a valid item price'),
    body('availability')
        .isBoolean().withMessage('Availability must be a boolean'),
    handleInputErrors,
    updateItem
)

router.delete('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    handleInputErrors,
    deleteItem
)

export default router