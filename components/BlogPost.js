import FormattedDate from "@/components/FormattedDate";
import { useConfig } from "@/lib/config";
import Link from "next/link";

const BlogPost = ({ post }) => {
  const BLOG = useConfig();
  
  // Check if this is an external link post
  const isExternalLink = post?.type?.[0] === 'Link' && post.url;
  
  const articleContent = (
    <article key={post.id} className="mb-6 md:mb-8">
      <header className="flex flex-col justify-between md:flex-row md:items-baseline">
        <h2 className="text-lg md:text-xl font-medium mb-2 cursor-pointer text-black dark:text-gray-100">
          {post.title}
        </h2>
        <time className="flex-shrink-0 text-gray-600 dark:text-gray-400">
          <FormattedDate date={post.date} />
        </time>
      </header>
      <main>
        <p className="hidden md:block leading-8 text-gray-700 dark:text-gray-300">
          {post.summary}
        </p>
      </main>
    </article>
  );
  
  if (isExternalLink) {
    return (
      <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
        {articleContent}
      </a>
    );
  }
  
  return (
    <Link href={`${BLOG.path}/${post.slug}`}>
      {articleContent}
    </Link>
  );
};

export default BlogPost;
