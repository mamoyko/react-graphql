import jwt from "jsonwebtoken"

export const getJWTFunc = (data) => {
    console.log(data,"======")
    let token = jwt.sign({
        _id : data._id,
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        username : data.username,
        role: data.role,
        address: data.address,
        phone: data.phone,
        created: data.created
    },process.env.SECRET_KEY)
    return token
}