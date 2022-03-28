
import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data/meetups'

function Homepage(props) {
    return (
        <section>
            <MeetupList meetups={props.meetups} />
        </section>
    )
}

/*
    PREPARE INITIAL PAGE LOAD FOR STATIC HTML GENERATION.
    WHY? ELEMENTS ARE NOT RENDERED FOR SEO IF THEY NEED HOOKS.
    THIS WILL EXECUTE DURING THE BUILD PROCESS ON THE SERVER.
    AND THIS CODE IS NEVER SEEN ON THE CLIENT SIDE.
    THIS TYPE OF EXPORT ONLY WORKS IN "NextJS" & THE /pages FOLDER.
*/
export async function getStaticProps() {
    // FETCH FROM APIs HERE, EXPECT ASYNC AWAIT CODE.
    // ALWAYS NEED TO RETURN AN OBJECT WITH PROPS IN THIS FUNCTION.
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10, // SECONDS "NextJS" WILL WAIT TO UPDATE PROPS. ONLY USE IF WEB APP RELIES ON REAL-TIME DATA & CONSTANT VISUAL UI CHANGES.
    }
}

export default Homepage
