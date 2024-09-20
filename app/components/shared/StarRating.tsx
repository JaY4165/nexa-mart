"use client";

import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  onChange?: (rating: number) => void;
  initialRating?: number;
}

export default function StarRating({
  onChange,
  initialRating = 0,
}: StarRatingProps = {}) {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
    if (onChange) {
      onChange(newRating);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          className="focus:outline-none"
          onClick={() => handleRatingChange(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          aria-label={`Rate ${star} stars out of 5`}
        >
          <Star
            className={`h-4 w-4 ${
              star <= (hover || rating)
                ? "fill-danger-400 text-danger-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
      <span className="px-2 text-gray-600">(123)</span>
    </div>
  );
}
