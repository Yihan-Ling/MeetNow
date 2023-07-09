// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import StudentHomePage from './StudentHomePage';
import AllMeetingRoomsPage from './AllMeetingRoomsPage';
import MeetingRoomView from './MeetingRoomView';
import RoomNotFound from './RoomNotFound';
import meetingRooms from './data';


export default function App(){

    const [rooms, setRooms] = useState(meetingRooms);

    return(
        <Routes>
            <Route path="/" element={<StudentHomePage />}>
                

                {/* <Route path="*" element={<h2>404 Page Not Found</h2>} /> */}
                
            </Route>
            <Route path="/seeall" element={<AllMeetingRoomsPage />} />
            <Route path="/:id" element={<MeetingRoomViewFromPathParams rooms={rooms} />} />
            
        </Routes>
    );
}

function MeetingRoomViewFromPathParams({ rooms }) {
    const { id } = useParams();
    const room = rooms.find(a => a.id == id);
  
    if (room) {
      return <MeetingRoomView meetingRoom={room} />;
    }
    else {
      return <RoomNotFound />;
    }
  }