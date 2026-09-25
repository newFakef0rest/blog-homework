const blogsRouter = require("express").Router();
const User = require("../models/user");
const Blog = require("../models/blog");

blogsRouter.get("/", async (request, response) => {
  const blogs = await Blog.find({}).populate("user", { username: 1, name: 1 });
  response.json(blogs);
});

blogsRouter.get("/:id", async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).end();
  }
});

blogsRouter.post("/", async (request, response) => {
  const body = request.body;

  const user = await User.findById(body.userId);

  if (!user) {
    return response.status(400).json({ error: "userId missing or not valid" });
  }

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id,
  });

  const savedBlog = await blog.save();
  user.blog = user.blog.concat(savedBlog._id);
  await user.save();
  response.status(201).json(savedBlog);
});

blogsRouter.delete("/:id", async (req, res) => {
  await Blog.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

blogsRouter.put("/:id", async (request, response) => {
  const { title, author, url, likes } = request.body;

  const fetchedBlog = await Blog.findById(request.params.id);

  if (!fetchedBlog) {
    return response.status(404).end();
  }

  fetchedBlog.title = title;
  fetchedBlog.author = author;
  fetchedBlog.url = url;
  fetchedBlog.likes = likes;

  const savedBlog = await fetchedBlog.save();

  response.status(201).json(savedBlog);
});

module.exports = blogsRouter;
