// import { Request, Response, NextFunction } from 'express';
import * as mysql from 'mysql2/promise';
import { users } from '../models/osm';

export class AppController {
    protected connection: any;
    private is_connected: boolean = false;

    constructor(){}

    protected async connect(){
        if(this.is_connected) {
            return;
        }
        this.connection = await mysql.createConnection({
            host: 'db',
            user: 'root',
            password: 'root',
            database: 'pro_habits'
        });
        this.is_connected = true;
    }

    protected async getUser(sub: string): Promise<users> {
        await this.connect();
        let query = "SELECT * FROM users WHERE sub = ?";
        const users: QueryResult<users> = new QueryResult<users>(
            await this.connection.execute(query, [sub])
        );
        return users.first ? users.first : null;
    }

    protected async saveUser(profile: any): Promise<users>{
        await this.connect();
        let query: string = "INSERT IGNORE INTO users (sub, name, nickname, picture, gender) VALUES(?, ?, ?, ?, ?)";
        await this.connection.execute(query, [
            profile.sub,
            profile.name,
            profile.nickname,
            profile.picture,
            profile.gender
        ]);
        return await this.getUser(profile.sub);
    }


    protected async updateUserDay(sub: string, day: number): Promise<users> {
        await this.connect();
        let query: string = "UPDATE users SET day = ?, next_available = DATE(DATE_ADD(CURRENT_DATE, INTERVAL 1 DAY)) WHERE sub = ?";
        await this.connection.execute(query, [
            day,
            sub
        ]);
        return await this.getUser(sub);
    }

}

export class QueryResult<T> {
   private _rows: Array<T> = [];
   private _fields: Array<any> = [];

   constructor(result){
       this._rows = <T[]>result[0];
       this._fields = result[1];
   }

   get data(): Array<T>{
       return this._rows;
   }

   get first(): T{
       return this._rows[0] ? <T>this._rows[0] : null;
   }
}