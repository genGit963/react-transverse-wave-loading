import * as React from "react";
import "./button.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "default" | "destructive" | "link" | "outline" | "subtle" | "ghost";
  size: "default" | "sm" | "xs" | "lg";
}

export const HeroButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      children,
      variant = "default",
      size = "default",
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`hero_btn hero_btn_${variant} hero_btn_${size} ${className}`}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
