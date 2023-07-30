import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { type: String, required: true },
    size: String,
    capacity: Number,
    location: String,

}, {
    timestamps: {}
});

const Room = mongoose.model('Room', roomSchema);


// Creat Club Meeting Schema
const meetingSchema = new Schema({
    name: { type: String, required: true },
    club: String,
    startTime: String,
    endTime: String,
    date: String,
    location: String,
}, {
    timestamps: {}
});

const Meeting = mongoose.model('Meeting', meetingSchema);


export { Room, Meeting };