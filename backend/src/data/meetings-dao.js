import { Meeting } from './schema';

async function createMeeting(meeting) {

    const dbMeeting = new Meeting(meeting);
    await dbMeeting.save();
    return dbMeeting;
}

async function retrieveMeetingList() {
    return await Meeting.find();
}

async function retrieveMeeting(id) {
    return await Meeting.findById(id);
}

async function updateMeeting(meeting) {

    const dbMeeting = await Meeting.findOneAndUpdate({ _id: meeting._id }, meeting);
    return dbMeeting !== undefined;
}

async function deleteMeeting(id) {
    await Meeting.deleteOne({ _id: id });
}

export {
    createMeeting,
    retrieveMeeting,
    retrieveMeetingList,
    updateMeeting,
    deleteMeeting
}