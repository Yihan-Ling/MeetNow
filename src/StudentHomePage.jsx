// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import styles from './StudentHomePage.module.css'
import meetingRooms from './data';
import { Box, Grid } from '@mui/material';


export default function StudentHomePage(){

    const sacMeetingRooms = meetingRooms.filter((room) => room.location === 'SAC');
    const lanphierMeetingRooms = meetingRooms.filter((room) => room.location === 'Lanphier');

    return(
        <div className='container'>
            <p className={styles.title}> Available Rooms</p>
            <NavLink to='/seeall'>
                <Button variant="text" className={styles.smallButtonStyle}>
                    See All
                </Button>
            </NavLink>
            
            <p className={styles.textTitle}>SAC</p>

            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {sacMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <NavLink key={room.id} to={`${room.id}`}>
                            <Box className={styles.meetingRoom}>
                                <p className={styles.meetingRoomNumber}>{room.id}</p>
                            </Box>
                        </NavLink>
                        
                        
                    </Grid>
                ))}
            </Grid>


            <p className={styles.textTitle}>Lanphier</p>
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {lanphierMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <NavLink key={room.id} to={`${room.id}`}>
                            <Box className={styles.meetingRoom}>
                                <p className={styles.meetingRoomNumber}>{room.id}</p>
                            </Box>
                        </NavLink>
                        
                        
                    </Grid>
                ))}
            </Grid>

        </div>
    );
}