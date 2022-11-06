/* GET homepage*/
const index = (req, res) => {

    pageTitle = "Travlr Getaways - Home";
    res.render('index', {title: pageTitle });
};

module.exports = {
    index
};