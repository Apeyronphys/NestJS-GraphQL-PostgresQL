import { Injectable, Inject, forwardRef, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lesson } from './lesson.entity';
import { CreateLessonDto } from './dto/create.lesson.dto';
import { UpdateLessonDto } from './dto/update.lesson.dto';
import { StudentService } from '../student/student.service';
import { Student } from 'src/student/student.entity';

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
        const { Name, startDate, endDate, students } = createLessonDto;
        const lesson = new Lesson(); 
        lesson.Name = Name; 
        lesson.startDate = startDate; 
        lesson.endDate = endDate;
        // if(students){
        //   lesson.students = students; 
        // } 
        return this.lessonRepository.save(lesson); 
      }

      async updateLesson(id: number, updateLessonDto: UpdateLessonDto/*, students: Student[]*/): Promise<Lesson>{
        const { Name, startDate, endDate, students } = updateLessonDto;
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

        // if(students){
        //   lesson.students = students; 
        // }

        return this.lessonRepository.save(lesson);
      }

      async deleteLesson(id: number): Promise<void>{
        const lesson = await this.getLesson(id);
        await this.lessonRepository.remove(lesson);
      }



      // async addStudentToGroup(lessonID: number[], student: number): Promise<void>{
      //   const lesson = await this.getManyLessons(lessonID);
      //   const updateLesson = lesson.map(lesson => {
      //     lesson.studentId.push(student);
      //     return lesson; 
      //   }); 
      //   await this.lessonRepository.save(updateLesson);
      // }

      // async getManyLessons(lessonsID: number[]): Promise<Lesson[]>{
      //   return await this.lessonRepository.find({
      //     where: {
      //       id: {
      //         $id: lessonsID,
      //       },
      //     },
      //   });
      // }

      // async getUniqExitingLesson(ids: number[]): Promise<number[]>{
      //   const uniqLessonIds = this.studentService.getUniqIds(ids);
      //   const existungLessonIds = (await this.getManyLessons(ids)).map(lesson => lesson.id);
      //   if(uniqLessonIds.length !== existungLessonIds.length){
      //     const lessonIdsNotFound = this.studentService.substractIdArrays(uniqLessonIds, existungLessonIds);
      //     throw new NotFoundException(`Invalid studentId array, next students are not found: ${lessonIdsNotFound.toString()}`);
      //   }
      //   return existungLessonIds; 
      // }
}
