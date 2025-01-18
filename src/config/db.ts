import mongoose from "mongoose";

export default function ConnectDb() {

    const MONGO_URL = process.env.MONGO_DB_SERVER;

    if (!MONGO_URL) {
        console.log("MONGO_DB_SERVER is not defined");
        process.exit(1);
    }

    try {
        mongoose.connect(MONGO_URL);
    } catch (e: any) {
        console.error(e.message);
        process.exit(1);
    }
    const dbConnection = mongoose.connection;
    dbConnection.once("open", (_) => {
        console.log(`Database connected: ${MONGO_URL}`);
    });

    dbConnection.on("error", (err) => {
        console.error(`connection error: ${err}`);
    });
    return;
}
