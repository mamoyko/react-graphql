import jwt from "jsonwebtoken"

export const getJWTFunc = (data) => {
    let token = jwt.sign({
        _id : data._id,
        firtName : data.firtName,
        lastName : data.lastName,
        email : data.email,
        username : data.username,
    },process.env.SECRET_KEY)
    return token
}