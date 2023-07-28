export default function LinkContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <li>
      <div className="flex gap-3 items-center pl-3.5 py-3 border-l-[3px] border-gray-900 hover:border-l-blue-600 border-b border-b-gray-700">
        {children}
      </div>
    </li>
  );
}
