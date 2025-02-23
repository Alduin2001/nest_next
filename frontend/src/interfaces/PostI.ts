export interface Post{
    id:number,
    header:string,
    body:string
}
export interface ApiResponse{
    posts:Post[]
}