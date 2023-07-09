// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';
import styles from './StudentHomePage.module.css'

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
            
            <p className={styles.textTitle}>Lanphier</p>
            

        </div>
    );
}