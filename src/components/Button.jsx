const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-4 py-2 rounded font-medium transition-colors";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white",
    secondary: "bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100",
    danger: "bg-red-600 hover:bg-red-700 text-white"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;