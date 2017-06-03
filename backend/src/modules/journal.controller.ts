import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { users, journals } from '../models/osm';
import { QueryResult, AppController } from './app.controller';

@Controller()
export class JournalController extends AppController {

    @Get('journal/list')
    async getJournals(req: Request, res: Response, next: NextFunction) {
        let request: {sub: string} = req.query;
        await this.connect();
        let user: users = await this.getUser(request.sub);
        let query: string = `SELECT j.*, DATE_FORMAT(j.date, "%m - %d - %y") as date FROM journals as j WHERE user_id = ? AND published = 1 ORDER BY j.date DESC LIMIT 5`;
        const result: QueryResult<journals> = new QueryResult<journals>(
            await this.connection.execute(query, [user.id])
        );
        return res.json(result.data);
    }

    @Get('journal/draft')
    async getDraft(req: Request, res: Response, next: NextFunction) {
        let request: {sub: string} = req.query;
        await this.connect();
        let user: users = await this.getUser(request.sub);
        let query: string = `
            SELECT * FROM journals WHERE user_id = ? AND published = 0 ORDER BY date DESC LIMIT 1
        `;
        const result: QueryResult<journals> = new QueryResult<journals>(
            await this.connection.execute(query, [user.id])
        );
        return res.json(result.first);
    }

    @Post('journal/draft')
    async saveDraft(req: Request, res: Response, next: NextFunction) {
        let request: {journal:{id?: number, body: string}, profile: any} = req.body;
        await this.connect();
        let user: users = await this.getUser(request.profile.sub);
        let query: string = "";
        console.log(request);
        if(undefined !== request.journal.id){
            query = `
                UPDATE journals SET user_id = ?, body = ?, published = 0
            `;
        } else {
            query = `
                INSERT IGNORE INTO journals (user_id, body, published) VALUES(?, ?, 0)
            `;
        }

        await this.connection.execute(query, [user.id, request.journal.body]);

        return res.json({});
    }


    @Post('journal/save')
    async saveJournal(req: Request, res: Response, next: NextFunction) {
        let request: {journal:{id?: number, body: string}, profile: any} = req.body;
        await this.connect();
        let user: users = await this.getUser(request.profile.sub);
        let query: string = "";
        if(undefined !== request.journal.id){
            query = `
                UPDATE journals SET user_id = ?, body = ?, published = 1
            `;
        } else {
            query = `
                INSERT IGNORE INTO journals (user_id, body, published) VALUES(?, ?, 1)
            `;
        }

        await this.connection.execute(query, [user.id, request.journal.body]);

        return res.json({});
    }
}
