
import { Flag } from "lucide-react"; // Using Lucide React for a flag icon

interface FlagComponentProps {
  flagged: boolean;
}

export default function FlagComponent({ flagged }: FlagComponentProps) {
  return (
    <div>
      {flagged ? (
        <Flag className="w-5 h-5 text-red-500" />
      ) : (
        <Flag className="w-5 h-5 text-gray-400 opacity-50" />
      )}
    </div>
  );
}
