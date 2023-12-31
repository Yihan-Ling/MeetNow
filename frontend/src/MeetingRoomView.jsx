import styles from './MeetingRoomView.module.css'
import { Box, AppBar, Toolbar, IconButton } from '@mui/material';

export default function MeetingRoomView({meetingRoom}){

    return(
        <div className={styles.container}>
            <Box className={styles.idBox}>
                <p className={styles.idTitle}> {meetingRoom.name} </p>
            </Box>
            
        </div>
    );
}