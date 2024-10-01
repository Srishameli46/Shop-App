
interface ButtonProps {
  type?: "button" | "submit" | "reset"; 
  className: string; 
  children: React.ReactNode; 
  onClick?: () => void; 
}

export function Button({ type , className, children, ...rest }:ButtonProps){
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