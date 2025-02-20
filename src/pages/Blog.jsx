import BlogCard from "@/components/BlogCard";
import { blogData } from "@/lib/db";

const Blog = () => {
  return (
    <div className="pt-28 bg-[#0f1629] text-white min-h-screen">
      <div className="mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogData?.map((post) => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
