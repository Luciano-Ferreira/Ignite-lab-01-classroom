import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';
import slugify from 'slugify';
interface CreateCourseParamas {
  title: string;
}
@Injectable()
export class CoursesService {
  constructor(private prisma: PrismaService) {}

  listAllCourses() {
    return this.prisma.course.findMany();
  }

  getCourseById(id: string) {
    return this.prisma.course.findUnique({
      where: {
        id,
      },
    });
  }

  async createCourse({ title }: CreateCourseParamas) {
    const slug = slugify(title, { lower: true });

    const courseAllReadyExists = await this.prisma.course.findUnique({
      where: {
        slug,
      },
    });

    if (courseAllReadyExists) {
      throw new Error('Course already');
    }

    return this.prisma.course.create({
      data: {
        title,
        slug,
      },
    });
  }
}
