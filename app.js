var express = require('express')
   , app = express()
   , load = require('express-load')
   , error = require('./middleware/error');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.cookieParser('ntalk'));
app.use(express.session());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(__dirname + '/public'));
app.use(error.notFound);
app.use(error.serverError);

// APAGAR: app.get('/', routes.index);
// APAGAR: app.get('/usuarios', routes.user.index);

load('models')
   .then('controllers')
   .then('routes')
   .into(app);

app.listen(3000, function(){
    console.log("Ntalk no ar.");
});