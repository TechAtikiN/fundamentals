const BASE_URL = 'https://jsonplaceholder.org'

export async function getAllComments() {
  try {
    const response = await fetch(`${BASE_URL}/comments`)
    const data: CommentType[] = await response.json()
    return data
  } catch (error) {
    console.error('Error finding resources', error);
  }
}

export async function getCommentDetails(selectedComment: CommentType) {
  try {
    const postDetails = await fetch(`${BASE_URL}/posts/${selectedComment.postId}`)
    const userDetails = await fetch(`${BASE_URL}/users/${selectedComment.userId}`)
    const post: PostType = await postDetails.json()
    const user: UserType = await userDetails.json()
    
    return { post, user }
  } catch (error) {
    console.error('Error finding resources', error);
  }
}