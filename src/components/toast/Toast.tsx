import { useEffect } from "react";
import css from "./Toast.module.css";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number; // in ms
  onClose?: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type = "info", duration = 3000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose?.();
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={`${css.toast} ${css[type]}`}>
      <span>{message}</span>
      {onClose && (
        <button className={css.closeBtn} onClick={onClose}>
          ✖
        </button>
      )}
    </div>
  );
};

export default Toast;