// named imports
import { getData } from './actions/getData'

// default imports
import ListItem from '@/components/ListItem'

export default async function Home() {
  const users: User[] = await getData()

  return (
    <div>
      <h1 className='text-3xl p-5 font-semibold'>Async Items List</h1>

      <div className='p-5 flex flex-wrap mx-auto gap-6 justify-center'>
        {users && users.map((user) => {
          return (
            <ListItem key={user.id} user={user} />
          )
        })}
      </div>
    </div>
  )
}
