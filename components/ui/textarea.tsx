import * as React from "react"

import { cn } from "@/lib/utils"

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "py-[18px] px-[30px] border border-black rounded-[14px] bg-white block",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
