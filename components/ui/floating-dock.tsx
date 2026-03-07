import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  variant = "green",
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  variant?: "green" | "white";
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} variant={variant} />
    </>
  );
};




const FloatingDockDesktop = ({
  items,
  className,
  variant,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  variant: "green" | "white";
}) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto  items-end gap-4 rounded-2xl  px-4 pb-3 flex dark:bg-neutral-100",
        className,
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} variant={variant}  {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  variant,
}: { 
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  variant: "green" | "white";
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

let baseSize = variant === "white" ? 120 : 40;     // tamaño normal
let hoverSize = variant === "white" ? 160 : 80;

  let widthTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [baseSize, hoverSize, baseSize]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [baseSize*0.5, hoverSize*0.5, baseSize*0.5]);
  let heightTransformIcon = useTransform(distance,[-150, 0, 150],[baseSize*0.5, hoverSize*0.5, baseSize*0.5],);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <a href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
  "relative flex aspect-square items-center justify-center rounded-full",
  variant === "green" && "bg-teal-600/10 text-teal-600",
  variant === "white" && "bg-white text-neutral-700"
)}

      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-teal-600 px-2 py-0.5 text-xs whitespace-pre text-white dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </a>
  );
}