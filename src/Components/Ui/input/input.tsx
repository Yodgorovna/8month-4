import React, { FC } from "react";
import clsx from "clsx";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "primary" | "secondary";
  color?: "info" | "danger" | "warning" | "success" | string;
  textColor?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  placeholder?: string;
}

const inputColors: Record<string, string> = {
  info: "#1e66f5",
  danger: "#d20f39",
  warning: "#df8e1d",
  success: "#40a02b",
};

export const Input: FC<InputProps> = ({
  color = "#007bff",
  textColor = "#000000",
  variant = "primary",
  loading = false,
  icon,
  iconPosition = "left",
  style,
  className,
  ...inputProps
}) => {
  const effectiveColor = inputColors[color] || color;

  const variantStyles = (() => {
    switch (variant) {
      case "primary":
        return "border border-gray-300 focus:border-blue-600 focus:ring-blue-600";
      case "secondary":
        return "border border-gray-300 bg-transparent focus:border-blue-600 focus:ring-blue-600";
      default:
        return "";
    }
  })();

  const baseStyles = "flex items-center px-4 py-2 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2";

  const loadingStyles = loading ? "opacity-70 cursor-not-allowed" : "";

  const combinedClasses = clsx(
    baseStyles,
    variantStyles,
    loadingStyles,
    className
  );

  const inlineStyles = {
    backgroundColor: variant === "secondary" ? "transparent" : "#fff",
    color: textColor,
    borderColor: effectiveColor,
    ...style,
  };

  return (
    <div className={combinedClasses} style={inlineStyles}>
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      <input
        type="text"
        {...inputProps}
        className="flex-1 bg-transparent border-none outline-none"
        disabled={loading}
        placeholder={loading ? "Loading..." : inputProps.placeholder}
      />
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </div>
  );
};
