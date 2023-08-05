import React from 'react';
import styles from './AllMeetingRoomsPage.module.css'
import { Button, Box, Grid, Drawer, IconButton, Slider, Typography, Switch, Select, MenuItem } from '@mui/material';
import { Link} from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { useState } from 'react';


export default function AllMeetingRoomsPage( {rooms} ){

    // Setup | seperate meeting rooms data by locations

    const [sacMeetingRooms, setSacMeetingRooms] = useState([]);
    const [lanphierMeetingRooms, setLanphierMeetingRooms] = useState([]);

    setSacMeetingRooms(rooms.filter((room) => room.location === 'SAC'));
    setLanphierMeetingRooms(rooms.filter((room) => room.location === 'Lanphier'));

    // var sacMeetingRooms = rooms.filter((room) => room.location === 'SAC');
    // const lanphierMeetingRooms = rooms.filter((room) => room.location === 'Lanphier');

    // const [smr,setSmr] = useState([]);
    // setSmr([1,2,3])
    // console.log(smr);


    // Setup | Set initial states of filters
    const [drawerState, setDrawerState] = useState(false);
    const [searchRoomSize, setSearchRoomSize] = useState(10);
    const [searchRoomAvi, setSearchRoomAvi] = useState(false);
    const [searchRoomLocation, setSearchRoomLocation] = useState('All');

    //handle state changes
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
                                <Select value={searchRoomLocation} onChange={handleRoomLocationChange}>
                                    <MenuItem value={'All'}>Any</MenuItem>
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
            <p className={styles.textTitle}>SAC</p>
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
            <p className={styles.textTitle}>Lanphier</p>
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
        setSacMeetingRooms(sacMeetingRooms.filter((room) => room.capacity <= searchRoomSize));
        // sacMeetingRooms = sacMeetingRooms.filter((room) => room.avilibility === )
        if(searchRoomLocation != 'All'){
            setSacMeetingRooms(sacMeetingRooms.filter((room) => room.location === searchRoomLocation));
        }
        setDrawerState(false);
    }
}







