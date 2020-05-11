import passport from 'passport'
import { Strategy  as LocalStrategy } from 'passport-local'
import UserModel from '../model/user.model';

passport.use(new LocalStrategy(
  async (username, password, done) =>{
    try {
      let user = await UserModel.findOne({username:username})
      if (!user){
        return done(null, false, {message: 'Unknown User'});
      }
      let isMatch = await user.matchPasswords(password)
      if (!isMatch){
        return done(null, false, { message : 'invalid password' })
      }
      return done(null, user);

    } catch(err){
      return done(null, false, {message: 'API ERROR'});
    }
  }
));

