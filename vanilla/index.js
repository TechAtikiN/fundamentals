let API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

// fetching users from jsonplaceholder API
async function getData() {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching resources', error)
  }
}

// displaying users on the page
async function displayItems() {
  const container = document.querySelector('.container')
  const data = await getData()

  if (!data) return

  data.forEach(item => {
    const card = document.createElement('div')
    card.classList.add('card')

    const name = document.createElement('h2')
    name.textContent = item.name

    const email = document.createElement('p')
    email.textContent = item.email

    card.appendChild(name)
    card.appendChild(email)
    container.appendChild(card)
  })
}

displayItems()