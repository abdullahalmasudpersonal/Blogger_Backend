import { model, Schema } from 'mongoose';
import { BlogModel, TBlog } from './blog.interface';

const blogSchema = new Schema<TBlog, BlogModel>(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    author: {
      type: String,
      required: true,
      unique: false,
    },
  },
  {
    timestamps: true,
  },
);

blogSchema.statics.isBlogExistsByTitle = async function (title: string) {
  return await Blog.findOne({ title });
};

export const Blog = model<TBlog, BlogModel>('Blog', blogSchema);
