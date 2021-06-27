import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import PageContent from '../PageContent';
import info from "../../metaconf/info.json"
import Comments from './Comments';
export default function BlogLayout({ children, frontMatter }){
  return (<>
    <PageContent
      title={`${frontMatter.title} – ${info.yourname}`}
      description={frontMatter.summary}
      image={`${info.host}${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
          <div className="flex items-center">
            <Image
              alt={info.yourname}
              height={24}
              width={24}
              src="/img/logo.svg"
              className="rounded-full"
            />
            <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
              {frontMatter.by}
              {`${info.yourname} / `}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="mt-2 text-sm text-gray-500 min-w-32 md:mt-0">
            {frontMatter.readingTime.text}
          </p>
        </div>
        <div className="w-full prose dark:prose-dark max-w-none">
          {children}
        </div>
        <hr/>
        <div className="flex min-w-full min-h-full">
        </div>
      </article>
    </PageContent>
    <Comments issueMap='issue-term' issueTerm='pathname' repo={info.repo} theme='github-light' label={info.label} />
    </>
  );
}
