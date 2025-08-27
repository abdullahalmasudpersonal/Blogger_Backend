import { Model } from 'mongoose';

export type TBlog = {
  title: string;
  content: string;
  image?: string;
  author: string;
};

export interface BlogModel extends Model<TBlog> {
  isBlogExistsByTitle(title: string): Promise<TBlog>;
}
