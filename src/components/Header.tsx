import { CheckSquare } from 'lucide-react';

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-2">
        <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
          <CheckSquare className="w-7 h-7 text-white" />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 tracking-tight">My Tasks</h1>
      </div>
      <p className="text-gray-500 text-sm mt-1">Stay organised, get things done</p>
    </div>
  );
}
