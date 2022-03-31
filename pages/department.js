const { PrismaClient } = require('@prisma/client')

export default function Department(){

  async function handleSubmit(e) {

    e.preventDefault();
    const elements = e.target.elements;

    /**
     * 
     * @TOOD call prisma client
     * */ 

     const prisma = new PrismaClient()

     

     try{
      await prisma.department.create({
        data: {
          dname: elements.dname.value,
          class: elements.class.value
        },
      })
     }
     catch(e){
      console.error(e)
    
     }
     finally {
      await prisma.$disconnect()
    }
     

    console.log(elements.dname.value, elements.class.value);

    // Erase the form
    elements.dname.value = '';
    elements.class.value = '';
  }

    return(
        <>
           <div class="flex items-center justify-center flex-1">
        <div>
          <h4>Add Department</h4>
          <form class="w-full max-w-lg" onSubmit={handleSubmit}>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="dname"
                >
                Department Name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="dname"
                  type="text"
                  placeholder="A"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="class"
                >
                  Class
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="class"
                  type="text"
                  placeholder="cs-1"
                />
              </div>
          
         
            </div>

            <button className="p-3 bg-green-200 rounded-md">submit</button>
          </form>
        </div>
      </div>
        </>
    )


}


