import React from 'react'
import Image from 'next/image'
interface BlogItem {
    id: number;
    title: string;
    photo_url: string,
    description: string,
    category:string
  }
function Card({photo_url,id,title,description,category	 }:BlogItem ) {
  return (
    <div>
      
    <div className="relative flex max-w-[24rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
          <a href={`blogs/${id}`}>
          <img
      src={photo_url}
      alt="ui/ux review check"
    />
          </a>
  
  </div>
  <div className="p-6">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      {title}
    </h4>
    <p className="mt-3 block font-sans text-xl font-normal leading-relaxed text-gray-700 antialiased">
     {description}
    </p>
  </div>
  <div className="flex items-center justify-between p-6">
   
  <div className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                {category}
            </div>
  </div>
</div>


    </div>
  )
}

export default Card
