import React from 'react'
import SinglePost from '@/components/SinglePost';
export  default async function Page({ params }: { params: { id: string } }) {
    const response = await fetch(`https://api.slingacademy.com/v1/sample-data/blog-posts/${params.id}`);
    const data = await response.json();
    const blogArray = [data.blog];

  
    return <div>
        
        {
blogArray.map(item => {
    return (
       
        <SinglePost photo_url={item.photo_url}
            id={item.id}
           title={item.title}
           description={item.description}
            category={item.category}
            content_html = {item.content_html}
        ></SinglePost>
    )
})
           
        }
       
    </div>
  }
