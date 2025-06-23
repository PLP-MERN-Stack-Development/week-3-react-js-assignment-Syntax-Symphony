const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-12">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 dark:text-gray-300">
          © {new Date().getFullYear()} PLP Task Manager. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer