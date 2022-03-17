
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function onAddMeetupHandler(meetupData) {
        console.log(meetupData)
    }

    return (
        <section>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </section>
    )
}

export default NewMeetupPage
