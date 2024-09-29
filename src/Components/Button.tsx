

export function Button({ type = "button", className, childern, ...rest }: { className: string, type?: "button" | "submit" | "reset",childern:string }) {
  return (

    <button
      type={type}
      className={className}
      {...rest}
    >
      {childern}

    </button>

  );
}