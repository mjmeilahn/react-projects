
import { createClient } from 'contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'recipe' })

  const paths = res.items.map(item => {
    return {
      params: {
        slug: item.fields.slug
      }
    }
  })

  return {
    paths,
    fallback: false // IF TRAFFIC HITS A URL WE HAVE NOT MAPPED IN PATHS, SEND THEM TO A 404 PAGE.
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'recipe',
    'fields.slug': params.slug
  })

  return {
    props: {
      recipe: items[0]
    }
  }
}

export default function RecipeDetails({ recipe }) {
  console.log(recipe)

  return (
    <div>
      Recipe Details
    </div>
  )
}
