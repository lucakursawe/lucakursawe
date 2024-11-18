import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Luca Kursawe
      </h1>
      <p className="mb-4">
        {`Currently studying computer science at Rheinische Hochschule Köln in Cologne, Germany.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
