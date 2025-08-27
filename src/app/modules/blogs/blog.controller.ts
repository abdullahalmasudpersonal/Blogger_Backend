import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BlogServices } from './blog.service';

const createBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.createBlogIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Blog Created Successfully',
    data: result,
  });
});

const getBlogs = catchAsync(async (req, res) => {
  const result = await BlogServices.getBlogsIntoDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get blogs Successfully',
    data: result,
  });
});

const getSingleBlog = catchAsync(async (req, res) => {
  const result = await BlogServices.getSingleBlogIntoDB(req);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get single blog Successfully',
    data: result,
  });
});

export const BlogController = {
  createBlog,
  getBlogs,
  getSingleBlog,
};
