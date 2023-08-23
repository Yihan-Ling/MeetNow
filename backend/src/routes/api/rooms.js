import express from 'express';
import { retrieveRoomList, createRoom } from '../../data/rooms-dao';

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

// Create new article
router.post('/', async (req, res) => {
    const newRoom = await createRoom(req.body);

    if (newRoom) return res.status(HTTP_CREATED)
        .header('Location', `/api/rooms/${newRoom._id}`)
        .json(newRoom);

    return res.sendStatus(422);
})

export default router;