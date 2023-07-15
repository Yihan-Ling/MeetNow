import React from 'react';
import styles from './AllMeetingRoomsPage.module.css'
import data from './data';
import { Button, Box, Grid, Drawer, IconButton, Slider, Typography, Switch, Select, MenuItem } from '@mui/material';
import { Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useState } from 'react';


export default function AllMeetingRoomsPage(){

    const sacMeetingRooms = data.meetingRooms.filter((room) => room.location === 'SAC');
    const lanphierMeetingRooms = data.meetingRooms.filter((room) => room.location === 'Lanphier');
    const [drawerState, setDrawerState] = useState(false);
    const [searchRoomSize, setSearchRoomSize] = useState(4);
    const [searchRoomAvi, setSearchRoomAvi] = useState(false);
    const [searchRoomLocation, setSearchRoomLocation] = useState('any');

    const handleRoomSizeChange = (event, newValue) => {
        setSearchRoomSize(newValue);
    };

    const handleRoomAviChange = (event, checked) => {
        setSearchRoomAvi(checked)
    }

    const handleRoomLocationChange = (event) => {
        setSearchRoomLocation(event.target.value)
    }


    

    return(
        <div className='container'>
            <p className={styles.title}> All Meeting Rooms</p>

            {/* <MeetingDrawer /> */}
            <IconButton className={styles.drawerOpenButton} color="primary" onClick={() => setDrawerState(true)}>
                <SearchIcon />
            </IconButton>
            <Drawer anchor='left' open={drawerState} onClose={() => setDrawerState(false)}
                PaperProps={{
                    sx: {
                        backgroundColor: "snow"
                    }
                }}
            >
                <IconButton className={styles.drawerCloseButton} color="primary" onClick={() => setDrawerState(false)}>
                    <ChevronLeftIcon />
                </IconButton>
                <Box className={styles.drawerBox}>

                    <Box className={styles.roomSizeBox}>
                        
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Typography id="input-slider" gutterBottom>
                                    RoomSize
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    value={searchRoomSize}
                                    onChange={handleRoomSizeChange}
                                    aria-labelledby="input-slider"
                                    min={4}
                                    max={10}
                                    step={1}
                                    className={styles.roomSizeSlider}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>{searchRoomSize}</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    <Box className={styles.roomAviBox}>
                        <Grid container spacing={9} alignItems="center" >
                            <Grid item>
                                <Typography variant='subtitle1'>
                                    Show Only Aviliable
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Switch checked={searchRoomAvi} onChange={handleRoomAviChange} />
                            </Grid>
                            
                            
                        </Grid>
                    </Box>

                    <Box className={styles.roomLocationBox}>
                        <Grid container spacing={18} alignItems="center" >
                            <Grid item>
                                <Typography variant='subtitle1'>
                                    Location
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Select value={searchRoomLocation} onChange={handleRoomLocationChange}>
                                    <MenuItem value={'any'}>Any</MenuItem>
                                    <MenuItem value={'SAC'}>SAC</MenuItem>
                                    <MenuItem value={'Lanphier'}>Lanphier</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>

                    <Button variant='contained' className={styles.confirmButton} onClick={() => setDrawerState(false)}>Confirm</Button>
                </Box>

                
            </Drawer>
            
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

        </div>
    );
}






