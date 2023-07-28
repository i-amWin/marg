import { BsCalculator } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function AccountTransactionLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <BsCalculator size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            Account&nbsp;Transaction
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
