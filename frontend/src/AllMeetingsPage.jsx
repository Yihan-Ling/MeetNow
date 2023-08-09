import React from 'react';
import styles from './AllMeetingsPage.module.css'
import { Grid, Card, CardContent, CardActions, Typography, Button, Link } from '@mui/material';
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
                    {meetings.map((meeting) => (
                        <Grid item key={meeting.name} xs={6.01} justifyContent="center" alignItems="center">
                            <Card>
                                <CardContent>
                                <CardActions>
                                    <Button size="small" component={Link} to={`/club-meetings/${meeting._id}`}>Edit</Button>
                                </CardActions>
                                <Typography variant="h6">{meeting.club}</Typography>
                                <Typography variant="body1">
                                    Time: {meeting.startTime} - {meeting.endTime}
                                </Typography>
                                <Typography variant="body1">
                                    Location: {meeting.location}
                                </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" component={Link} to={`/club-meetings/${meeting._id}`}>Cancel</Button>
                                </CardActions>
                            </Card>
                            {/* <div className={styles.meetingCard}> */}

                            {/* </div> */}
                        </Grid>
                    ))}
                </Grid>
            </div>
            
        </div>
    );

}







