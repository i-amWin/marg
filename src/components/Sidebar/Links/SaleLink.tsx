import { BiShoppingBag } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import LinkContainer from "../LinkContainer";

export default function SaleLink({ show }: { show: boolean }) {
  return (
    <LinkContainer>
      <div>
        <BiShoppingBag size={24} />
      </div>
      <AnimatePresence>
        {show && (
          <motion.span
            key={"home"}
            className="overflow-hidden origin-left"
            initial={{ translateX: "-100%" }}
            animate={{ translateX: 0 }}
          >
            Sale
          </motion.span>
        )}
      </AnimatePresence>
    </LinkContainer>
  );
}
