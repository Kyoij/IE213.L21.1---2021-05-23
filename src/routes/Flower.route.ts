import { upload } from './../middlewares/multer.middleware';
import { Router } from 'express';
import { AddFlower, AddFlowerPage, GetFlowerDetail } from '../controllers';
export const FlowerRoute = Router();

FlowerRoute.get('/', AddFlowerPage);
FlowerRoute.get('/:id', GetFlowerDetail);
FlowerRoute.post('/', upload.single('image'), AddFlower);
