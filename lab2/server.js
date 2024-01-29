const express = require('express');
const session = require('express-session');
const path = require('path');

const homepg = require('./routes/home.routes');
const cartpg = require('./routes/cart.routes');

const app = express();

app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use(
    session({
        secret: "anything",
        resave: false,
        saveUninitialized: true,
    })
);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    const categories = [
        { name: "Hrana" },
        { name: "Ljubimci" },
        { name: "Automobili" },
        { name: "Informatika" },
        { name: "Alat" },
        { name: "Odjeca" },
        { name: "Pića" },
        { name: "Umjetnine" },
        { name: "Sport" },
        { name: "Obuća" }
    ];
    res.render('home', { categories });
});
app.get('/cart', function(req, res) {
    res.render('cart');
});

app.use('/home', homepg);
app.use('/cart', cartpg);


app.listen(8080);


