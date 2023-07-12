// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import StudentHomePage from './StudentHomePage';
import AllMeetingRoomsPage from './AllMeetingRoomsPage';
import MeetingRoomView from './MeetingRoomView';
import RoomNotFound from './RoomNotFound';
import MeetingView from './MeetingView';
import MeetingNotFound from './MeetingNotFound';
import data from './data';


export default function App(){

    const [rooms, setRooms] = useState(data.meetingRooms);
    const [meetings, setMeetings] = useState(data.clubMeetings);

    return(
        <Routes>
            <Route path="/" element={<StudentHomePage />}>
                

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
    const room = rooms.find(a => a.id == id);
  
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