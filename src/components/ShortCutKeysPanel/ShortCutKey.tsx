interface IShortCutKeyProps {
  action: string;
  shortcutKey: string;
}

export default function ShortCutKey({
  action,
  shortcutKey,
}: IShortCutKeyProps) {
  return (
    <div className="flex flex-col border items-center border-gray-300">
      <span className="px-8 bg-blue-100 uppercase text-sm font-semibold py-1 w-full text-center">
        {action}
      </span>
      <span className="text-blue-600 text-sm font-semibold">{shortcutKey}</span>
    </div>
  );
}
