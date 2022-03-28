
/*
    THE "/api" FOLDER IS 100% BACK END CODE, NO REACT COMPONENTS SHOULD EXIST HERE. YOU CAN ONLY PLACE THIS FOLDER INSIDE OF THE "/pages" FOLDER.

    THE API ROUTE FOR THIS FILE IS CALLABLE AS "/api/new-meetup".
*/

// FUNCTION CAN BE NAMED ANYTHING BUT IT MUST BE EXPORTED.
function handler(req, res) {
    // POST /api/new-meetup
    if (req.method === 'POST') {
        const data = req.body
        const { title, address, image, description } = data
        // SEND TO A DATABASE, ETC...
    }
}

export default handler
