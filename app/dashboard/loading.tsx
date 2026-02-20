export default function Loading() {
  return (
    <div className="space-y-8 animate-pulse">
      
      {/* Header Skeleton */}
      <div className="space-y-2">
        <div className="h-8 w-48 bg-slate-200 rounded-lg"></div>
        <div className="h-4 w-64 bg-slate-200 rounded-lg"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="h-40 bg-slate-200 rounded-[2rem]"></div>
        <div className="h-40 bg-slate-200 rounded-[2rem]"></div>
        <div className="h-40 bg-slate-200 rounded-[2rem]"></div>
      </div>

      {/* Large Block Skeleton */}
      <div className="h-64 w-full bg-slate-200 rounded-[2rem]"></div>

      {/* List Skeleton */}
      <div className="space-y-4">
          <div className="h-20 w-full bg-slate-200 rounded-2xl"></div>
          <div className="h-20 w-full bg-slate-200 rounded-2xl"></div>
          <div className="h-20 w-full bg-slate-200 rounded-2xl"></div>
      </div>
    </div>
  );
}