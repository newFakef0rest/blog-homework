const Blog = require("../models/blog");
const User = require("../models/user");

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

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((u) => u.toJSON());
};

module.exports = {
  initialBlogs,
  blogsInDb,
  usersInDb,
};
