import { VscPieChart } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function StockManagementLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <VscPieChart size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            Stock&nbsp;Management
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
