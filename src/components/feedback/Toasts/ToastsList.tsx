import { useAppSelector } from "@store/hooks";
import ToastItem from "./ToastItem";
import { AnimatePresence, motion } from "motion/react";
const ToastsList = () => {
  const { records } = useAppSelector((state) => state.toasts);
  return (
    <div className="fixed right-3 top-[100px] z-50">
      <AnimatePresence>
        {records.map((record) => (
          <motion.div
          key={record.id}
          initial={{ opacity: 0, translateX: 100 }}
          animate={{ opacity: 1, translateX: 0 }}
          exit={{ opacity: 0, translateX: 100 }}
          >
            <ToastItem {...record} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default ToastsList;
