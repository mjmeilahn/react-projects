
// domain.com/news/

import Link from 'next/link'

function NewsPage() {
    return (
        <div>
            <h1>The News</h1>
            <ul>
                <li><Link href="/news/the-detail-page">The Details Page</Link></li>
            </ul>
        </div>
    )
}

export default NewsPage