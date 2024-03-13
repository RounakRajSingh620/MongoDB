db.Inventory.insertOne({
    title: "Post Title 1",
    body: "Body of post.",
    category: "News",
    likes: 1,
    tags: ["news", "events"],
    date: Date()
  })
  db.Inventory.insertMany([  
    {
      title: "Post Title 2",
      body: "Body of post.",
      category: "Event",
      likes: 2,
      tags: ["news", "events"],
      date: Date()
    },
    {
      title: "Post Title 3",
      body: "Body of post.",
      category: "Technology",
      likes: 3,
      tags: ["news", "events"],
      date: Date()
    },
    {
      title: "Post Title 4",
      body: "Body of post.",
      category: "Event",
      likes: 4,
      tags: ["news", "events"],
      date: Date()
    }
  ])