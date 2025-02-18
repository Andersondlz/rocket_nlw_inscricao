import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {}

export function Input (props: InputProps) {
    return <input {...props} 
    className="bg-gray-900 rounded-lg px-3 py-2 text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue focus:ring-offset-2 focus:ring-offset-gray-900" />
}