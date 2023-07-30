// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StudentHomePage from './StudentHomePage';
import AllMeetingRoomsPage from './AllMeetingRoomsPage';
import MeetingRoomView from './MeetingRoomView';
import RoomNotFound from './RoomNotFound';
import MeetingView from './MeetingView';
import MeetingNotFound from './MeetingNotFound';
// import data from './data';
import axios from 'axios';


export default function App(){

    const [rooms, setRooms] = useState([]);
    const [meetings, setMeetings] = useState([]);
    const room_url = 'http://localhost:3000/api/rooms';
    const meeting_url = 'http://localhost:3000/api/meetings';

    // get rooms data from database
    useEffect(() => {
      async function fetchRoomData() {
        const response = await axios.get(room_url);
        setRooms(response.data);
      }
      fetchRoomData();
    }, []);

    // get meetings data from database
    useEffect(() => {
      async function fetchMeetingData() {
        const response = await axios.get(meeting_url);
        setMeetings(response.data);
      }
      fetchMeetingData();
    }, []);

    return(
        <Routes>
            <Route path="/" element={<StudentHomePage rooms={rooms} meetings={meetings}/>}>
                

                {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
                
            </Route>
            <Route path="/meeting-rooms/seeall" element={<AllMeetingRoomsPage />} />
            <Route path="/meeting-rooms/:id" element={<MeetingRoomViewFromPathParams rooms={rooms} />} />
            <Route path="/club-meetings/:id" element={<MeetingViewFromPathParams meetings={meetings} />} />
            
        </Routes>
    );
}

function MeetingRoomViewFromPathParams({ rooms }) {
    const { id } = useParams();
    const room = rooms.find(a => a._id == id);
  
    if (room) {
      return <MeetingRoomView meetingRoom={room} />;
    }
    else {
      return <RoomNotFound />;
    }
}

function MeetingViewFromPathParams({ meetings }) {
    const { id } = useParams();
    const meeting = meetings.find(a => a._id == id);
  
    if (meeting) {
      return <MeetingView clubMeeting={meeting} />;
    }
    else {
      return <MeetingNotFound />;
    }
}