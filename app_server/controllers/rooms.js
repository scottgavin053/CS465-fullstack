var fs = require('fs');
var roomList = JSON.parse(fs.readFileSync('./data/rooms.json', 'utf8'));

/* GET rooms view */
const rooms = (req, res) => {
     
    pageTitle =  'Travlr Getaways - Rooms';
    res.render('rooms', { title: pageTitle, roomList });
   };

   module.exports = {
    rooms
   };
   