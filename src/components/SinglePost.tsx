import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

interface BlogItem {
    id: number;
    title: string;
    photo_url: string,
    description: string,
    category: string,
    content_html:string
  }
function SinglePost({photo_url,id,title,description,category,content_html	 }:BlogItem) {
  return (
      
    
      <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto ">
             <Link href={"/blogs"}>All Blogs</Link>
      
              <div className="mt-8 lg:-mx-6 lg:flex lg:items-center mb-8">
                  <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={photo_url}alt=""/>
      
                  <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                      <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center uppercase">{ category}</p>
      
                      <p  className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                          {title}
                      </p>
      
                      <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                         {description}
                      </p>
      

      
                  </div>
              </div>
              <h2 className="text-3xl border-l-slate-950 font-bold mb-6">About Post:</h2>
             
              <div className="about-post" dangerouslySetInnerHTML={{ __html:content_html}}>
              </div>
          </div>
      </section>
  )
}

export default SinglePost;
