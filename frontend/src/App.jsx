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
import data from './data';
import axios from 'axios';


export default function App(){

    const [rooms, setRooms] = useState([]);
    const [meetings, setMeetings] = useState(data.clubMeetings);
    const url = 'http://localhost:3000/api/rooms';

    useEffect(() => {
      async function fetchData() {
        const response = await axios.get(url);
        setRooms(response.data);
      }
      fetchData();
    }, []);

    return(
        <Routes>
            <Route path="/" element={<StudentHomePage rooms={rooms} />}>
                

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
    const meeting = meetings.find(a => a.id == id);
  
    if (meeting) {
      return <MeetingView clubMeeting={meeting} />;
    }
    else {
      return <MeetingNotFound />;
    }
}