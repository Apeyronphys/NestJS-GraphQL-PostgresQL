import { Controller, Get, Param, Post, UsePipes, ValidationPipe, Body, Patch, Delete } from "@nestjs/common";
import { StudentService } from "./student.service";
import { Student } from "../relations/student.entity";
import { CreateStudentDto } from "./dto/create.student.dto";
import { UpdateStudentDto } from "./dto/update.student.dto";
import { Lesson } from "src/relations/lesson.entity";

@Controller('student')
export class StudentController{
    constructor(
        private studentService: StudentService, 
    ){}

    @Get()
    getStudents(): Promise<Student[]>{
        return this.studentService.getStudents();
    }

    @Get('/:id')
    getStudentById(@Param('id') id: number): Promise<Student>{
        return this.studentService.getStudent(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    createStudent(
        @Body() createStudentDto: CreateStudentDto, 
        ){
        return this.studentService.createStudent(createStudentDto);
    }

    @Patch()
    @UsePipes(ValidationPipe)
    updateStudent(
        @Param('id') id: number,
        @Body() updateStudentDto: UpdateStudentDto, 
    ): Promise<Student>{
        return this.studentService.updateStudent(id, updateStudentDto);
    }

    @Delete('/:id')
    deleteStudent(@Param('id') id: number): Promise<void>{
        return this.studentService.deleteUser(id);
    }
}