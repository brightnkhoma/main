"use client"
import { Dot } from "lucide-react";
import Image from "next/image";

interface SubsiduryProps {
  name: string;
  description: string;
  image?: string;
}

export const AppSubsidury = ({ s }: { s: SubsiduryProps }) => {
  const { description, name, image } = s;

  return (
    <div className="flex items-start gap-4 p-4 border rounded-lg hover:bg-gray-50 transition-colors">
      <div className="flex items-center min-w-[200px]">
        <Dot className="w-5 h-5 text-blue-500" />
        <span className="font-medium text-gray-900">
          {name}
        </span>
      </div>
      
      <div className="flex-1 flex items-start gap-3">
        {image && (
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover rounded-md"
            />
          </div>
        )}
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};