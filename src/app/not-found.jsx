export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-7xl font-extrabold text-red-500">404</h1>
      <h2 className="text-3xl font-bold mt-4 text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 mt-2 max-w-md">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <a
        href="/"
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
