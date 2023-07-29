import styles from './MeetingRoomView.module.css'
import { Box, Typography } from '@mui/material';

export default function MeetingRoomView({meetingRoom}){

    return(
        <div className={styles.container}>
            
            <Box className={styles.idBox}>
                <p className={styles.idTitle}> {meetingRoom.id} </p>
            </Box>
            
        </div>
    );
}