import { Injectable, forwardRef, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository, getManager, getConnection, getRepository } from 'typeorm';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto'; 
import { LessonService } from '../lesson/lesson.service';
import { Lesson } from 'src/lesson/lesson.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @Inject(forwardRef(() => LessonService))
        private lessonService: LessonService,
  ){}

  async getStudent(id: number): Promise<Student>{
    return getRepository(Student).findOne(id);
    //return this.studentRepository.findOne({ id });
  }

  async getStudents(): Promise<Student[]>{
    return getConnection().manager.find(Student); 
    //return this.studentRepository.find(); 
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student>{
    const { firstName, lastName, lessons } = createStudentDto;
    const student = new Student(); 
    student.firstName = firstName; 
    student.lastName = lastName;
    if(lessons){
      // const uniqExistingLesson = await this.lessonService.getUniqExitingLesson(lessons);
      //await this.lessonService.addStudentToGroup(lessons, student.id);
      //const lessonId = await this.lessonService.getManyLessons(lessons);
     // student.lessons = lessonId; 
    } 
    await student.save();  
    return student;   
  }

  async updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>{
    const { firstName, lastName } = updateStudentDto;
    const student = await this.getStudent(id);
    
    if(firstName){
      student.firstName = firstName; 
    }

    if(lastName){
      student.lastName = lastName; 
    }

    await student.save(); 
    return student; 
  }

  async deleteUser(id: number): Promise<void>{
    const student = await this.getStudent(id);
    await this.studentRepository.remove(student);
  }





  

  // async addLessonToStudent(studentIDs: number[], lessonID: Lesson): Promise<void>{
  //   const student = await this.getManyStudents(studentIDs);
  //   const updateStudent = student.map(student => { 
  //     student.lessons.push(lessonID);
  //     return student;  
  //   });
  //   await this.studentRepository.save(updateStudent);
  // }
  // async getManyStudents(studentsID: number[]): Promise<Student[]>{
  //   return await this.studentRepository.find({
  //     where: {
  //       id: {
  //         $id: studentsID,
  //       },
  //     },
  //   });
  // }

  // getUniqIds(ids: number[]): number[]{
  //   return ids.filter((item, idx, arr) => arr.indexOf(item) === idx);
  // }

  // substractIdArrays(subtrahendArray: number[], subtractorArray: number[]){
  //   return subtrahendArray.filter(id => subtractorArray.indexOf(id) === -1);
  // }

  // async getUniqExistingStudentIDs(ids: number[]): Promise<number[]>{
  //   const uniqStudentIds = this.getUniqIds(ids);
  //   const existingStudentIds = (await this.getManyStudents(ids)).map(student => student.id);
  //   if(uniqStudentIds.length !== existingStudentIds.length){
  //     const studentNotFounded = this.substractIdArrays(uniqStudentIds, existingStudentIds);
  //     throw new NotFoundException(`Invalid studentId array, next students are not found: ${studentNotFounded.toString()}`);
  //   }
  //   return existingStudentIds; 
  // }

}
