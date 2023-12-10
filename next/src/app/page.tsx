// named imports
import { getData } from './actions/getData'

export default async function Home() {
  const users: User[] = await getData()

  return (
    <div>
      <h1 className='text-3xl p-5 font-semibold'>Async Items List</h1>

      <div className='p-5 flex flex-wrap mx-auto gap-6 justify-center'>
        {users && users.map((user) => {
          return (
            <div key={user.id} className='border rounded-md shadow-lg bg-lime-200 p-5'>
              <h2 className='text-xl font-semibold'>{user.name}</h2>
              <p className=''>{user.email}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
