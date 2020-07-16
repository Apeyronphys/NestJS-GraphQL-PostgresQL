import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create.student.dto';
import { UpdateStudentDto } from './dto/update.student.dto'; 
import { LessonService } from 'src/lesson/lesson.service';
import { Lesson } from 'src/lesson/lesson.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
    @Inject(forwardRef(() => LessonService))
        private lessonService: LessonService,
  ){}

  async getStudent(id: string): Promise<Student>{
    return this.studentRepository.findOne({ id });
  }

  async getStudents(): Promise<Student[]>{
    return this.studentRepository.find(); 
  }

  async createStudent(lessons: Lesson[], createStudentDto: CreateStudentDto): Promise<Student>{
    const { firstName, lastName } = createStudentDto;
    const student = new Student(); 
    student.firstName = firstName; 
    student.lastName = lastName;
    if(lessons){
      student.lessons = lessons; 
    } 
    await student.save(); 
    return student;   
  }

  async updateStudent(id: string, updateStudentDto: UpdateStudentDto): Promise<Student>{
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

  async deleteUser(id: string): Promise<void>{
    const student = await this.getStudent(id);
    await this.studentRepository.remove(student);
  }

  async getManyStudents(studentsID: string[]): Promise<Student[]>{
    return await this.studentRepository.find({
      where: {
        id: {
          $id: studentsID,
        },
      },
    });
  }
}
