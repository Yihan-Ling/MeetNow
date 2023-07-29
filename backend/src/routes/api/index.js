import express from 'express';

const router = express.Router();

import rooms from './rooms';
router.use('/rooms', rooms);

export default router;