// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './StudentHomePage.module.css'
import { Box, Card, CardActions, CardContent, Grid, Typography, Button } from '@mui/material';


export default function StudentHomePage({rooms, meetings}){

    // Setup | seperate meeting rooms data by locations
    const sacMeetingRooms = rooms.filter((room) => room.location === 'SAC');
    const lanphierMeetingRooms = rooms.filter((room) => room.location === 'Lanphier');
    const clubMeetings = meetings;

    return(
        <div className='container'>

            {/* Title */}
            <p className={styles.title}> Available Rooms</p>

            {/* See All Button */}
            <NavLink to='/meeting-rooms/see_all'>
                <Button variant="text" className={styles.smallButtonStyle}>
                    See All
                </Button>
            </NavLink>
            
            {/* Location Title | SAC */}
            <p className={styles.textTitle}>SAC</p>

            {/* Meeting rooms display | SAC */}
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {sacMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room._id}`}>{room.name}</Button>
                        </Box>                        
                    </Grid>
                ))}
            </Grid>

            {/* Location Title | Lanphier */}
            <p className={styles.textTitle}>Lanphier</p>

            {/* Meeting rooms display | Lanphier */}
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {lanphierMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room._id}`}>{room.name}</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>


            
            {/* Club Section Title */}
            <p className={styles.clubSectionTitle}>Clubs Today:</p>

            {/* Manage All Button */}
            <NavLink to='/club-meetings/manage_all'>
                <Button variant="text" className={styles.smallButtonStyle}>
                    Manage All
                </Button>
            </NavLink>

            <div className={styles.meetingsPadding}></div>
            
            {/* Club meetings display */}
            <div className={styles.meetingsContainer}>
                <Grid container spacing={4} sx={{ width: '75vw', margin: '0 auto' }}>
                    {clubMeetings.map((meeting) => (
                        <Grid item key={meeting.name} xs={12} sm={6} md={6} lg={6} xl={6}>
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
                                <Button size="small" component={Link} to={`/club-meetings/${meeting._id}`}>Learn More</Button>
                            </CardActions>
                        </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>

        </div>
    );
}


