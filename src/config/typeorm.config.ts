import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Student } from '../relations/student.entity';
import { Lesson } from '../relations/lesson.entity';
//import { StudentsToLessons } from '../relations/lesson-student.entity';
import { join, resolve, parse, normalize } from 'path';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres', 
    host: 'localhost',
    port: 5432, 
    username: 'postgres', 
    password: '', 
    database: 'lessonsmanagement', 
    entities: [normalize(__dirname + '/../relations/**.entity{.js, .ts}')],
    synchronize: true, 
}; 