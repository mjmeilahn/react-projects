
import { Fragment } from 'react'
import Head from 'next/head'
import { DUMMY_MEETUPS } from '../data/meetups'
import MeetupDetails from '../components/meetups/MeetupDetails'

function MeetupDetailsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>React Meetup - {props.meetup.title}</title>
                <meta name="description" content={'Come to your React Meetup! ' + props.meetup.description}/>
            </Head>
            <MeetupDetails meetup={props.meetup}/>
        </Fragment>
    )
}

/*
    "getStaticPaths()" IS FOR DYNAMIC PAGES LIKE "[meetupId]".
    THIS EXAMPLE FETCHES LOCAL DATA WHICH IS NOT REALISTIC.
    IN REAL LIFE YOU'D FETCH ALL DATA THROUGH AN API.
*/
export async function getStaticPaths() {
    const meetupIds = DUMMY_MEETUPS.map(d => d.id)
    return {
        fallback: false, // "false" MEANS WE HAVE INCLUDED ALL PATHS, "true" OR 'blocking' (STRING) MEANS WE'VE ONLY INCLUDED SOME, THE REST CAN BE DYNAMICALLY REQUESTED THROUGH THE SERVER ON PAGE LOAD.
        paths: meetupIds.map(m => {
            return {
                params: {
                    meetupId: m
                }
            }
        }),
    }
}

export async function getStaticProps(context) {
    const id = context.params.meetupId || 'm1'
    const meetup = DUMMY_MEETUPS.find(d => d.id === id)

    return {
        props: {
            meetup
        }
    }
}

export default MeetupDetailsPage
