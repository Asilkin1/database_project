import prisma from "../lib/prisma";
import DatabaseTable from "../components/DatabaseTable";

export default function Home({ students, instructors, schedules, departments, classes}) {
  console.log(schedules);
  return (

    <main className="flex flex-1">
          <div className="flex flex-wrap items-center">
      {/* Students */}
       <DatabaseTable data={students} title={"Students"} color={'green'} intensity={200}/>
        <DatabaseTable data={instructors} title={"Instructors"} color={'green'} intensity={200}/>
        <DatabaseTable data={schedules} title={"Schedules"} color={'green'} intensity={200}/>
        <DatabaseTable data={departments} title={"Departments"} color={'green'} intensity={200}/>
        <DatabaseTable data={classes} title={"Classes"} color={'green'} intensity={200}/>
    </div>
    </main>
  );
}

// Load students, classes and other tables
export async function getStaticProps(context) {
  const data = await prisma.student.findMany();
  const instructors = await prisma.instructor.findMany();
  const schedules = await prisma.schedule.findMany();
  const departments = await prisma.department.findMany();
  const classes = await prisma.class.findMany({
    select:{
      id:false,
      section:false,
      name:true,
      instructor:true
    }
  });

  //const registered = await prisma.registered.findMany();

  const students = data.map((student) => ({
    ...student,
  }));
  return {
    props: { students,instructors,schedules,departments, classes},
  };
}
