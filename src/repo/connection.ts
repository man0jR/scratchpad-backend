import mongoose from "mongoose";



export const connectToDatabase = async () => {
    try{
        const db = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log('Connected to Mongo DB', db.connection.host, db.connection.name);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

