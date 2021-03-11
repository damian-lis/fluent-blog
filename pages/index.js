import Layout from 'containers/Layout';
import Head from 'next/head';
import { ArticleCard } from 'components';
import { getListOfArticles } from 'services/articles';

export const getStaticProps = () => {
  const articles = getListOfArticles('_articles');

  return {
    props: { articles }
  };
};

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>Blog - recent posts</title>
      </Head>
      <Layout>
        <section>
          <ul className="flex flex-row flex-wrap mx-auto">
            {articles.map((article) => (
              <ArticleCard key={article.title} article={article} />
            ))}
          </ul>
        </section>
      </Layout>
    </>
  );
}
