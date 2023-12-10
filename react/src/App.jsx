// named imports
import { useEffect, useState } from 'react'

// default imports
import ListItem from './components/ListItem'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    let URL = 'https://jsonplaceholder.typicode.com/users'
    const fetchData = async () => {
      try {
        const response = await fetch(URL)
        const data = await response.json()
        setUsers(data)
      } catch (error) {
        console.error('Error fetching resources', error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      <h1 className='text-3xl p-5 font-semibold'>Async Items List</h1>

      <div className='p-5 flex flex-wrap mx-auto gap-6 justify-center'>
        {users && users.map((user) => {
          return (
            <ListItem key={user.id} name={user.name} email={user.email} />
          )
        })}
      </div>
    </div>
  )
}

export default App
