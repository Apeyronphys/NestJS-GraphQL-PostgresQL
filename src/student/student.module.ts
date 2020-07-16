import { Module, forwardRef } from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentResolver } from './student.resolver';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Student } from './student.entity';
import { StudentController } from './student.controller';
import { LessonModule } from 'src/lesson/lesson.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
    forwardRef(() => LessonModule)
  ], 
  providers: [StudentService, StudentResolver],
  controllers: [StudentController],
  exports:[
    StudentService,
    TypeOrmModule.forFeature([Student]),
  ]
})
export class StudentModule {}
