import { Module } from '@nestjs/common';
import { LessonModule } from './lesson/lesson.module';
import { StudentModule } from './student/student.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { typeOrmConfig } from './config/typeorm.config';
import { join } from 'path';



@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    GraphQLModule.forRoot({
      autoSchemaFile: true, 
    }),
    LessonModule,
    StudentModule,
  ],
})
export class AppModule {}
