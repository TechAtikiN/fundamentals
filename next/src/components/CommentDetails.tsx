// named imports
import { useEffect, useState } from 'react'
import { getCommentDetails } from '../actions/getData'

interface Props {
  selectedComment: CommentType | null
}

export default function CommentDetails({ selectedComment }: Props) {
  const [commentDetails, setCommentDetails] = useState<CommentDetails | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      const data: CommentDetails | undefined = await getCommentDetails(selectedComment!)
      if (!data) return
      setCommentDetails(data)
    }

    fetchData()
  }, [selectedComment])

  return (
    <div className='border border-slate-300 p-3 text-sm rounded-md h-[520px] overflow-auto'>
      <div className='space-y-2'>
        <h4 className='font-semibold underline text-lg'>Comment Desrciption</h4>
        <p>{selectedComment?.comment}</p>
      </div>

      <h4 className='font-semibold my-2 underline text-lg'>Post and User Details</h4>
      {commentDetails ? (
        <div className='text-gray-600'>
          <p><strong>Post</strong>: {commentDetails.post.id} - {commentDetails.post.title}</p>
          <p><strong>Content</strong>: {commentDetails.post.content}</p>
          <p><strong>Name</strong>: {`${commentDetails.user.firstname} ${commentDetails.user.lastname}`}</p>
          <p><strong>Email</strong>: {commentDetails.user.email}</p>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center text-gray-400'>
          <p>O_O</p>
          <p>No Comment Selected</p>
        </div>
      )}
    </div>
  )
}
