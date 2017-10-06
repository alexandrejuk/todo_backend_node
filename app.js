const express    = require('express'),
      app        = express(),
      port       = process.env.PORT || 3000,
      mongoose   = require('mongoose'),
      Task       = require('./api/models/todoListModel'),
      bodyParser = require('body-parser'),
      routes     = require('./api/routes/todoListRoutes');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
routes(app);

app.listen(port, () => {
    console.log(`Api rest todo on:${port}`);
})