"use client";
import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, publishedAt, author, metadata } = blog;

  return (
    <Link href="#" className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-blacksection">
      <div className="relative overflow-hidden aspect-[16/9]">
        {mainImage && (
          <Image
            src={mainImage.src || mainImage} // Handles both object and string paths
            alt={title}
            fill
            className="w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="p-6">
        <div className="mb-4 flex items-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
          {author?.name && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{author.name}</span>
            </div>
          )}
          {publishedAt && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <time dateTime={publishedAt}>{new Date(publishedAt).toLocaleDateString()}</time>
            </div>
          )}
        </div>
        <h3 className="text-xl font-semibold leading-snug text-gray-900 transition-colors group-hover:text-primary dark:text-white">
          {title}
        </h3>
        {metadata && (
          <p className="mt-2 line-clamp-3 text-gray-600 dark:text-gray-300">
            {metadata}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogItem;