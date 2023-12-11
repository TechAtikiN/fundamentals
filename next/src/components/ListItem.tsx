import React from 'react'

interface Props {
  user: {
    id: number
    name: string
    email: string
  }
}

export default function ListItem({ user }: Props) {
  return (
    <div key={user.id} className='border rounded-md shadow-lg bg-lime-200 p-5'>
      <h2 className='text-xl font-semibold'>{user.name}</h2>
      <p className=''>{user.email}</p>
    </div>
  )
}
