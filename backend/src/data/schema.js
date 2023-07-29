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

export { Room };