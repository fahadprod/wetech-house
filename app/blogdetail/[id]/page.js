'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft } from 'lucide-react';
import { blogListing } from '@/constants/blogData';
import { PageHeader } from '@/components/common/page-header';

export default function BlogDetailsPage({ params }) {
  const blogId = params?.id;
  const blog = blogListing.courses?.find(
    (blog) => blog.id.toString() === blogId
  );

  if (!blog) {
    return notFound();
  }

  return (
   <>
    <PageHeader title="News Details" />
    <div className="container max-w-6xl mx-auto px-4 py-6 pb-32">
     {/* <div className="text-center mt-16 mb-12">
        <span className="text-md font-bold uppercase tracking-wider text-gray-500 block mb-2">
          Latest Insights
        </span>
        <h3 className="text-3xl md:text-5xl font-bold text-[#e92e3e]">Blog Details Section</h3>
      </div> */}

     <div className="mb-12 mt-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#363f46] text-center md:text-left mb-6">
       {blog.title}
      </h1>

      <p className="text-lg mb-6 text-gray-700">{blog.description}</p>

      <div className="border-t border-gray-200 my-6"></div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
       <Button
        variant="default"
        className="px-8 bg-gray-800 hover:bg-red-600 transition-colors"
        asChild
       >
        <Link href="/">
         <ChevronLeft className="mr-2 h-4 w-4" />
         Back to Blogs
        </Link>
       </Button>
      </div>
     </div>

     <RelatedBlogs currentBlogId={blogId} />
    </div>
   </>
  );
}

function RelatedBlogs({ currentBlogId }) {
  const [page, setPage] = useState(1);
  const blogsPerPage = 3;

  const filteredBlogs = blogListing.courses?.filter(
    (blog) => blog.id.toString() !== currentBlogId
  );

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );

  return (
    <div className="mt-16 text-center">
      <div className="text-center mt-16 mb-12">
        {/* <span className="text-md font-bold uppercase tracking-wider text-gray-500 block mb-2">
          Latest Insights
        </span> */}
        <h3 className="text-3xl md:text-5xl font-bold text-[#e92e3e]">Others Latest News</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {paginatedBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <Button
                key={index}
                variant={page === index + 1 ? 'default' : 'outline'}
                className={`${page === index + 1 ? 'bg-red-600 hover:bg-red-700' : 'hover:bg-gray-100'}`}
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function BlogCard({ blog }) {
  return (
    <Card className="border border-gray-200 rounded-lg bg-gray-50 p-6 h-full flex flex-col transition-shadow hover:shadow-lg mx-auto w-full max-w-sm">
      <h3 className="text-xl font-bold text-[#363f46] mb-4 text-center">
        {blog.title}
      </h3>

      <div className="mb-4 flex justify-center">
        <img
          src={blog.image}
          alt="Blog image"
          width="300"
          height="200"
          className="mb-4"
        />
      </div>

      <p className="text-gray-600 mb-6 text-center flex-grow">
        {blog.description.length > 100
          ? `${blog.description.substring(0, 100)}...`
          : blog.description}
      </p>

      <Button
        variant="default"
        className="bg-gray-800 hover:bg-red-600 transition-colors mt-auto"
        asChild
      >
        <Link href={`/blogdetail/${blog.id}`}>
          Read More
        </Link>
      </Button>
    </Card>
  );
}