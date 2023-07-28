import { BsKeyboard } from "react-icons/bs";
import ShortCutKey from "./ShortCutKey";

const keys = [
  {
    action: "sale bill",
    shortcutKey: "Alt + N",
  },
  {
    action: "sale bill list",
    shortcutKey: "Alt + M",
  },
  {
    action: "purchase bill",
    shortcutKey: "Alt + P",
  },
  {
    action: "item list",
    shortcutKey: "Alt + I",
  },
  {
    action: "ledger list",
    shortcutKey: "Alt + L",
  },
  {
    action: "party wise outstanding",
    shortcutKey: "Alt + O",
  },
  {
    action: "re-order",
    shortcutKey: "Ctrl + F1",
  },
  {
    action: "receipt",
    shortcutKey: "Alt + R",
  },
  {
    action: "payment",
    shortcutKey: "Ctrl + F2",
  },
  {
    action: "cash a/c and bank a/c",
    shortcutKey: "Alt + B",
  },
  {
    action: "sale bill challan",
    shortcutKey: "Alt + C",
  },
  {
    action: "stock issue",
    shortcutKey: "Alt + K",
  },
  {
    action: "stock receive",
    shortcutKey: "Alt + U",
  },
  {
    action: "breakage/exp receive",
    shortcutKey: "Alt + X",
  },
  {
    action: "counter sale",
    shortcutKey: "Alt + A",
  },
  {
    action: "home/dashboard",
    shortcutKey: "Alt + H",
  },
  {
    action: "settings",
    shortcutKey: "Ctrl + I",
  },
  {
    action: "calculator",
    shortcutKey: "Alt + F12",
  },
];

export default function ShortcutKeysPanel() {
  return (
    <div className="text-black">
      <h2 className="flex gap-2 items-center justify-center py-2 border-b border-gray-300 font-semibold">
        <BsKeyboard size={27} />
        <span>Shortcut Keys</span>
      </h2>
      <div className="flex flex-col gap-2 p-2">
        {keys.map((key) => (
          <ShortCutKey key={key.action} {...key} />
        ))}
      </div>
    </div>
  );
}
