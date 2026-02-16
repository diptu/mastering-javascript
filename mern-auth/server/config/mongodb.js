import mongoose from "mongoose";

const connectionDB = async () => {

    mongoose.connect(`${process.env.MONGODB_URI}/${process.env.DB_NAME}`)
        .then(() => console.log('Mongodb Connected!'));
}

export default connectionDB;