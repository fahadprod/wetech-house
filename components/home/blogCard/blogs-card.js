'use client';
import Link from 'next/link';
// import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { blogListing } from '@/constants/blogData';

export default function BlogsCard() {

  return (
   <section className="py-12 md:py-16 bg-white" id="blogPost">
    <div className="container max-w-6xl mx-auto px-4">
     <div className="text-center mb-12">
      <h2
       className="text-3xl text-[#e92e3e] md:text-4xl font-bold mb-4"
       data-aos="fade-down"
      >
       Latest News
      </h2>
     </div>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 px-2">
          {blogListing.courses?.slice(0, 4).map((blog) => {
            // console.log("Single Blog Item:", blog); 
            return (
              <div
                key={blog.id}
                className="border border-gray-200 rounded-xl p-4 bg-gray-50 flex flex-col h-full transition-all duration-300 hover:shadow-lg"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <h3 className="text-lg font-bold text-[#363f46] mb-4 text-center">
                  {blog.title}
                </h3>

                <div className="flex justify-center mb-4">
                  <img
                    src={blog.image}
                    alt="Blog image"
                    width='500'
                    height='500'
                    className="object-cover rounded"
                    loading="lazy"
                  />
                </div>

                <p className="text-gray-600 mb-6 flex-grow text-center">
                  {blog.description.length > 100
                    ? `${blog.description.substring(0, 100)}...`
                    : blog.description}
                </p>

                <Button
                  asChild
                  className="w-full bg-[#363f46] hover:bg-[#e92e3e] text-white transition-colors"
                >
                  <Link href={`/blogdetail/${blog.id}`}>Read More</Link>
                </Button>
              </div>
            )
          })}
     </div>
    </div>
   </section>
  );
}