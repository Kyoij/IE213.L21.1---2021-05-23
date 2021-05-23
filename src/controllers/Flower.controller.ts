import { NextFunction, Request, Response } from 'express';
import { Flower } from '../models';

export function AddFlowerPage(req: Request, res: Response) {
    return res.render('addFlower', {
        title: 'Thêm mới hoa',
        status: req.query.status || 'none',
        message: req.query.message || '',
    });
}
export function AddFlower(req: Request, res: Response) {
    try {
        const flower = new Flower({
            name: req.body.name,
            description: req.body.description,
            image: req.file.filename,
        });
        flower.save();
        res.redirect('/flower?status=ok&message=Thêm sản phẩm thành công');
    } catch (err) {
        res.redirect(`/flower?status=error&message=${err.message || 'Thêm sản phẩm không thành công'}`);
    }
}

export async function GetFlowerDetail(req: Request, res: Response, next: NextFunction) {
    try {
        const flower = await Flower.findOne({ _id: req.params.id });
        res.render('flowerDetail', { title: 'Chi tiet', flower });
    } catch (err) {
        next();
    }
}
