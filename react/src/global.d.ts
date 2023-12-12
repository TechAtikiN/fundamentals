type CommentType = {
  id: number;
  postId: number;
  userId: number;
  comment: string;
}

type CommentDetails = {
  post: PostType;
  user: UserType;
}

type PostType = {
  id: number;
  title: string;
  content: string;
}

type UserType = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
}