import { Injectable, Inject, forwardRef, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, getManager } from 'typeorm';
import { Lesson } from '../relations/lesson.entity';
import { CreateLessonDto } from './dto/create.lesson.dto';
import { UpdateLessonDto } from './dto/update.lesson.dto';
import { StudentService } from '../student/student.service';
import { Student } from 'src/relations/student.entity';

@Injectable()
export class LessonService {
    constructor(
        @InjectRepository(Lesson) private lessonRepository: Repository<Lesson>,
        @Inject(forwardRef(() => StudentService))
        private studentService: StudentService, 
      ){}

      async getLesson(id: number): Promise<Lesson>{
        return this.lessonRepository.findOne({ id });
      }

      async getLessons(): Promise<Lesson[]>{
        return this.lessonRepository.find(); 
      }

      async createlesson(createLessonDto: CreateLessonDto): Promise<Lesson>{
        const { Name, startDate, endDate } = createLessonDto;
        const lesson = new Lesson(); 
        lesson.Name = Name; 
        lesson.startDate = startDate; 
        lesson.endDate = endDate;
        
        return this.lessonRepository.save(lesson); 
      }

      async updateLesson(id: number, updateLessonDto: UpdateLessonDto): Promise<Lesson>{
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

        return this.lessonRepository.save(lesson);
      }

      async deleteLesson(id: number): Promise<void>{
        const lesson = await this.getLesson(id);
        await this.lessonRepository.remove(lesson);
      }
}
