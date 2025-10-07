require('dotenv').config()
const app = require('./src/app')
const { createServer } = require("http");
const { Server } = require("socket.io");
const generateResponse = require('./src/service/ai.service')

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });



const chatHistory = []


io.on("connection", (socket) => {
   console.log('A user connected');
   
   socket.on("disconnect", () => {
    console.log('A user disconnected');
   })

   socket.on('ai-message', async(data) => {
    console.log('AI message recived: ', data);

    // chat memory history mone rakhar jonno chatHistory use kora holo 
    // user jei chat kore seta cahtHistory te push kora holo 
    // nicher ta user er chat
    chatHistory.push({
        role: 'user',
        parts: [{text: data}]
    })

    const response = await generateResponse(chatHistory)
    
    // AI jeta response day seta chatHistory te push kora holo
    // nicher ta AI er diya response
    chatHistory.push({
        role: 'model',
        parts: [{text: response}],

    })
    socket.emit('ai-message-response', response)
    
   })

});

httpServer.listen(3000, () => {
    console.log('server is running on port 3000');
    
});