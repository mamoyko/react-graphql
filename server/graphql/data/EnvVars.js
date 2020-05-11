import dotenv from 'dotenv';
dotenv.config();

// const EnvVars = {
//     database: process.env.DATABASE,
//     key: process.env.SECRET_KEY
// }

const EnvVars = async () => {
    await {
        database: process.env.DATABASE,
        key: process.env.SECRET_KEY
    }
}

export default EnvVars;
  