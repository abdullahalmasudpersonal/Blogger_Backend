import { NextFunction, Request, Response, Router } from 'express';
import { BlogController } from './blog.controller';
import { FileUploadHelper } from '../../utils/fileUploadHelper';

const router = Router();

router.post(
  '/create-blog',
  FileUploadHelper.upload.single('file'),
  (req: Request, res: Response, next: NextFunction) => {
    req.body = JSON.parse(req.body.data);
    return BlogController.createBlog(req, res, next);
  },
);

router.get('/all-blog', BlogController.getBlogs);

router.get('/single-blog/:id', BlogController.getSingleBlog);

export const BlogRoutes = router;
