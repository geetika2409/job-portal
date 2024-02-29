import mongoose from "mongoose"

export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Database connected to ${mongoose.connection.host}`)
    }).catch((err) => console.log(`Database error: ${err}`));
};