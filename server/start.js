import dotenv from 'dotenv';
import mongoose from 'mongoose';
import app from './app';
import passport from 'passport'

dotenv.config();

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection.on('error', (err) => {
  console.error(`Error!: ${err.message}`);
});

app.use(passport.initialize())
app.use(passport.session())

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Listening to port ${PORT}`))