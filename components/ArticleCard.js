import { useContext } from 'react';
import LoadingContext from 'contexts/loading';
import Image from 'next/image';
import Link from 'next/link';

export default ({ article }) => {
  const { setLoad } = useContext(LoadingContext.store);

  let localDate = new Date(article.createdAt).toLocaleDateString();

  if (localDate.substr(0, 2).includes('.')) {
    localDate = '0' + localDate;
  }

  return (
    <li className="flex justify-center w-full px-4 py-6 md:w-1/2 lg:w-1/3">
      <Link href={`/articles/${article.slug}`}>
        <a onClick={() => setLoad(true)}>
          <div className="transition-all duration-500 max-w-md flex flex-col items-stretch min-h-full pb-4 mb-6  bg-white rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105">
            <div className="md:flex-shrink-0">
              <Image
                src={article.cover}
                width="490"
                height="225"
                alt="Blog Cover"
                className="object-fill w-full rounded-lg rounded-b-none md:h-56"
              />
            </div>
            <div className="px-4 py-2 overflow-hidden">
              <div className="flex justify-center">
                {article.tags.map(
                  (tag, index) =>
                    index < 3 && (
                      <span
                        key={tag}
                        className={`${
                          index !== 0 && 'ml-2'
                        } text-xs font-medium text-blue-600 uppercase`}>
                        {tag}
                      </span>
                    )
                )}
              </div>
              <div className="text-center text-xs font-medium text-gray-500 mt-1">{localDate}</div>
            </div>
            <hr className="border-gray-300" />
            <div className="flex flex-wrap items-center flex-1 px-4 py-1 text-center mx-auto sm:max-h-12 ">
              <h2 className="text-1xl font-bold tracking-normal text-gray-800">{article.title}</h2>
            </div>
            <hr className="border-gray-300" />
            <p className="flex flex-row flex-wrap w-full px-4 py-2 overflow-hidden text-sm text-justify text-gray-700">
              {article.description}
            </p>
          </div>
        </a>
      </Link>
    </li>
  );
};
