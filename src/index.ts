import { WebSocketServer , WebSocket } from 'ws'

let AllSockets:WebSocket[]=[];

const wss=new WebSocketServer({ port:8080 });

wss.on('connection',(socket)=>{
    AllSockets.push(socket);

    console.log('connections has been established')

    socket.on("message",(message)=>{
        for(let i=0;i<AllSockets.length;i++){
            const s=AllSockets[i];
            s?.send(message + " Coming from the server")
        }
    })
})