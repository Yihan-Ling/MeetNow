import express from 'express';

const HTTP_OK = 200; // Not really needed; this is the default if you don't set something else.
const HTTP_CREATED = 201;
const HTTP_NOT_FOUND = 404;
const HTTP_NO_CONTENT = 204;

const router = express.Router();


// Create new article
router.get('/', (req, res) => {

    res.status(HTTP_OK)
        .json([
            {
                id: 'S107',
                size: 'Small',
                capacity: 4,
                location: 'SAC',
            },
            {
                id: 'S108',
                size: 'Small',
                capacity: 4,
                location: 'SAC',
            },
            {
                id: 'S109',
                size: 'Big',
                capacity: 10,
                location: 'SAC',
            },
            {
                id: 'S110',
                size: 'Small',
                capacity: 4,
                location: 'SAC',
            },
        
        
            {
                id: 'L121',
                size: 'Small',
                capacity: 4,
                location: 'Lanphier',
            },
            {
                id: 'L122',
                size: 'Big',
                capacity: 6,
                location: 'Lanphier',
            },
            {
                id: 'L123',
                size: 'Small',
                capacity: 4,
                location: 'Lanphier',
            },
            {
                id: 'L124',
                size: 'Small',
                capacity: 4,
                location: 'Lanphier',
            }
        ]);
});

export default router;