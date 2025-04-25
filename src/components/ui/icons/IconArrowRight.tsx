import { cn } from "@/lib/utils";

export default function IconArrowRight({
  className,
  ...props
}: React.ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-2.5 w-[5px]", className)}
      {...props}
    >
      <path
        d="M1.322 1l5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}
