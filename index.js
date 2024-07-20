import  express from 'express';
import http from 'http';
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

app.get("/",(req,res)=>{
    res.send({message:"hello srujan"})
})
server.listen(PORT, () => {
	console.log(`The server listening at port ${PORT}`);
});