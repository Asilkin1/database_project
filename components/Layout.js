import Head from "next/head";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>school manager</title>
        <meta
          name="description"
          content="School manager database course project"
        />
      </Head>

      <main className="flex flex-1 flex-col flex-wrap md:h-screen">
        <Link href='/'> 
        <a>
        <h1 className="text-6xl font-bold mb-4 text-center p-3">School manager</h1>
        <p className="mb-20 text-xl text-center">
          manage school with ease
        </p>
          </a></Link>
      
        <div className="flex max-w-64 mx-auto p-3 gap-5">
          <Link href="/department">
            <a>Departments</a>
          </Link>
          <Link href="/student">
            <a>Students</a>
          </Link>
          <Link href="/class">
            <a>Classes</a>
          </Link>
          <Link href="/instructor">
            <a>Instructors</a>
          </Link>
          <Link href="/schedule">
            <a>Schedules</a>
          </Link>
        </div>
        {children}
      </main>
    </>
  );
}
