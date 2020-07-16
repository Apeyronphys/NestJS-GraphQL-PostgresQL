import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonDto } from './dto/create.lesson.dto';
import { UpdateLessonDto } from './dto/update.lesson.dto';
import { StudentService } from 'src/student/student.service';
import { Student } from 'src/student/student.entity';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
        @Inject(forwardRef(() => StudentService))
        private studentService: StudentService, 
      ){}

      async getLesson(id: string): Promise<Lesson>{
        return this.lessonRepository.findOne({ id });
      }

      async getLessons(): Promise<Lesson[]>{
        return this.lessonRepository.find(); 
      }

      async createlesson(students: Student[], createLessonDto: CreateLessonDto): Promise<Lesson>{
        const { Name, startDate, endDate } = createLessonDto;
        const lesson = new Lesson(); 
        lesson.Name = Name; 
        lesson.startDate = startDate; 
        lesson.endDate = endDate;
        if(students){
          lesson.students = students; 
        } 
        return this.lessonRepository.save(lesson);  
      }

      async updateLesson(id: string, updateLessonDto: UpdateLessonDto, students: Student[]): Promise<Lesson>{
        const { Name, startDate, endDate } = updateLessonDto;
        const lesson = await this.getLesson(id);

        if (Name){
          lesson.Name = Name; 
        }

        if(startDate){
          lesson.startDate = startDate; 
        }

        if(endDate){
          lesson.endDate = endDate; 
        }

        if(students){
          lesson.students = students; 
        }

        return this.lessonRepository.save(lesson);
      }

      async deleteLesson(id: string): Promise<void>{
        const lesson = await this.getLesson(id);
        await this.lessonRepository.remove(lesson);
      }
}
