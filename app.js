const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.use(express.static('public'));
app.use(express.static('node_modules'));
app.get('/', (req, res) => {
    res.send('it is working from web!');
});

const events = require('./routes/event-routes');
app.use('/events', events);

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
})