import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import dotenv from "dotenv";
import usersApi from './routes/usersApi.js'
import chatApi from "./routes/chatApi.js";
import connectDB from "./db.js";
import cors from "cors"
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

//dotenv.config();
// Body parser
app.use(cors());
app.use(express.json())

// Cookie parser
app.use(cookieParser());
// dotenv.config({ path: ".env" });
// app.use(morgan("dev"));

// mount our api router here
app.use("/users", usersApi);
app.use('/chat', chatApi);

// Serve static files from the React app
app.use(express.static("/Users/yuvalbeiser/Documents/fun/soldgame/fun/interview_tests/ChatRoom/src/client/public"));


io.on('connection', (socket) => {
    socket.on('register', () => {
        console.log("register")
        // const { error, user } = addUser({ id: socket.id, name, password }); //add user function can only return 2 things a user with error property or user property

        // if (error) return callback(error); //error handeling
        // //no errors
        // //emit an event from the backend to the front end with a payload in {} part
        // socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the the room ${user.room}` }); // welcomes user to chat
        // //broadcast sends a message to everyone besides that specific user
        // socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });//lets everyone know except user that they joined 

        // socket.join(user.room);
        // //emit to the room that the user belongs too, hence why we pass in user.room to get the users in that room
        // io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        // callback();
    });

    //gets an event from the front end, frontend emits the msg, backends receives it
    socket.on('sendMessage', (message, callback) => {
        // const user = getUser(socket.id); //we havve access to socket from above
        // //when the user leaves we send a new message to roomData
        // //we also send users since we need to know the new state of the users in the room
        // io.to(user.room).emit('message', { user: user.name, text: message });
        // callback();

    })

    //does not take any parameters since we are just unmounting here
    socket.on('disconnect', () => {
        // const user = removeUser(socket.id); //remove user when they disconnect
        // //admin sends a message to users in the room that _ user has left
        // if (user) {
        //     io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
        //     io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        // }
    })
})

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});




server.listen(process.env.PORT || 4001, () => console.log(`Server has started.`));
//app.listen(3001, () => console.log(`LISTENING ON UHH PORT 3001`));

export default app;
