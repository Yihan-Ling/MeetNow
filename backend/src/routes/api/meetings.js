import express from 'express';
import { retrieveMeetingList } from '../../data/meetings-dao';

const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();


// Create new article
router.get('/', async(req, res) => {
    const meetingsData = await retrieveMeetingList();
    res.status(HTTP_OK)
        .json(meetingsData);
});

export default router;