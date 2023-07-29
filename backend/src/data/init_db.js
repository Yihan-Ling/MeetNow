import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { createRoom } from './rooms-dao';
// import { dummyArticles } from './random-articles';
import { Room } from './schema';

main();

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/MeetNow", { useNewUrlParser: true });
    console.log('Connected to database!');
    console.log();

    await clearDatabase();
    console.log();

    await addRooms();
    console.log();

    // // Disconnect when complete
    await mongoose.disconnect();
    console.log('Disconnected from database!');
}

async function clearDatabase() {
    const roomsDeleted = await Room.deleteMany({});
    console.log(`Cleared database (removed ${roomsDeleted.deletedCount} rooms).`);
}

async function addRooms() {
    for (let room of meetingRooms) {

        const dbRoom = await createRoom(room);
        console.log(`Room '${dbRoom.name}' added to database (_id = ${dbRoom._id})`);

    }
}

// async function createRoom(room) {

//     const dbRoom = new Room(room);
//     await dbRoom.save();
//     return dbRoom;
// }

const meetingRooms = [
    {
        name: 'S107',
        size: 'Small',
        capacity: 4,
        location: 'SAC',
    },
    {
        name: 'S108',
        size: 'Small',
        capacity: 4,
        location: 'SAC',
    },
    {
        name: 'S109',
        size: 'Big',
        capacity: 10,
        location: 'SAC',
    },
    {
        name: 'S110',
        size: 'Small',
        capacity: 4,
        location: 'SAC',
    },


    {
        name: 'L121',
        size: 'Small',
        capacity: 4,
        location: 'Lanphier',
    },
    {
        name: 'L122',
        size: 'Big',
        capacity: 6,
        location: 'Lanphier',
    },
    {
        name: 'L123',
        size: 'Small',
        capacity: 4,
        location: 'Lanphier',
    },
    {
        name: 'L124',
        size: 'Small',
        capacity: 4,
        location: 'Lanphier',
    },


];