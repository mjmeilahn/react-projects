
// domain.com/news/[id]

import { useRouter } from 'next/router'
import Link from 'next/link'

function NewsPageNestedPath() {
    const router = useRouter()
    const id = router.query.newsId

    // SEND REQUEST TO BACK-END WITH "id"

    return (
        <div>
            <h1>The Details Page</h1>
            <p>URL Slug: {id}</p>
            <Link href="/news">Go back to "News" page</Link>
        </div>
    )
}

export default NewsPageNestedPath