
import { useRouter } from 'next/router'
import MeetupDetails from '../components/meetups/MeetupDetails'

function MeetupDetailsPage() {
    const router = useRouter()
    const id = router.query.meetupId

    return (
        <MeetupDetails id={id}/>
    )
}

export default MeetupDetailsPage
