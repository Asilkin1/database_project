const { PrismaClient } = require('@prisma/client')
const { students,instructors,departments,schedules, classes, registered} = require('./data.js')
const prisma = new PrismaClient()

const load = async () => {
  try {

    // Instructor
    await prisma.instructor.deleteMany();
    console.log('Deleted records in instructor table')

    await prisma.$queryRaw`ALTER TABLE Instructor AUTO_INCREMENT = 1`
    console.log('reset instructor auto increment to 1')

    await prisma.instructor.createMany({
      data: instructors
    })
    console.log('Added instructors data')


    // Department
    await prisma.department.deleteMany()
    console.log('Deleted records in departments table')

    await prisma.department.createMany({
      data: departments,
    })
    console.log('Added category data')


    // Schedule
    await prisma.schedule.deleteMany()
    console.log('Deleted records in schedule table')
    await prisma.$queryRaw`ALTER TABLE Schedule AUTO_INCREMENT = 1`
    console.log('reset schedule auto increment to 1')

    await prisma.schedule.createMany({
      data: schedules,
    })
    console.log('Added schedule data')

    // Student
    await prisma.student.deleteMany()
    await prisma.$queryRaw`ALTER TABLE Student AUTO_INCREMENT = 1`
    console.log('reset student auto increment to 1')

    await prisma.student.createMany({
      data: students,
    })
    console.log('Added student data')

    // Class
    await prisma.class.deleteMany()
    await prisma.$queryRaw`ALTER TABLE Class AUTO_INCREMENT = 1`
    console.log('reset class auto increment to 1')

    await prisma.class.createMany({
      data: classes,
    })
    console.log('Added class data')

    // Registered
    //await prisma.registered.deleteMany()
    //await prisma.$queryRaw`ALTER TABLE Registered AUTO_INCREMENT = 1`

    await prisma.registered.createMany({
      data: registered,
    })
    console.log('Added registration data')

  } catch (e) {
    console.error(e)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

load()
