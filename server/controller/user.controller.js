import UserModel from '../model/user.model';
import passport from 'passport';

const getAllUsers = async () => {
    const users = await UserModel.find({})
    return users;
}

const registerUser = async (args) => {
    const user = await UserModel.create(args);
    return user;
}

const signInUsers = async (args) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {

        console.log(user)

        // if (err || !user) {
        //   return res.json({ message: info.message, result: user });
        // }
        // req.login(user, { session: false }, err => {
        //   if (err) {
        //     res.send(err);
        //   }

        //   let data = user
        //   let token = getJWTFunc(user)

        // //   let logsobj = { type : user.role, description : 'sign_in', user : req.body.id}
        // //   let logs = await LogCtl._saveLogs(logsobj)

        //   return {user, token }

        // });

        return {}
      });
}

export {
    getAllUsers,
    registerUser,
    signInUsers
};
  