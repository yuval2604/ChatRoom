import express from "express";

const chatApi = express.Router()

chatApi.get('/', (req, res) => {
    res.send('server is up and running')
})


export default chatApi;
