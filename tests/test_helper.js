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

module.exports = {
  initialBlogs,
};
