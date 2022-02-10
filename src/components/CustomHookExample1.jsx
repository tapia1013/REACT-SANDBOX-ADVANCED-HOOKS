import useFetch from "../hooks/useFetch"

function CustomHookExample1() {
  // to use custom fetch hook
  const { data, loading } = useFetch('https://jsonplaceholder.typicode.com/posts', {});

  // console.log(res);

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <div>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
  )
}

export default CustomHookExample1