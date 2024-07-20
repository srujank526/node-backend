import  express from 'express';
import http from 'http';
import cors from 'cors'
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = process.env.PORT || 8080;
app.use(cors());

app.get("/",(req,res)=>{
    res.send({message:"hello srujan"})
})
server.listen(PORT, () => {
	console.log(`The server listening at port ${PORT}`);
});
io.on('connection',(socket)=>{
    console.log(socket)
})