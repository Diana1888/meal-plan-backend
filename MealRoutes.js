const { Router } = require('express');
const { getMeal, saveMeals, deleteMeal, editMeal } = require('./MealController');

const router = Router();

router.get('/', getMeal);
router.post('/saveMeals', saveMeals);
router.post('/editMeal', editMeal);
router.post('/deleteMeal', deleteMeal);

// зачастую 
//router.delete('/deleteMeal', deleteMeal); чтобы обновить весь список



module.exports = router;