const express = require('express');
const app = express();
const path = require('path');
const router = require('./router');

app.set('view engine' ,'ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.json());
app.use(router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => console.log(`Listening on ${PORT}`));
