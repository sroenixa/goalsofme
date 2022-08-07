import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { Award } from './award/award.entity';
import { AwardModule } from './award/award.module';
import { Entry } from './entry/entry.entity';
import { EntryModule } from './entry/entry.module';
import { Goal } from './goal/goal.entity';
import { GoalModule } from './goal/goal.module';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host:'localhost',
    port:3306,
    username:'root',
    password:'Password@123',
    database:'mydb',
    entities: [User,Goal,Award,Entry],
    synchronize: true,
  }),UserModule,GoalModule,EntryModule,AwardModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
