const express = require('express');
const cors = require('cors');
const passport = require("passport");
const path = require("path");
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

//=== 1 - CREATE APP
// Creating express app and configuring middleware needed for authentication
const app = express();

app.use(cors());

// for parsing application/json
app.use(express.json());

// for parsing application/xwww-
app.use(express.urlencoded({ extended: false }));
//form-urlencoded

//=== 2 - SET UP DATABASE
//Configure mongoose's promise to global promise
connectDB();

//=== 3 - INITIALIZE PASSPORT MIDDLEWARE
app.use(passport.initialize());
require("./middleware/jwt")(passport);


//=== 4 - CONFIGURE ROUTES
//Configure Route
require('./routes/api/index')(app);

// Setting up port

const PORT = process.env.PORT || 5000;

/* if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
} */

//=== 5 - START SERVER
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);