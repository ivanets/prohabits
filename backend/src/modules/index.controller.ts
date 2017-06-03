import {Controller, Get} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import {quotes, activities} from '../models/osm';
import {QueryResult, AppController} from './app.controller';

@Controller()
export class IndexController extends AppController {

    @Get('index/quote')
    async getRandomQuote(req: Request, res: Response, next: NextFunction) {
        await this.connect();
        let query: string = "SELECT * FROM quotes ORDER BY RAND() LIMIT 1";
        const result: QueryResult<quotes> = new QueryResult<quotes>(
            await this.connection.execute(query)
        );
        return res.json(result.first);
    }

    @Get('index/activities')
    async getLastActivities(req: Request, res: Response, next: NextFunction) {
        await this.connect();
        let query: string = `
            SELECT a.*, DATE_FORMAT(a.datetime, "%h:%i %p") as time, u.name, u.picture FROM activities as a
            LEFT JOIN users as u ON(a.user_id = u.id)
            ORDER BY datetime DESC LIMIT 10
        `;
        const result: QueryResult<activities> = new QueryResult<activities>(
            await this.connection.execute(query)
        );
        return res.json(result.data);
    }


    @Get('index/growth/our')
    async getOurGrowth(req: Request, res: Response, next: NextFunction) {
        return res.json([
            [
                {
                    icon: 'ok_ph',
                    count: 20,
                    text: 'ICOMMITS TODAY',
                    empty: false
                },
                {
                    icon: 'daily_ch_done_ph',
                    count: 20,
                    text: 'DAILY CHALLENGES COMPLETE',
                    empty: false
                }
            ],
            [
                {
                    icon: 'user_ph',
                    count: 20,
                    text: 'CO-WORKERS WORKING ON THIS PROHABIT',
                    empty: false
                },
                {
                    icon: 'fire_ph',
                    count: 20,
                    text: 'PEOPLE CURRENTLY ON 5+ DATE STREAKS',
                    empty: false
                }
            ],
            [
                {
                    icon: 'stat_ph',
                    count: 20,
                    text: 'PEOPLE HAVE FINISHED THIS PROHABIT 1X',
                    empty: false
                },
                {
                    empty: true
                }
            ]
        ]);
    }

    @Get('index/growth/personal')
    async getPersonalGrowth(req: Request, res: Response, next: NextFunction) {
        let request: {sub: string} = req.query;
        await this.connect();
        let user = await this.getUser(request.sub);
        return res.json({
            completed: user.day - 1,
            streak: user.day - 1
        });
    }
}
