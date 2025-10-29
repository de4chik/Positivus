import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "py-[18px] px-[30px] border border-black rounded-[14px] bg-white block",
        className
      )}
      {...props}
    />
  )
}

export { Input }
