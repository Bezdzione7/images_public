export default function PreviewArea() {
  return (
    <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-10">
      <div className="w-full h-full rounded-[15px] sm:rounded-[20px] bg-preview-bg flex items-center justify-center border border-gray-300">
        <h1 className="text-black text-2xl sm:text-3xl lg:text-4xl font-semibold">
          GAME PREVIEW
        </h1>
      </div>
    </div>
  );
}
