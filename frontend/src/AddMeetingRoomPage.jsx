import React from 'react';
import styles from './AddMeetingRoomPage.module.css'

import axios from 'axios';
import { Link} from 'react-router-dom';


export default function AddMeetingRoomPage(){

    return(
        <div className='container'>
            <p>Hello World</p>
        </div>
    );

    async function handleAddOnclick(){
        console.log('clicked')
        const roomToUpload = {
            name: 'New Room',
            size: 'Big',
            capacity: 100,
            location: "SAC"
        };
        const roomsResponse = await axios.post('http://localhost:3000/api/rooms', roomToUpload);
    }

}







