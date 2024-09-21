import { Router } from "express"
import { createItem, deleteItem, getItemById, getItems, updateAvailability, updateItem } from "./handlers/item"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

// GET ALL ITEMS
router.get('/', 
    getItems
)

// GET A SINGLE ITEM
router.get('/:id',
    param('id')
        .isInt().withMessage('ID not valid')
        .custom( value => value > 0 ).withMessage('ID must be a positive integer'),

    handleInputErrors,
    getItemById
)

// CREATE AN ITEM
router.post('/', 
    body('name')
        .notEmpty().withMessage('The item must have a name'),
    body('price')
        .isNumeric().withMessage('Please enter a valid item price')
        .custom( value => value > 0).withMessage(('Please enter a valid item price')),
    
    handleInputErrors,
    createItem
)

// UPDATE AN ITEM
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

// UPDATE ITEM AVAILABILITY
router.patch('/:id', 
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
    updateAvailability
)

// DELETE AN ITEM
router.delete('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    handleInputErrors,
    deleteItem
)

export default router