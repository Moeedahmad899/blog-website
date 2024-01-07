import Image from 'next/image';
import Card from '@/components/Card';
import Link from 'next/link';
const fetchData = async () => {
  try {
    const response = await fetch('https://api.slingacademy.com/v1/sample-data/blog-posts/?limit=10');

    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    
   
     
    // Now you can use the data in your component state or directly in your component JSX
    return data; // Return the data for later use
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};


const blogData = await fetchData();

interface BlogItem {
  id: number;
  title: string;
  photo_url: string,
  description: string,
  category: string,
  created_at:string,
}





export default function Home() {
 
 
  return (
    <div>
  
 <h1 className="pt-12 text-7xl text-center font-semibold text-gray-900 capitalize  dark:text-white">Recent Blogs</h1>
 <div className='flex  flex-wrap gap-10 p-14 mx-auto'>   
     
      { 
        blogData.blogs.map((item: BlogItem) => {

       
         return  <Card photo_url={item.photo_url}
            id={item.id}
           title={item.title}
           description={item.description}
           category = {item.category}
          />
        })
        }
</div>
    </div>
   
  );
}
