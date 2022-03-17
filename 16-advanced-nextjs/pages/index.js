
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
    WHY? SOME ELEMENTS ARE NOT RENDERED FOR SEO IF THEY NEED HOOKS.
    EXECUTES DURING THE BUILD PROCESS ON THE SERVER.
    NEVER SEEN ON THE CLIENT SIDE.
    THIS TYPE OF EXPORT ONLY WORKS IN "NextJS" & THE /pages FOLDER.
*/
export async function getStaticProps() {
    // FETCH FROM APIs HERE, EXPECT ASYNC AWAIT CODE.
    // ALWAYS NEED TO RETURN AN OBJECT IN THIS FUNCTION.
    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10, // SECONDS "NextJS" WILL WAIT TO UPDATE PROPS
    }
}

export default Homepage
