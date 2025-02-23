import { apiClient } from '@/config/apiClient';
import { ApiResponse, Post } from '@/interfaces/PostI';

export default async function AllPosts() {
    
    const response = await apiClient.get<ApiResponse>('/post');
    console.log(response.data.posts);
    const posts:Post[] = response.data.posts;
    
  return (
    <div>
      <h1>Все посты</h1>
      {posts.length > 0 ? (
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <h2>{post.header}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Пока нет постов.</p>
      )}
    </div>
  );
}