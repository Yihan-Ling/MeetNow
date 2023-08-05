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

    // Setup | Meeting rooms data and club meetings data
    const [rooms, setRooms] = useState([]);
    const [meetings, setMeetings] = useState([]);

    // Setup | backend api urls of rooms and meetings 
    const room_url = 'http://localhost:3000/api/rooms';
    const meeting_url = 'http://localhost:3000/api/meetings';

    // get rooms data from backend

    // setRooms(await axios.get(room_url).data)
    useEffect(() => {
      async function fetchRoomData() {
        const response = await axios.get(room_url);
        setRooms(response.data);
      }
      fetchRoomData();
    }, []);
    // setRooms(fetchRoomData(room_url));

    // get meetings data from backend
    useEffect(() => {
      async function fetchMeetingData() {
        const response = await axios.get(meeting_url);
        setMeetings(response.data);
      }
      fetchMeetingData();
    }, []);

    const temp = rooms;

    return(

        // Routes of the Website
        <Routes>

            {/* root */}
            <Route path="/" element={<StudentHomePage rooms={rooms} meetings={meetings}/>}>
                {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
                
            </Route>
            <Route path="/meeting-rooms/seeall" element={<AllMeetingRoomsPage rooms={temp}/>} />
            <Route path="/meeting-rooms/:id" element={<MeetingRoomViewFromPathParams rooms={rooms} />} />
            <Route path="/club-meetings/:id" element={<MeetingViewFromPathParams meetings={meetings} />} />
            
        </Routes>
    );
}

// load <MeetingRoomView /> with specific _id
function MeetingRoomViewFromPathParams({ rooms }) {
    const { id } = useParams();
    const room = rooms.find(a => a._id == id);
  
    if (room) {
      return <MeetingRoomView meetingRoom={room} />;
    }

    // Return 404 not found if no matching _id
    else {
      return <RoomNotFound />;
    }
}

// load <MeetingView /> with specific _id
function MeetingViewFromPathParams({ meetings }) {
    const { id } = useParams();
    const meeting = meetings.find(a => a._id == id);
  
    if (meeting) {
      return <MeetingView clubMeeting={meeting} />;
    }

    // Return 404 not found if no matching _id
    else {
      return <MeetingNotFound />;
    }
}

// async function fetchRoomData(room_url) {
//   const response = await axios.get(room_url);
//   return response.data;
// }
