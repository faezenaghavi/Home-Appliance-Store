export default function Loading() {
  return (
    <div className="min-h-[40vh] flex items-center justify-center bg-[#faf8f5]">
      <div
        className="w-7 h-7 rounded-full border-2 border-[#808080]/30 border-t-[#808080] animate-spin"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}
