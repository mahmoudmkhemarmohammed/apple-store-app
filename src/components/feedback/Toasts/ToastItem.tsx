import { CgClose } from "react-icons/cg";
import { GiConfirmed } from "react-icons/gi";
import { MdDangerous } from "react-icons/md";
import { FcInfo } from "react-icons/fc";
import { CiWarning } from "react-icons/ci";
import { TToast } from "@types";
import { useAppDispatch } from "@store/hooks";
import { removeToast } from "@store/toasts/toastsSlice";
import { useCallback, useEffect, useState } from "react";

type TIcons = {
  success: JSX.Element;
  info: JSX.Element;
  danger: JSX.Element;
  warning: JSX.Element;
};

// type to icon
const icons: TIcons = {
  success: <GiConfirmed className="text-5xl text-[#79ff25]" />,
  info: <FcInfo className="text-5xl text-[#25e6ff]" />,
  danger: <MdDangerous className="text-5xl text-[#ff2571]" />,
  warning: <CiWarning className="text-5xl text-[#ff2571]" />,
};

const ToastItem = ({ id, title, message, type }: TToast) => {
  const dispatch = useAppDispatch();
  const [pauseProgressBar, setPauseProgressBar] = useState(false);
  const [progressBarWidth, setProgressBarWidth] = useState(0);
  const bgType =
    type === "success"
      ? "bg-green-100"
      : type === "danger"
      ? "bg-red-100"
      : type === "warning"
      ? "bg-yellow-100"
      : "bg-blue-100";

  const icon = icons[type];

  const progressBarScale = 100;
  const duration = 4000;
  const interval = duration / progressBarScale;

  const pauseProgressBarHandler = () => {
    setPauseProgressBar(!pauseProgressBar);
  };

  // progress bar calculation
  useEffect(() => {
    const timer = setInterval(() => {
      setProgressBarWidth((prev) => {
        if (prev < progressBarScale && !pauseProgressBar) {
          return prev + 1;
        }
        return prev;
      });
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [interval, pauseProgressBar]);

  // Remove Toast when the progress bar width = 100%
  const closeToastHandler = useCallback(() => {
    dispatch(removeToast(id));
  }, [dispatch, id]);
  useEffect(() => {
    if (progressBarWidth == progressBarScale) {
      closeToastHandler();
    }
  }, [closeToastHandler, progressBarWidth]);


  
  return (
    <div
      onMouseEnter={pauseProgressBarHandler}
      onMouseLeave={pauseProgressBarHandler}
      className={`w-[400px] ${bgType} mb-3 p-5 rounded-md relative shadow flex gap-6 items-center overflow-hidden max-sm:w-full`}
    >
      {icon}
      <div>
        <h5 className=" capitalize text-[18px] mb-1">{title ? title : type}</h5>
        <p className=" capitalize text-[15px]">{message}</p>
        <CgClose
          className="absolute right-3 top-4 cursor-pointer"
          onClick={closeToastHandler}
        />
      </div>
      <div className=" absolute bottom-0 left-0 bg-slate-400 w-full h-[3px] z-50">
        <span
          className={`h-full ${bgType} block`}
          style={{
            width: `${progressBarWidth}%`,
            transition: `width ${interval}ms liner`,
          }}
        ></span>
      </div>
    </div>
  );
};

export default ToastItem;
