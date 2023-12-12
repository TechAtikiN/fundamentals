const BASE_URL = 'https://jsonplaceholder.org'

// fetching all comments from the API
async function getAllComments() {
  try {
    const response = await fetch(`${BASE_URL}/comments`)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error finding resources', error);
  }
}

// fetching post and user details
async function getCommentDetails(selectedComment) {
  try {
    const postDetails = await fetch(`${BASE_URL}/posts/${selectedComment.postId}`)
    const userDetails = await fetch(`${BASE_URL}/users/${selectedComment.userId}`)
    const post = await postDetails.json()
    const user = await userDetails.json()

    return { post, user }
  } catch (error) {
    console.error('Error finding resources', error);
  }
}

// rendering list of comments
async function renderComments() {
  const container = document.querySelector('.comments-list')

  const comments = await getAllComments()
  if (!comments) return

  comments.forEach(item => {
    const comment = document.createElement('div')
    comment.classList.add('comment')

    const id = document.createElement('p')
    id.textContent = `${item.id}.`

    const commentText = document.createElement('p')
    const trimComment = item.comment.length > 100 ? `${item.comment.substring(0, 100)}...` : item.comment
    commentText.textContent = trimComment

    comment.appendChild(id)
    comment.appendChild(commentText)
    container.appendChild(comment)

    comment.addEventListener('click', handleSelectedComment)
  })
}

// handle selected comment event
async function handleSelectedComment(event) {
  // getting comment id
  const comment = event.target.closest('.comment')
  const commentId = comment.querySelector('p').textContent.split('.')[0]

  // fetching comment details
  const reponse = await fetch(`${BASE_URL}/comments/${commentId}`)
  const commentDetails = await reponse.json()

  // fetching post and user details
  const postAndUserDetails = await getCommentDetails(commentDetails)
  renderCommentDetails(postAndUserDetails, commentDetails)
}

// rendering comment details
const renderCommentDetails = (postAndUserDetails, commentDetails) => {
  const container = document.querySelector('.preview')
  container.innerHTML = ''

  const title = document.createElement('h2')
  title.textContent = `Comment Preview - ${commentDetails.id}`

  const postTitle = document.createElement('h3')
  postTitle.textContent = `Post: ${postAndUserDetails.post.title}`

  const comment = document.createElement('p')
  comment.textContent = `Comment: ${commentDetails.comment}`

  const postBody = document.createElement('p')
  postBody.textContent = `Post Content: ${postAndUserDetails.post.content}`

  const userName = document.createElement('p')
  userName.textContent = `User Name: ${postAndUserDetails.user.firstname} ${postAndUserDetails.user.lastname}`

  const userEmail = document.createElement('p')
  userEmail.textContent = `User Email: ${postAndUserDetails.user.email}`

  container.appendChild(title)
  container.appendChild(comment)
  container.appendChild(postTitle)
  container.appendChild(postBody)
  container.appendChild(userName)
  container.appendChild(userEmail)
}

renderComments()



