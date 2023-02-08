function Shows({ shows }) {
  return (
    <div className="grid min-h-screen grid-cols-5 gap-4 p-5">
      {shows?.data?.map(show => (
        <div
          key={show.mal_id}
          className="max-w-xs my-2 overflow-hidden rounded shadow-lg "
        >
          <img
            className="flex-1 object-cover w-full h-80"
            src={show.images.webp.image_url}
            alt={show.images.webp.image_url}
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">{show.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://api.jikan.moe/v4/anime/")
  const shows = await res.json()
  return {
    props: {
      shows
    }
  }
}

export default Shows
