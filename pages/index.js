import Layout from 'components/Layout';
import Head from 'next/head';
import { getList } from 'lib/markdownParser';

export const getStaticProps = () => {
  const projects = getList('_projects');

  return {
    props: { projects }
  };
};

export default function Home({ projects }) {
  console.log(projects);
  return (
    <Layout>
      <Head>
        <title>Blog - recent posts </title>
      </Head>
      <p>Tutaj będzie treść</p>
    </Layout>
  );
}
