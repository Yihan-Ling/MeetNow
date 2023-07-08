// import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useState } from 'react';
import { Routes, Route, Navigate, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import StudentHomePage from './StudentHomePage';

export default function App(){
    

    return(
        <Routes>
            <Route path="/" element={<StudentHomePage />}>


                <Route path="*" element={<h2>404 Page Not Found</h2>} />
            </Route>
            
        </Routes>
    );
}