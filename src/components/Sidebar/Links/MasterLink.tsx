// import { Link } from "react-router-dom";

import { BiBook } from "react-icons/bi";

import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function MasterLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <BiBook size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            Master
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
