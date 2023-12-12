// named imports
import { getAllComments } from '../actions/getData'

// default imports
import CommentsListing from '@/components/CommentsListing'

export default async function Home() {
  const comments = await getAllComments()

  return (
    <div>
      <h2 className='text-3xl font-semibold font-serif text-center py-3'>Listing View in Next.js</h2>

      <CommentsListing comments={comments} />
    </div>
  )
}
