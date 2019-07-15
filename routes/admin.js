const express = require('express');
const News = require('../models/news');
const router = express.Router();


router.all('*', (req, res, next)=>{
    if(!req.session.admin){
        res.redirect('login')
        return
    }
    next()
})


/* GET home page. */
router.get('/', (req, res, next) => {
    const newsData = new News({
        title: 'testowy tytuł',
        description: 'testowy opis'
    })
    newsData.save((err) => {
        console.log(err);
    })
    res.render('admin', { title: 'Admin' });
});

module.exports = router;