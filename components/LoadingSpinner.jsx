export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="relative w-12 h-12">
        
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>

        {/* Animated Ring */}
        <div
          className="absolute inset-0 rounded-full border-4 border-blue-600 
          border-t-transparent animate-spin"
        ></div>

      </div>
    </div>
  );
}