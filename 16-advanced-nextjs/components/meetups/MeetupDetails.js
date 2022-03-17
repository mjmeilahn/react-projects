
import { DUMMY_MEETUPS } from '../../data/meetups'
import classes from './MeetupDetails.module.css'

function MeetupDetails(props) {
    const id = props.id || 'm1'
    const meetup = DUMMY_MEETUPS.find(d => d.id === id)
    const { title, image, address } = meetup

    return (
        <section className={classes.detail}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <address>{address}</address>
        </section>
    )
}

export default MeetupDetails
