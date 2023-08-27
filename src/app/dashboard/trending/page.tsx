import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Trending',
  description: 'Most Trending Anime',
}

const trending = () => {
  return (
    <section>
      <h1>Most Popular Anime</h1>
    </section>
  )
}

export default trending