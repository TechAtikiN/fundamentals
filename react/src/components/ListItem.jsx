export default function ListItem(user) {
  return (
    <div className='border rounded-md shadow-lg bg-cyan-200 p-5'>
      <h2 className='text-xl font-semibold'>{user.name}</h2>
      <p className=''>{user.email}</p>
    </div>
  )
}
