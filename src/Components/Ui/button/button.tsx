import React, { FC } from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "link";
  color?: "info" | "danger" | "warning" | "success" | string;
  textColor?: string;
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const btnColors: Record<string, string> = {
  info: "#1e66f5",
  danger: "#d20f39",
  warning: "#df8e1d",
  success: "#40a02b",
};

export const Button: FC<ButtonProps> = ({
  children,
  color = "#007bff",
  textColor = "#FFFFFF",
  variant = "primary",
  loading = false,
  icon,
  iconPosition = "left",
  style,
  type = "button",
  className,
  ...buttonProps
}) => {
  const effectiveColor = btnColors[color] || color;

  const variantStyles = (() => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-500 text-white rounded-lg shadow-lg";
      case "secondary":
        return "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg";
      case "link":
        return "text-blue-600 underline hover:text-blue-500";
      default:
        return "";
    }
  })();

  const baseStyles =
    " flex items-center justify-center px-5 py-3.5 font-semibold transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2";

  const loadingStyles = loading
    ? "opacity-70 cursor-not-allowed"
    : "cursor-pointer";

  const combinedClasses = clsx(
    baseStyles,
    variantStyles,
    loadingStyles,
    className
  );

  const inlineStyles = {
    padding: "5px 50px",
    fontSize: "14px",
    backgroundColor: variant === "link" ? "transparent" : effectiveColor,
    color: variant === "link" ? effectiveColor : textColor,
    borderColor: variant === "secondary" ? effectiveColor : undefined,
    ...style,
  };

  const spinner = (
    <svg
      className="animate-spin h-5 w-5 text-current"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );

  return (
    <button
      type={type}
      {...buttonProps}
      className={combinedClasses}
      style={inlineStyles}
      disabled={loading}
      aria-busy={loading}
    >
      {icon && iconPosition === "left" && <span className="mr-2">{icon}</span>}
      {loading ? spinner : children}
      {icon && iconPosition === "right" && <span className="ml-2">{icon}</span>}
    </button>
  );
};
