const express = require('express')
const router = express.Router()
const {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
} = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// This combines the get and post requests at the /api/goals/ route
router.route('/').get(protect, getGoals).post(protect, setGoal)

// This function to run on a get request
// First arg of '/' just means this file
// Function getGoals exported from ../controllers/goalController
// router.get('/', getGoals)

// router.post('/', setGoal)

router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

// Updates a goal with the put action
// ':id' represents the requirement for an id parameter in the request
// as /api/goals/{id}
// router.put('/:id', updateGoal)

// router.delete('/:id', deleteGoal)

module.exports = router