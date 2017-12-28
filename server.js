const express = require('express');
const hbs = require('hbs');

const app = express();


hbs.registerPartials(__dirname + '/views/partials');

hbs.registerHelper('curYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('websiteName', () => {
    return 'KG Website';
});

hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});


app.set('view engine', 'hbs');




app.use((req, res, next) => {
    var log = `${new Date().toString} : ${req.method} ::: ${req.url}`;

    console.log(log);

    next();
});

// app.use((req, res, next) => {

//     res.render('maintain.hbs', {
//         pageName: 'Website Under Maintainance'
//     });

// });

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) =>{

    res.render('home.hbs', {
        myName: 'kg',
        pageName: 'Home Page'
    })

});


app.get('/about', (req, res) => {

    res.render('about.hbs', {
        pageName: 'About Page'
    });

});


app.get('/bad', (req, res) => {

    res.send({
        errorMessage: "Unable to Reach"
    });

}) ;




app.listen(3000, () =>{
    console.log('Server is running on port 3000');
});




