export default ({ tag }) => {
  return (
    <span className="mr-2 my-1  relative inline-flex items-center bg-white rounded-full border border-gray-300 px-3 py-0.5 text-sm">
      <div className="absolute flex-shrink-0 flex items-center justify-center">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-800" aria-hidden="true"></span>
      </div>
      <div className="ml-3.5 font-medium text-gray-900">{tag}</div>
    </span>
  );
};
