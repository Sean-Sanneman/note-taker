const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(express.static('public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);
//require("./routes/apiRoutes.js")(app);
//require("./routes/htmlRoutes.js")(app);





app.listen(PORT, () => console.log(`listening on PORT: ${PORT}`));