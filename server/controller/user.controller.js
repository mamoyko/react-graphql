import UserModel from '../model/user.model';
import bcrypt from 'bcrypt';
import { getJWTFunc } from '../utils/jwt';

const getAllUsers = async () => {
    const users = await UserModel.find({})
    return users;
}

const registerUser = async (args) => {
    const user = await UserModel.create(args);
    return user;
}

const signInUsers = async (args) => {
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
}

export {
    getAllUsers,
    registerUser,
    signInUsers
};
  