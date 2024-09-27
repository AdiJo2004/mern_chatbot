import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
config();
//middlewares
const app = express();
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
//remove it in productions
app.use(morgan("dev"));
app.use("/api/v1", appRouter); //request made to this api endpt handled by approuter
export default app;
//# sourceMappingURL=app.js.map