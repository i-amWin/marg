import { BiSolidReport } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

export default function ReportLink({ show }: { show: boolean }) {
  return (
    <li>
      <div className="flex gap-3 items-center pl-3.5 py-3 border-l-[3px] border-gray-900 hover:border-l-blue-600 border-b border-b-gray-700">
        <div>
          <BiSolidReport size={24} />
        </div>
        <AnimatePresence>
          {show && (
            <motion.span
              key={"home"}
              className="overflow-hidden origin-left"
              initial={{ translateX: "-100%" }}
              animate={{ translateX: 0 }}
            >
              Report
            </motion.span>
          )}
        </AnimatePresence>
      </div>
    </li>
  );
}
