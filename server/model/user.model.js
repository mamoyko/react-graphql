import mongoose from 'mongoose';
import bcrypt from "bcrypt";
/**
 *  Role : 
 *  0: super admin
 *  1: admin / lecturer
 *  2: students
 * 
 */

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: 'Please enter a firstname',
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: 'Please enter a lastname',
  },
  address: {
    type: String,
  },
  username: {
    type: String,
    required: 'You must supply an username',
  },
  password: {
    type: String,
    required: 'You must supply an password',
  },
  email: {
    type: String
  },
  role: {
    type: Number,
    required: 'You must supply this user role',
  },
  phone: {
    type: String,
  },
  created: {
    type : Date,
    default : function(){
      return Date.now();
    }
  }
});

//define our indexes
userSchema.index({
    username: 'text'
});

userSchema.pre('save',async function(next) {
  let user = this;
  if( !user.isModified('password')) return next();
  let hashedpassword  = await bcrypt.hash(user.password, 10);
  user.password = hashedpassword
  next();
});

export default mongoose.model('Users', userSchema);
