import { Module, forwardRef } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { LessonResolver } from './lesson.resolver';
import { Lesson } from '../relations/lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonController } from './lesson.controller';
import { StudentModule } from '../student/student.module';
import  {StudentsToLessons}  from '../relations/lesson-student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    forwardRef(() => StudentModule)
  ], 
  providers: [LessonService, LessonResolver],
  controllers: [LessonController],
  exports:[
    LessonService, 
    TypeOrmModule.forFeature([Lesson]),
  ]
})
export class LessonModule {}
