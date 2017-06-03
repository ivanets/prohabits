import { Controller, Get, Post, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { quotes, commits, journals, commit_types, users } from '../models/osm';
import { QueryResult, AppController } from './app.controller';

@Controller()
export class UsersController extends AppController {

    @Get('commit/current')
    async getCurrentCommit(req: Request, res: Response, next: NextFunction) {
        let request: {sub: string} = req.query;
        await this.connect();
        let user = await this.getUser(request.sub);
        let query: string = `
            SELECT c.*, (uc.user_id IS NOT NULL) as active, (DATE(u.next_available) <= DATE(CURRENT_DATE)) as available FROM commits as c 
            LEFT JOIN users_commits as uc ON (c.id = uc.commit_id AND uc.user_id = ?)
            LEFT JOIN users as u ON (u.id = ?)
            WHERE c.day = ?
        `;
        const result: QueryResult<any> = new QueryResult<any>(
            await this.connection.execute(query, [user.id, user.id, user.day])
        );
        return res.json(result.first);
    }

    @Post('commit/apply')
    async applyCommit(req: Request, res: Response, next: NextFunction) {
        let body = req.body;
        await this.connect();
        let user: users = await this.saveUser(body.profile);

        let query = "INSERT IGNORE INTO users_commits (user_id, commit_id) VALUES(?, ?)";
        await this.connection.execute(query, [
            user.id,
            body.commit.id
        ]);
        // DEBUG ACTIVITIES
        query = "INSERT IGNORE INTO activities (user_id, message) VALUES(?, ?)";
        await this.connection.execute(query, [
            user.id,
            "Just commited [" + user.day + "]"
        ]);
        // END DEBUG ACTIVITIES
        return res.json(user);
    }

    @Post('commit/done')
    async doneCommit(req: Request, res: Response, next: NextFunction) {
        let body = req.body;
        await this.connect();
        let user: users = await this.getUser(body.profile.sub);
        await this.updateUserDay(user.sub, user.day + 1);
        let query = "INSERT IGNORE INTO users_commits (user_id, commit_id) VALUES(?, ?)";
        await this.connection.execute(query, [
            user.id,
            body.commit.id
        ]);
        // DEBUG ACTIVITIES
        query = "INSERT IGNORE INTO activities (user_id, message) VALUES(?, ?)";
        await this.connection.execute(query, [
            user.id,
            "Just done [" + user.day + "]"
        ]);
        // END DEBUG ACTIVITIES
        return res.json(user);
    }

}
