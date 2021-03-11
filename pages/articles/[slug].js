import { useContext, useEffect } from 'react';
import Layout from 'containers/Layout';
import Head from 'next/head';
import Image from 'next/image';
import { getArticle, getListOfArticles } from 'services/articles';
import LoadingContext from 'contexts/loading';

export const getStaticPaths = async () => {
  const articles = getListOfArticles('_articles');

  return {
    paths: articles.map((art) => ({ params: { slug: art.slug } })),
    fallback: false
  };
};

export const getStaticProps = async (req) => {
  const { slug } = req.params;
  const article = await getArticle(slug);

  return {
    props: { article }
  };
};

export default function Article({ article }) {
  const { setLoad } = useContext(LoadingContext.store);

  useEffect(() => {
    setLoad(false);
  }, [setLoad]);

  return (
    <Layout>
      <Head>
        <title>{article.title}</title>
        <link href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css" rel="stylesheet" />
      </Head>
      <div className="flex flex-col ">
        <div className=" mx-auto mt-10">
          <Image
            src={article.cover}
            width="490"
            height="225"
            alt="Blog Cover"
            className="rounded rounded-lg  "
          />
        </div>

        <h1 className="text-center text-3xl mb-5 mt-10">{article.title}</h1>
        <div
          className="max-w-3xl w-full mx-auto articleBody text-justify "
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </div>
    </Layout>
  );
}
