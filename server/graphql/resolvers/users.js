import UserModel from '../../model/user.model';
import bcrypt from 'bcrypt';
import { getJWTFunc } from '../../utils/jwt';

module.exports = {
  users: async () => {
        try {
            const data = await UserModel.find();
            return data;
          } catch (err) {
            throw err;
          }
    },
    login: async (args) => {
      const user = await UserModel.findOne({ username: args.username });
      if (!user) {
        throw new Error('User does not exist!');
      }
      const isEqual = await bcrypt.compare(args.password, user.password);
      if (!isEqual) {
        throw new Error('Password is incorrect!');
      }
      const token = await getJWTFunc(user);
      return { userId: user._id, token: token };
    },
    register: async (args) => {
      const user = await UserModel.create(args.data);
      return user;
    }
};
  