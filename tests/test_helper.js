const Blog = require("../models/blog");

const initialBlogs = [
  {
    title: "emeas last hope",
    author: "new person",
    url: "http://RickRoll",
    likes: 3,
  },
  {
    title: "new user",
    author: "personalized account",
    url: "http://youtube",
    likes: 99,
  },
];

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

module.exports = {
  initialBlogs,
  blogsInDb,
};
