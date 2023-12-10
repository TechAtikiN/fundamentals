'use server'

const API_ENDPOINT = 'https://jsonplaceholder.typicode.com/users'

export async function getData () {
  try {
    const response = await fetch(API_ENDPOINT)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching resources', error)
  }
}