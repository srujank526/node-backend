import express from 'express';
import http from 'http';
import cors from 'cors'
import { Server } from "socket.io";
import { getNewPlayerSet, getType } from './common/players.js';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000", 'https://my-app-bhvv.onrender.com']
    }
});

const PORT = process.env.PORT || 8080;
app.use(cors());

let clients = [];
let roomData = {};



app.get("/", (req, res) => {
    res.send({ message: "hello srujan" })
})
server.listen(PORT, () => {
    console.log(`The server listening at port ${PORT}`);
});
io.on('connection', (socket) => {
    socket.on('join-room', ({ name, roomId }) => {
        let client = { socket: socket.id, roomId, name }
        clients.push(client);
        socket.join(roomId);
        const filteredClients = clients.filter(client => client.roomId === roomId);
        io.to(roomId).emit('roomJoined', filteredClients)

        if (!roomData[roomId]) {
            roomData[roomId] = {
                typeId: -1,
                playerId: -1,
                players: getNewPlayerSet(),
                type: getType()
            };
        }
        socket.on('reqSet', () => {
            roomData[roomId].typeId += 1;
            roomData[roomId].playerId = -1; // Reset player ID when a new set is requested
            io.to(roomId).emit('resSet', roomData[roomId].type[roomData[roomId].typeId]);
        });

        socket.on('reqPlayer', () => {
            const playerId = roomData[roomId].playerId + 1;
            const setId = roomData[roomId].typeId
            const type = roomData[roomId].type[setId]
            io.to(roomId).emit('resPlayer', roomData[roomId].players[type][playerId]);
                // io.to(roomId).emit('currentBid', { user: null, bidAmount: player.basePrice });
            roomData[roomId].playerId = playerId
        });
    })
})