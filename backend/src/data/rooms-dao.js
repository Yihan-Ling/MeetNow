import { Room } from './schema';

async function createRoom(room) {

    const dbRoom = new Room(room);
    await dbRoom.save();
    return dbRoom;
}

async function retrieveRoomList() {
    return await Room.find();
}

async function retrieveRoom(id) {
    return await Room.findById(id);
}

async function updateRoom(room) {

    const dbRoom = await Room.findOneAndUpdate({ _id: room._id }, room);
    return dbRoom !== undefined;
}

async function deleteRoom(id) {
    await Room.deleteOne({ _id: id });
}

export {
    createRoom,
    retrieveRoom,
    retrieveRoomList,
    updateRoom,
    deleteRoom
}