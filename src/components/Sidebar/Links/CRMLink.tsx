import { FaRegHandshake } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function CRMLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <FaRegHandshake size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            CRM
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
