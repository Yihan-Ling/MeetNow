// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import styles from './StudentHomePage.module.css'
import meetingRooms from './data';
import { Box } from '@mui/material';

export default function StudentHomePage(){

    return(
        <div className='container'>
            <p className={styles.title}> Available Rooms</p>
            <NavLink to='/seeall'>
                <Button variant="text" className={styles.smallButtonStyle}>
                    See All
                </Button>
            </NavLink>
            
            <p className={styles.textTitle}>SAC</p>
            {meetingRooms.map(room => 
                <NavLink key={room.id} to={`${room.id}`} className={({isSmall}) => room.size == 'Small' ? styles.smallRoom : styles.bigRoom}>
                    <Box
                        sx={{
                            backgroundColor: '#D9D9D9',
                            borderRadius: '8%',
                            height: '20%',
                        }}
                    >
                      
                    </Box>
                </NavLink>
            )}

            <p className={styles.textTitle}>Lanphier</p>
            

        </div>
    );
}