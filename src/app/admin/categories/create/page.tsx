import React from 'react'

const page = () => {
  return (
    <main>
    <div className=" py-16 flex justify-center">
 <p className="text-center">
   Add New Category
 </p>

 </div>
   <form action="" className='max-w-[500px] relative left-1/2 -translate-x-1/2'>
       <div className="flex flex-col gap-2 mb-6">
           <label htmlFor="name">Category name</label>
           <input type="text" name="name" id="name" className='border-[1px] p-2 border-gray-400 rounded-lg outline-none focus:border-primary'/>
       </div>

       <button className="bg-primary text-white p-2 px-4 text-sm rounded-lg relative left-1/2 -translate-x-1/2">
           Add Category
       </button>
   </form>
</main>
  )
}

export default page