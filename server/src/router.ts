import { Router } from "express"
import { getActivities, getActivityById, createActivity, updateActivity, deleteActivity } from "./handlers/activity"
import { body, param } from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()

// GET ALL ACTIVITIES
router.get('/', 
    getActivities
)

// GET A SINGLE ACTIVITY
router.get('/:id',
    param('id')
        .isInt().withMessage('ID not valid')
        .custom( value => value > 0 ).withMessage('ID must be a positive integer'),

    handleInputErrors,
    getActivityById
)

// CREATE AN ACTIVITY
router.post('/', 
    body('category')
        .notEmpty().withMessage('The activity must have a category')
        .isNumeric().withMessage('Please enter a valid category')
        .custom( value => value > 0 && value <= 2).withMessage(('Please enter a valid category')),
    body('name')
        .notEmpty().withMessage('The activity must have a name'),
    body('calories')
        .notEmpty().withMessage('The activity must have a calorie quantity')
        .isNumeric().withMessage('Please enter a valid calorie quantity')
        .custom( value => value > 0).withMessage(('Please enter a valid calorie quantity')),
    
    handleInputErrors,
    createActivity
)

// UPDATE AN ACTIVITY
router.put('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    body('category')
        .notEmpty().withMessage('The activity must have a category')
        .isNumeric().withMessage('Please enter a valid category')
        .custom( value => value > 0 && value <= 2).withMessage(('Please enter a valid category')),
    body('name')
        .notEmpty().withMessage('The activity must have a name'),
    body('calories')
        .notEmpty().withMessage('The activity must have a calorie quantity')
        .isNumeric().withMessage('Please enter a valid calorie quantity')
        .custom( value => value > 0).withMessage(('Please enter a valid calorie quantity')),

    handleInputErrors,
    updateActivity
)

// DELETE AN ACTIVITY
router.delete('/:id',
    param('id').isInt().withMessage('ID not valid'),
    
    handleInputErrors,
    deleteActivity
)

export default router