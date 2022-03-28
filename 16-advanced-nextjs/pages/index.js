
import { Fragment } from 'react'
import Head from 'next/head'
import MeetupList from '../components/meetups/MeetupList'
import { DUMMY_MEETUPS } from '../data/meetups'

function Homepage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta name="description" content="All React Meetups!"/>
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    )
}

/*
    PREPARE INITIAL PAGE LOAD FOR STATIC HTML GENERATION.
    WHY? ELEMENTS ARE NOT RENDERED FOR SEO IF THEY NEED HOOKS.
    THIS WILL EXECUTE ONLY ONCE DURING THE BUILD PROCESS.
    AND THIS CODE IS NEVER SEEN ON THE CLIENT SIDE.
    THIS TYPE OF EXPORT ONLY WORKS IN "NextJS" & THE /pages FOLDER.
*/
export async function getStaticProps(context) {
    // FETCH FROM APIs HERE, EXPECT ASYNC AWAIT CODE.
    // ALWAYS NEED TO RETURN AN OBJECT WITH PROPS IN THIS FUNCTION.
    // "context" ALLOWS YOU TO ACCESS BACK END PROCESSES LIKE NODE.
    const req = context.req
    const res = context.res

    return {
        props: {
            meetups: DUMMY_MEETUPS,
        },
        revalidate: 10, // SECONDS "NextJS" WILL WAIT TO UPDATE PROPS. ONLY USE IF WEB APP RELIES ON FETCHING DATA THAT HAS UPDATED A DAY OR WEEK AGO.
    }
}


/*
    THIS FUNCTION IS THE SAME AS "getStaticProps()" BUT IT WILL
    ALWAYS RUN ON THE SERVER - NEVER DURING THE BUILD PROCESS.
    WHY? IT'S USEFUL FOR FETCHING DATA THAT IS NEAR REAL-TIME...
    AND IT WILL RUN ON EVERY REQUEST COMING THROUGH THIS PAGE.
    WHICH SHOULD YOU USE? DEPENDS IF YOU NEED TO CONSTANTLY FETCH
    NEW DATA WHICH IS A DRAIN ON THE SERVER OR JUST GENERATE A PAGE.
*/
// export async function getServerSideProps(context) {
//     const req = context.req
//     const res = context.res

//     return {
//         props: {
//             meetups: DUMMY_MEETUPS,
//         }
//     }
// }

export default Homepage
