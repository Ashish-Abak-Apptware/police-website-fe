import { InputProps } from "@/Types/Types";
import { Search } from "lucide-react";

export default function Input({type,placeholder}:InputProps) {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
