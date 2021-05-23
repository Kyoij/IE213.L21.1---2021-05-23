import { Router } from 'express';
import { GetIndex } from '../controllers';

export const HomeRoute = Router();

HomeRoute.get('/', GetIndex);
