const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@cluster0.t6g6e.mongodb.net/mern-project',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log('connected to mongoDB'))
    .catch((err) => console.log('Failes to connect to Mongodb', err))