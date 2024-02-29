import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import path from "path";
import userRouter from "./routes/userRouter.js";
import jobRouter from "./routes/jobRouter.js";
import applicationRouter from "./routes/applicationRouter.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
dotenv.config({ path: "./config/config.env" });

const __dirname = path.resolve();

// app.use(
//     cors({
//         origin: [process.env.FRONTEND_URL],   //for connecting to the frontend
//         methods: ["GET", "POST", "DELETE", "PUT"],
//         credentials: true,
//     })
// );

app.use(cookieParser());         //for autherisation of user
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir: "/tmp/",
    })
);

app.use("/api/user", userRouter);
app.use("/api/application", applicationRouter);
app.use("/api/job", jobRouter);

dbConnection();

//error middleware
app.use(errorMiddleware);

app.get("/login", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "client", "build")));
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

export default app;
