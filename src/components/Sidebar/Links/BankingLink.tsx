import { BsBank2 } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function BankingLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <BsBank2 size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            Banking
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
