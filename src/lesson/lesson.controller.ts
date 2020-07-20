import { Controller, Get, Param, Post, Body, Patch, Delete } from "@nestjs/common";
import { LessonService } from "./lesson.service";
import { Lesson } from "./lesson.entity";
import { CreateLessonDto } from "./dto/create.lesson.dto";
import { UpdateLessonDto } from "./dto/update.lesson.dto";
import { Student } from "src/student/student.entity";

@Controller('lessons')
export class LessonController{
    constructor(
        private lessonService: LessonService, 
    ){}

    @Get()
    getLessons(): Promise<Lesson[]>{
        return this.lessonService.getLessons(); 
    }

    @Get()
    getLessonById(
        @Param('id') id: number, 
    ): Promise<Lesson>{
        return this.lessonService.getLesson(id);
    }

    @Post()
    createLesson(
        @Body() createLessonDto: CreateLessonDto,
    ): Promise<Lesson>{
        return this.lessonService.createlesson(createLessonDto);
    }

    @Patch()
    updateLesson(
        @Param('id') id: number, 
        @Body() updateLessonDto: UpdateLessonDto,  
    ): Promise<Lesson>{
        return this.lessonService.updateLesson(id, updateLessonDto);
    }

    @Delete('/:id')
    deleteLesson(@Param('id') id: number): Promise<void>{
       return this.lessonService.deleteLesson(id);
    }

}