
import classes from './MeetupDetails.module.css'

function MeetupDetails(props) {
    const { title, image, address } = props.meetup

    return (
        <section className={classes.detail}>
            <img src={image} alt={title} />
            <h1>{title}</h1>
            <address>{address}</address>
        </section>
    )
}

export default MeetupDetails
