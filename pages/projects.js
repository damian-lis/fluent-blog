import Layout from 'containers/Layout';
import Head from 'next/head';
import { getAllProjects } from 'services/projects';
import { ProjectCard, ProjectTag } from 'components';

export const getStaticProps = () => {
  const projects = getAllProjects();

  return {
    props: { projects }
  };
};

export default function Projects({ projects }) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <Layout>
        <div>
          <h1 className="text-center text-3xl mb-10 mt-10">MY PROJECTS</h1>
          <ul className="mb-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} TagComponent={ProjectTag} />
            ))}
          </ul>
        </div>
      </Layout>
    </>
  );
}
