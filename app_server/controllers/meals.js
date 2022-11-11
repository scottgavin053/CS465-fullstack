var fs = require('fs');
var mealList = JSON.parse(fs.readFileSync('./data/meals.json', 'utf8'));

/* GET meals view */
const meals = (req, res) => {
     
    pageTitle =  'Travlr Getaways - Meals';
    res.render('meals', { title: pageTitle, mealList });
    };

    module.exports = {
        meals
};
