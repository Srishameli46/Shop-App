

export function Button({ type = "button", className, ...rest }: { className: string, type?: "button" | "submit" | "reset" }) {
  return (

    <button
      type={type}
      className={`bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-white dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${className}`}
      {...rest}
    >

    </button>

  );
}