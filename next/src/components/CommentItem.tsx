'use client'

interface Props {
  comment: CommentType,
  setSelectedComment: (comment: CommentType) => void
}

export default function CommentItem({ comment, setSelectedComment }: Props) {
  return (
    <div
      onClick={() => setSelectedComment(comment)}
      key={comment.id}
      className='flex items-start space-x-4 shadow-md border border-indigo-100 hover:cursor-pointer bg-indigo-100 hover:bg-indigo-200 p-3 rounded-md'
    >
      <h4 className=''>{comment.id}.</h4>
      <p className=''>
        {comment.comment.length > 70 ? comment.comment.slice(0, 70) + '...' : comment.comment}
      </p>
    </div>
  )
}
