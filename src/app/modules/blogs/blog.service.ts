import { Request } from 'express';
import { Blog } from './blog.modal';
import AppError from '../../errors/AppError';
import { IUploadFile } from '../../interface/file';

const createBlogIntoDB = async (req: Request) => {
  const blogData = req.body;
  const existsBlog = await Blog.findOne({ title: blogData.title });
  if (existsBlog) {
    throw new AppError(409, 'Blog Alrady Exists!');
  }

  const file = req.file as IUploadFile;
  blogData.image = file?.path;

  const createBlog = await Blog.create(blogData);
  return createBlog;
};

const getBlogsIntoDB = async () => {
  const blogs = await Blog.find();
  return blogs;
};

const getSingleBlogIntoDB = async (req: Request) => {
  const blogId = req.params.id;
  return await Blog.findById({ _id: blogId });
};

export const BlogServices = {
  createBlogIntoDB,
  getBlogsIntoDB,
  getSingleBlogIntoDB,
};
