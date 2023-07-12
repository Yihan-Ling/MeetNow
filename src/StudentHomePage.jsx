// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { NavLink, Link } from 'react-router-dom';
import styles from './StudentHomePage.module.css'
import data from './data';
import { Box, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';


export default function StudentHomePage(){

    const sacMeetingRooms = data.meetingRooms.filter((room) => room.location === 'SAC');
    const lanphierMeetingRooms = data.meetingRooms.filter((room) => room.location === 'Lanphier');

    return(
        <div className='container'>
            <p className={styles.title}> Available Rooms</p>
            <NavLink to='/meeting-rooms/seeall'>
                <Button variant="text" className={styles.smallButtonStyle}>
                    See All
                </Button>
            </NavLink>
            
            <p className={styles.textTitle}>SAC</p>

            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {sacMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room.id}`}>{room.id}</Button>
                        </Box>                        
                    </Grid>
                ))}
            </Grid>


            <p className={styles.textTitle}>Lanphier</p>
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {lanphierMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room.id}`}>{room.id}</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

            <p className={styles.clubSectionTitle}>Clubs Today:</p>
            
            <Grid container spacing={4} sx={{ width: '75vw', margin: '0 auto' }}>
                {data.clubMeetings.map((meeting) => (
                    <Grid item key={meeting.id} xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Card>
                        <CardContent>
                        <Typography variant="h6">{meeting.club}</Typography>
                        <Typography variant="body1">
                            Time: {meeting.startTime} - {meeting.endTime}
                        </Typography>
                        <Typography variant="body1">
                            Location: {meeting.location}
                        </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" component={Link} to={`/club-meetings/${meeting.id}`}>Learn More</Button>
                        </CardActions>
                    </Card>
                    </Grid>
                ))}
            </Grid>
            

        </div>
    );
}