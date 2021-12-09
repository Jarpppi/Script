const { response } = require("express");
const date = require(__dirname+'../getDate.js');

exports.getMainPage = (request, response)=> {
    let today = date.getDate();

    response.render('index',{dateToRender: today});
}

exports.getDate = router.get('/getdate', (req, res)=> { //req - request, res - response
    let today = date.getDate();
    res.send(today);
});



exports.getWeekDay = router.get('/weekday', (req, res) => {
    let weekday = date.getWeekDay();
    res.send(weekday);
});

exports.postWish = (req, res) => {
    console.log(req.body.userWish);
    const newWish = new Wish(req.body.userWish);
    newWish.saveWish();

    res.redirect('/');
}