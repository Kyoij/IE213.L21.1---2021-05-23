import { Request, Response } from 'express';

export function SearchResultPage(req: Request, res: Response) {
    res.render('search');
}
