// import styles from './AllMeetingRoomsPage.module.css'


export default function MeetingView({clubMeeting}){

    return(
        <div className='container'>
            {/* <p className={styles.title}> All Meeting Rooms</p> */}
            <p> {clubMeeting.id} </p>
        </div>
    );
}