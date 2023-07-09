// import styles from './AllMeetingRoomsPage.module.css'


export default function MeetingRoomView({meetingRoom}){

    return(
        <div className='container'>
            {/* <p className={styles.title}> All Meeting Rooms</p> */}
            <p> {meetingRoom.id} </p>
        </div>
    );
}