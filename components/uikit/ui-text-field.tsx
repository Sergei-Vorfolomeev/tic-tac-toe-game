import * as React from "react";
import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

type PropsType = {
  label?: string;
  required?: boolean;
  helperText?: string;
  errorMessage?: string;
  className?: string;
};

export function UiTextField({
  label,
  required,
  helperText,
  errorMessage,
  className,
  ...inputProps
}: PropsType & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className={className}>
      {label && (
        <label
          htmlFor="text-field"
          className={clsx(
            required && "after:text-orange-600 after:content-['*']",
            "mb-1 block text-sm font-medium text-slate-900 after:ml-0.5"
          )}
        >
          Email
        </label>
      )}

      <input
        type="email"
        id="text-field"
        required={required}
        className={clsx(
          `py-2 text-sm leading-tight outline-0 border
          block w-full rounded-md shadow-sm
          focus:ring-opacity-50 disabled:cursor-not-allowed
          disabled:bg-gray-50 disabled:text-gray-500
          `,
          errorMessage
            ? "focus:border-orange-600 focus:ring focus:ring-orange-600/20 border-orange-600"
            : "focus:border-teal-600 focus:ring focus:ring-teal-600/20 border-slate-200"
        )}
        {...inputProps}
      />
      {(helperText || errorMessage) && (
        <p
          className={clsx(
            "mt-1 text-sm",
            errorMessage ? "text-orange-600" : "text-slate-400"
          )}
        >
          {errorMessage ?? helperText}
        </p>
      )}
    </div>
  );
}
