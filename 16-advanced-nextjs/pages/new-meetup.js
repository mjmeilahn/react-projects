
import { Fragment } from 'react'
import Head from 'next/head'
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetupPage() {
    function onAddMeetupHandler(meetupData) {
        console.log(meetupData)
    }

    return (
        <Fragment>
            <Head>
                <title>Add A New Meetup</title>
                <meta name="description" content="Add your new React Meetup."/>
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler}/>
        </Fragment>
    )
}

export default NewMeetupPage
