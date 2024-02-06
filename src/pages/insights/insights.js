import React from "react"
import InsightCard from "./insightCard"

const Insights = ({posts}) => {
  const content = (
    <>
      <section className='mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {posts.map((post, idx) => (
          <InsightCard key={idx} authorImage={post.author.imageUrl} image={post.image} date={post.date} title={post.title} description={post.description} tags={post.tags} />
        ))}
      </section>
    </>
  )
  return content
}

export default Insights