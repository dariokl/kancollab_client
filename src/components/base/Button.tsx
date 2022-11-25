import React from "react";

type TButton = "submit" | "reset" | "button";

interface IButton {
  text: string;
  type: TButton;
  disabled?: boolean;
  twind?: string;
  loading?: boolean;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  twind,
  type,
  text,
  loading,
  disabled,
  ...props
}): JSX.Element => {
  return (
    <button
      disabled={disabled}
      className={`bg-blue-600 flex justify-center items-center py-1 text-white hover:opacity-90 rounded-lg ${twind} ${
        disabled ? "opacity-70 hover:opacity-70" : ""
      }`}
      type={type}
      onClick={() => props.onClick?.()}
    >
      {loading && (
        <div
          className="animate-spin w-4 h-4 border-[1px] border-current border-t-transparent text-pale-100 rounded-full mr-2"
          role="status"
          aria-label="loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {text}
    </button>
  );
};

export default Button;
