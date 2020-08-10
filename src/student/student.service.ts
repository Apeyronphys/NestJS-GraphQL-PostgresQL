import { Injectable, forwardRef, Inject, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from '../relations/student.entity';
import { Repository, getManager, getConnection, getRepository } from 'typeorm';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto'; 
import { LessonService } from '../lesson/lesson.service';
import { Lesson } from 'src/relations/lesson.entity';
import { forEachChild } from 'typescript';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @Inject(forwardRef(() => LessonService))
        private lessonService: LessonService,
  ){}

  async getStudent(id: number): Promise<Student>{
    return getRepository(Student).findOne(id);
  }

  async getStudents(): Promise<Student[]>{
    return getConnection().manager.find(Student);
  }

  async createStudent(createStudentDto: CreateStudentDto): Promise<Student>{
    const { firstName, lastName, lessons,friends } = createStudentDto;
    const student = new Student(); 
    student.firstName = firstName; 
    student.lastName = lastName;
    student.lessons = []; 
    student.friends = []; 

    if(lessons){
      for(let i = 0; i < lessons.length; i++){
        const lessonid = await this.addLessonToStudent(lessons[i]);
        student.lessons.push(lessonid);
      }
    } 

  if(friends){
    for(let i = 0; i < friends.length; i++){
      const studentid = await this.addFriendsToStudent(friends[i]);
      console.log(studentid);
      student.friends.push(studentid);
    }

  }
 
    await student.save();  
    return student;   
  }

  async updateStudent(id: number, updateStudentDto: UpdateStudentDto): Promise<Student>{
    const { firstName, lastName, lessons } = updateStudentDto;
    const student = await this.getStudent(id);
     student.lessons = []; 
    if(firstName){
      student.firstName = firstName; 
    }

    if(lastName){
      student.lastName = lastName; 
    }

    if(lessons){

      for(let i = 0; i < lessons.length; i++){
      const lessonid = await this.addLessonToStudent(lessons[i]);

      // await getManager()
      //     .createQueryBuilder()
      //     .update(Student)
      //     .set({ lessons:  lessonid })
      //     .where('student.id = :id', { id: id })
      //     .execute();

      student.lessons.push(lessonid);
    }  
    }
    console.log(student)
    
    await student.save(); 
    return student; 
  }

  async deleteUser(id: number): Promise<void>{
    const student = await this.getStudent(id);
    await this.studentRepository.remove(student);
  }

  async addLessonToStudent(id: number): Promise<Lesson>{
    const lessons = await getManager()
    .createQueryBuilder(Lesson, 'lesson')
    .where('lesson.id = :id', { id: id })
    .getOne()

    return lessons; 
  }

  async addFriendsToStudent(id: number): Promise<Student>{
    const student = await getManager()
    .createQueryBuilder(Student, 'student')
    .where('student.id = :id', { id: id })
    .getOne()

    return student; 
  }

}
