export const RatingStars = ({ rating, count }) => {
  return (
    <div className="flex items-center space-x-1">
      {Array(5)
        .fill(0)
        .map((_, i) => {
          const fill = Math.max(0, Math.min(1, rating - i)); // between 0 and 1

          return (
            <div>
              <div key={i} className="relative w-6 h-6">
                {/* Background (empty) star */}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-6 h-6 text-gray-300"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    fill="currentColor"
                  />
                </svg>

                {/* Foreground (filled) star — clipped */}
                <div
                  className="absolute top-0 left-0 h-full overflow-hidden"
                  style={{ width: `${fill * 100}%` }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
              
            </div>
          );
        })}
        <div className="text-base text-gray-700">({count})</div>
    </div>
  );
};
