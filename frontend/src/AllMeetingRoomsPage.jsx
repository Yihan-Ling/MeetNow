import React from 'react';
import styles from './AllMeetingRoomsPage.module.css'
import { Button, Box, Grid, Drawer, IconButton, Slider, Typography, Switch, Select, MenuItem } from '@mui/material';
import { Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useState } from 'react';


export default function AllMeetingRoomsPage( {rooms} ){

    // Setup | Set initial states of filters
    const [drawerState, setDrawerState] = useState(false);

    // temp_ variables are only used in filter drawer
    // roomSize is updated once Confirm Button is pressed
    const [tempRoomSize, setTempRoomSize] = useState(10);
    const [roomSize, setRoomSize] = useState(10);

    const [searchRoomAvi, setSearchRoomAvi] = useState(false);

    const [tempRoomLocation, setTempRoomLocation] = useState('Any');
    const [roomLocation, setRoomLocation] = useState('Any');
    

    // Update the filtered list of rooms
    function filterSacRooms(room) {
        return room.capacity<=roomSize && room.location === 'SAC' && roomLocation != 'Lanphier';
    }
    const sacMeetingRooms = rooms.filter(filterSacRooms);

    function filterLanphierRooms(room) {
        return room.capacity<=roomSize && room.location === 'Lanphier' && roomLocation != 'SAC';
    }
    const lanphierMeetingRooms = rooms.filter(filterLanphierRooms);

    const [sacTitle, setSacTitle] = useState('SAC');
    const [lanphierTitle, setLanphierTitle] = useState('Lanphier');
     

    //handle state changes
    const handleRoomSizeChange = (event, newValue) => {
        setTempRoomSize(newValue);
    };

    const handleRoomAviChange = (event, checked) => {
        setSearchRoomAvi(checked);
    }

    const handleRoomLocationChange = (event) => {
        setTempRoomLocation(event.target.value)
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

                    {/* Room Size | Slider */}
                    <Box className={styles.roomSizeBox}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Typography id="input-slider" gutterBottom>
                                    RoomSize
                                </Typography>
                            </Grid>
                            <Grid item xs>
                                <Slider
                                    value={tempRoomSize}
                                    onChange={handleRoomSizeChange}
                                    aria-labelledby="input-slider"
                                    min={3}
                                    max={10}
                                    step={1}
                                    className={styles.roomSizeSlider}
                                />
                            </Grid>
                            <Grid item>
                                <Typography>{tempRoomSize}</Typography>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Avilibility | Toggle */}
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

                    {/* Room Location | Select */}
                    <Box className={styles.roomLocationBox}>
                        <Grid container spacing={18} alignItems="center" >
                            <Grid item>
                                <Typography variant='subtitle1'>
                                    Location
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Select value={tempRoomLocation} onChange={handleRoomLocationChange}>
                                    <MenuItem value={'Any'}>Any</MenuItem>
                                    <MenuItem value={'SAC'}>SAC</MenuItem>
                                    <MenuItem value={'Lanphier'}>Lanphier</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Box>

                    {/* Confirm Button */}
                    <Button variant='contained' className={styles.confirmButton} onClick={handleConfirmClick}>Confirm</Button>
                </Box>

            </Drawer>
            


            {/* SAC Rooms Display */}
            <p className={styles.textTitle}>{sacTitle}</p>
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {sacMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room._id}`}>{room.name}</Button>
                        </Box>                        
                    </Grid>
                ))}
            </Grid>

            
            {/* Lanphier Rooms Display */}
            <p className={styles.textTitle}>{lanphierTitle}</p>
            <Grid container spacing={2} sx={{ width: '75vw', margin: '0 auto' }}>
                {lanphierMeetingRooms.map((room, index) => (
                    <Grid item key={index} xs={3} sm={6} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Box className={styles.meetingRoom}>
                            <Button size="large" component={Link} to={`/meeting-rooms/${room._id}`}>{room.name}</Button>
                        </Box>
                    </Grid>
                ))}
            </Grid>

        </div>
    );

    function handleConfirmClick(){
        setRoomSize(tempRoomSize);
        setRoomLocation(tempRoomLocation);
        
        if(tempRoomLocation === 'Any'){
            setSacTitle('SAC');
            setLanphierTitle('Lanphier');
        }
        else if(tempRoomLocation === 'SAC'){
            setSacTitle('SAC');
            setLanphierTitle('');
            
        }
        else if(tempRoomLocation === 'Lanphier'){
            setSacTitle('');
            setLanphierTitle('Lanphier');
        }
        setDrawerState(false);
    }
}







