import React from 'react';
import styles from './AllMeetingsPage.module.css'
import { Grid, Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';
import axios from 'axios';
// import { Button, Box, Grid, Drawer, IconButton, Slider, Typography, Switch, Select, MenuItem } from '@mui/material';
// import { Link} from 'react-router-dom';
// import SearchIcon from '@mui/icons-material/Search';
// import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

// import { useState } from 'react';


export default function AllMeetingsPage( {meetings} ){

    return(
        <div className='container'>
            <p className={styles.title}> All Meetings</p>
            <div className={styles.meetingsContainer}>
                <Grid container spacing={8} justifyContent="center" alignItems="center">
                    {meetings.map((meeting, index) => (
                        <Grid item key={index} xs={6.01}>
                            <Card>
                                <CardContent className={styles.cardContent}>
                                    <CardActions>
                                        <Button size="small" component={Link} to={`/club-meetings/${meeting._id}`} className={styles.editButton}>Edit</Button>
                                    </CardActions>
                                    <Typography variant="h6" className={styles.clubTitle}>{meeting.club}</Typography>
                                    <Typography variant="body1">
                                        Time: {meeting.startTime} - {meeting.endTime}
                                    </Typography>
                                    <Typography variant="body1">
                                        Location: {meeting.location}
                                    </Typography>
                                    <CardActions>
                                        <Button size="small" component={Link} to={`/club-meetings/${meeting._id}`}>Cancel</Button>
                                    </CardActions>
                                </CardContent>
                            </Card>
                        </Grid>
                         
                        
                    ))}
                </Grid>

                <Button onClick={handleOnclick}>Add a Meeting</Button>
            </div>
            
        </div>
    );

    async function handleOnclick(){
        console.log('clicked')
        const roomToUpload = {
            name: 'New Room',
            size: 'Big',
            capacity: 100,
            location: "SAC"
        };
        const roomsResponse = await axios.post('https://localhost:3000/api/rooms', roomToUpload);
    }

}







