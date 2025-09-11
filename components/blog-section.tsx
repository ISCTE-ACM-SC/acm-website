export function BlogSection() {
  const blogPosts = [
    {
      title: "ACM Launches New Initiative",
      description: "Fostering innovation and collaboration among students.",
      date: "2025-02-24",
    },
    {
      title: "Join Our Upcoming Workshop",
      description: "Enhance your skills and network with professionals.",
      date: "2025-03-05",
    },
    {
      title: "Hackathon 2025: Registration Open",
      description: "Showcase your talent in solving real-world problems.",
      date: "2025-04-10",
    },
  ]

  return (
    <section className="blog-section">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 dark:text-blue-200 mb-12">Latest Blog Posts</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md dark:shadow-gray-700 p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3">{post.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{post.description}</p>
              <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">{post.date}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
