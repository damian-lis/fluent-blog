export default function ProjectCard({ project, TagComponent }) {
  let localDate = new Date(project.createdAt).toLocaleDateString();

  if (localDate.substr(0, 2).includes('.')) {
    localDate = '0' + localDate;
  }

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
              <span className="whitespace-nowrap text-sm">{localDate}</span>
            </div>
            <div className="mt-2 text-gray-700">
              <p>{project.description}</p>
            </div>
            <div>
              {project.apps ? (
                <>
                  {project.apps.map((app, index) => (
                    <>
                      <h2 className="text-l font-medium text-gray-900 mr-2 mt-7">
                        {index + 1}. {app.title}
                      </h2>
                      {app.github && (
                        <a
                          target="blank"
                          rel="noopener noreferrer nofollow"
                          className="text-sm mb-3 mt-3  text-blue-800 w-max  block bg-gray-100 py-1 px-2 rounded-md hover:underline"
                          href={app.github}>
                          {' '}
                          <i className="fab fa-github"></i> Check repository
                        </a>
                      )}
                      {app.website && (
                        <a
                          target="blank"
                          rel="noopener noreferrer nofollow"
                          className="text-sm mb-5 text-blue-800 w-max block bg-gray-100 py-1 px-2 rounded-md hover:underline"
                          href={app.website}>
                          {' '}
                          <i className="fas fa-at"></i> Check website
                        </a>
                      )}
                      {TagComponent && app.tags && (
                        <div>
                          {app.tags.map((tag, tagId) => (
                            <TagComponent key={tagId} tag={tag} />
                          ))}
                        </div>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <div>
                  {project.github && (
                    <a
                      target="blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm mb-3 mt-5  text-blue-800 w-max  block bg-gray-100 py-1 px-2 rounded-md hover:underline"
                      href={project.github}>
                      {' '}
                      <i className="fab fa-github"></i> Check repository
                    </a>
                  )}
                  {project.website && (
                    <a
                      target="blank"
                      rel="noopener noreferrer nofollow"
                      className="text-sm mb-5 text-blue-800 w-max block bg-gray-100 py-1 px-2 rounded-md hover:underline"
                      href={project.website}>
                      {' '}
                      <i className="fas fa-at"></i> Check website
                    </a>
                  )}
                  {TagComponent && (
                    <div>
                      {project.tags.map((tag, tagId) => (
                        <TagComponent key={tagId} tag={tag} />
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
