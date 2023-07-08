// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import React from 'react';
import Button from '@mui/material/Button';

export default function StudentHomePage(){
    const buttonStyle = {
        fontFamily: 'Inter, sans-serif',
        fontSize: 12,
        fontWeight: 500,
        color: '#3F88C5',
        textTransform: 'none',
        // textDecoration: 'underline',
      };

    return(
        <div className='container'>
            <p className='title'> Available Rooms</p>
            <Button variant="text" className='smallButtonStyle'>
                See All
            </Button>
            <p className='textTitle'>SAC</p>
            
            <p className='textTitle'>Lanphier</p>
            

        </div>
    );
}