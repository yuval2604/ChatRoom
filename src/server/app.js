import connectDB from "./db.js";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import usersApi from "./routes/usersApi.js";
import chatApi from "./routes/chatApi.js";
import cors from "cors";
import { Server } from 'socket.io';
import { createServer } from 'http';

const __dirname = path.resolve();


const app = express();

const server = createServer(app);
const io = new Server(server, {
    cors:
    {
        origin: '*'
    }
});

dotenv.config({ path: ".env" });

// Body parser
app.use(express.json());

// Cookie parser
app.use(cookieParser());

app.use(morgan("dev"));

// mount our api router here
app.use("/users", usersApi);
app.use('/chat', chatApi);
//app.use('/auth', auth )

// Serve static files from the React app
app.use(express.static("/Users/yuvalbeiser/Documents/fun/soldgame/fun/interview_tests/ChatRoom/src/client/public"));

connectDB();

io.on('connection', (socket) => {
    socket.on('chat message', () => {
        socket.emit('join', 'test');
        console.log('message: ');
    });
});
// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get("*", (req, res) => {
    console.log("req.path", req.path);
    res.sendFile(path.join(__dirname + "../client/build/index.html"));
});
//app.use(cors());


server.listen(process.env.PORT || 4001, () => console.log(`Server has started.`));
export default app;
