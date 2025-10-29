import { cn } from "@/lib/utils";

interface IPropsContainer {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: IPropsContainer) => {
  return (
    <div className={cn("max-w-7xl px-5 w-full mx-auto", className)}>{children}</div>
  );
};
