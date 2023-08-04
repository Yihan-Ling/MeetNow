import express from 'express';
import { retrieveRoomList } from '../../data/rooms-dao';

const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();


router.get('/', async(req, res) => {
    const roomsData = await retrieveRoomList();
    res.status(HTTP_OK)
        .json(roomsData);
});

export default router;