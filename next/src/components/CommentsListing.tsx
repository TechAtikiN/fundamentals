'use client'

// named imports
import { useState } from 'react'

// default imports
import CommentItem from './CommentItem'
import CommentDetails from './CommentDetails'

interface Props {
  comments: CommentType[]
}

export default function CommentsListing({ comments }: Props) {
  const [selectedComment, setSelectedComment] = useState<CommentType | null>(null)

  return (
    <div className='border border-slate-200 grid grid-cols-10 shadow-lg mx-10 my-5 p-5 gap-x-4 rounded-md'>
      <div className='col-span-3 border-r border-slate-300 pr-3'>
        <h3 className='text-xl font-semibold'>Comments</h3>
        <div className='my-5 h-[500px] overflow-auto space-y-4'>
          {comments.map((comment: CommentType) => (
            <CommentItem setSelectedComment={setSelectedComment} key={comment.id} comment={comment} />
          ))}
        </div>
      </div>

      <div className='col-span-7'>
        <h3 className='text-xl font-semibold mb-4'>Comment Preview&nbsp;-&nbsp;{selectedComment?.id}</h3>
        {selectedComment ? (
          <CommentDetails selectedComment={selectedComment} />
        ) : (
          <div className='flex flex-col justify-center items-center text-gray-400'>
            <p>O_O</p>
            <p>No Comment Selected</p>
          </div>
        )}
      </div>
    </div>
  )
}
