import { Request, Response } from 'express';
import { Flower } from '../models';

export async function GetIndex(req: Request, res: Response) {
    const search = (req.query.search || '') as string;
    const flowers = (await Flower.find()).filter((x) => x.name.includes(search) || x.description.includes(search));
    res.render('index', { title: 'Trang chủ', flowers, search });
}
