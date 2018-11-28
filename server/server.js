
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

// const twitchPassport = require('./strategies/twitch.strategy');
// const googlePassport = require('./strategies/google.strategy')

// Route includes
// const userRouter = require('./routes/user.router');
// const twitchAuthRouter = require('./routes/authrouters/twitch-auth.router')
// const googleAuthRouter = require('./routes/authrouters/google-auth.router')
// const developmentRouter = require('./routes/development.router')

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
// app.use(twitchPassport.initialize());
// app.use(twitchPassport.session());
// app.use(googlePassport.initialize());
// app.use(googlePassport.session());

/* Routes */
// app.use('/api/user', userRouter);
// app.use('/api/auth/twitch', twitchAuthRouter)
// app.use('/api/auth/google', googleAuthRouter)
// app.use('/api/development', developmentRouter)

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;



/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
