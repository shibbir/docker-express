const path = require('path');
const hbs = require('express-hbs');
const express = require('express');
const app = express();

app.engine('html', hbs.express4({ extname: '.html' }));
app.set('view engine', 'html');
app.set('views', path.join(process.cwd(), 'views'));

app.set('port', 3000);

app.get('/', (req, res) => res.render('index'));

app.listen(app.get('port'), () => {
    console.info("Server running in %s mode...", app.settings.env);
});
