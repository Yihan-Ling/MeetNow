import * as dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { createRoom } from './rooms-dao';
import { createMeeting } from './meetings-dao';
import { Room, Meeting } from './schema';

main();

async function main() {

    // Connect to Mongodb
    await mongoose.connect("mongodb://127.0.0.1:27017/MeetNow", { useNewUrlParser: true });
    console.log('Connected to database!');
    console.log();

    // Clear Database
    await clearDatabase();
    console.log();

    // Add initial data for rooms
    await addRooms();
    console.log();

    // Add inital data for meetings
    await addMeetings();
    console.log();

    // // Disconnect when complete
    await mongoose.disconnect();
    console.log('Disconnected from database!');
}

async function clearDatabase() {
    const roomsDeleted = await Room.deleteMany({});
    const meetingsDeleted = await Meeting.deleteMany({});
    console.log(`Cleared database (removed ${roomsDeleted.deletedCount} rooms and ${meetingsDeleted.deletedCount} club meetings).`);
}

async function addRooms() {
    for (let room of meetingRooms) {
        const dbRoom = await createRoom(room);
        console.log(`Room '${dbRoom.name}' added to database (_id = ${dbRoom._id})`);

    }
}

async function addMeetings() {
    for (let meeting of clubMeetings) {
        const dbMeeting = await createMeeting(meeting);
        console.log(`Meeting '${dbMeeting.name}' added to database (_id = ${dbMeeting._id})`);
    }
}



// Create Initial Data 
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

const clubMeetings = [
    {
        name: 'MA1073',
        club: 'Math Club',
        startTime: '7:00',
        endTime: '8:00',
        date: '3/12',
        location: 'Lanphier 206',
    },

    {
        name: 'CH2891',
        club: 'Chess Club',
        startTime: '6:00',
        endTime: '7:00',
        date: '3/12',
        location: 'SAC Common',
    },

    {
        name: 'DE1029',
        club: 'Debate Club',
        startTime: '6:30',
        endTime: '8:00',
        date: '3/12',
        location: 'Lanphier 124',
    },
];