import express from 'express';

const router = express.Router();

import rooms from './rooms';
router.use('/rooms', rooms);

import meetings from './meetings';
router.use('/meetings', meetings);

export default router;