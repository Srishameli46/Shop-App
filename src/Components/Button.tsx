
interface ButtonProps {
  type?: "button" | "submit" | "reset"; // Optional button types
  className: string; // Class names for styling
  children: React.ReactNode; // React children for button content
  onClick?: () => void; // Optional onClick handler
}

export function Button({ type = "button", className, children, ...rest }:ButtonProps){
return(
    <button
      type={type}
      className={className}
      {...rest}
    >
      {children}

    </button>

  );
}