const { Prisma } = require('@prisma/client')


const departments = [
  {
    dname:'CS',
    class:'Database Managment 101'
  },
  {
    dname:'ME',
    class:'Mechanical Engineering 101'
  }
]

const students = [
  {
    name:'John Doe',
    dob:'02/22/2022',
    dname:'CS',
    Minor:'Applied Math' 
  },
  {
    name:'Jane Doe',
    dob:'02/23/2022',
    dname:'ME',
    Minor:'Applied Mechanical Engineering' 
  }
]

const schedules = [
{
  room: 'B2222',
  time: '12:00 - 1:30 PM',
  day:  'M,T,W'
},
{
  room: 'B1111',
  time: '9:00 - 10:30 AM',
  day:  'M,T,W'
}]

const instructors = [
  {
    name: 'Mr Parkinson',
    department: 'CS'
  },
  {
    name: 'Mr Tuesday',
    department: 'ME'
  }]

  const classes = [
    {
    section: '1',
    name:'Super programming',
    schedule: '1',
    instructor: 'Mr Parkinson',
    studentID:1
    },
    {
      section: '2',
      name:'Advanced Super Programming',
      schedule: '2',
      instructor: 'Mr Parkinson',
      studentID:1
    }]

  const registered = [
    {
      id:100
    }
  ]


module.exports = {
 students,
 departments,
 schedules,
 instructors,
 classes,
registered}
