import { Link } from "react-router-dom";
import { BsSpeedometer } from "react-icons/bs";

import { motion, AnimatePresence } from "framer-motion";

export default function DashBoardLink({ show }: { show: boolean }) {
  return (
    <li>
      <Link to="/">
        <div className="flex gap-3 items-center pl-3.5 py-3 border-l-[3px] border-gray-900 hover:border-l-blue-600 border-b border-b-gray-700">
          <div>
            <BsSpeedometer size={24} />
          </div>
          <AnimatePresence>
            {show && (
              <motion.span
                key={"home"}
                className="overflow-hidden origin-left"
                initial={{ translateX: "-100%" }}
                animate={{ translateX: 0 }}
              >
                Dashboard
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </li>
  );
}
