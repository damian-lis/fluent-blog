export default ({ project, TagComponent }) => {
  return (
    <li
      className="relative flex flex-col min-w-0 break-words max-w-4xl m-auto mb-6 shadow-xl rounded-lg mt-10 p-5 border  border-gray-300"
      key={project.slug}>
      <div className="relative border-yellow-900">
        <div className="relative flex items-start space-x-3">
          <div className="min-w-0 flex-1 py-0">
            <div className="text-md text-gray-500">
              <div>
                <h2 className="text-xl font-medium text-gray-900 mr-2 ">{project.title}</h2>
              </div>
              <span className="whitespace-nowrap text-sm">{project.date}</span>
            </div>
            <div className="mt-2 text-gray-700">
              <p>{project.description}</p>
            </div>
            {project.link && (
              <>
                <a
                  target="blank"
                  className="text-sm my-5 text-blue-800  inline-block bg-gray-100 py-1 px-2 rounded-md hover:underline"
                  href={project.link}>
                  {' '}
                  <i className="fab fa-github "></i> Check repository
                </a>
              </>
            )}
            {TagComponent && (
              <div>
                {project.tags.map((tag, tagId) => (
                  <TagComponent key={tagId} tag={tag} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </li>
  );
};
