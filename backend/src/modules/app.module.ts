import { Module } from '@nestjs/common';
import { IndexController } from './index.controller';
import { UsersController } from './users.controller';
import { JournalController } from './journal.controller';

@Module({
    modules: [],
    controllers: [IndexController, UsersController, JournalController]
})
export class ApplicationModule {}
