"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: number
  onValueChange?: (value: number) => void
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(({ className, value, onValueChange, ...props }, ref) => {
  return (
    <input
      type="range"
      className={cn("w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider", className)}
      value={value}
      onChange={(e) => onValueChange?.(Number(e.target.value))}
      ref={ref}
      {...props}
    />
  )
})
Slider.displayName = "Slider"

export { Slider }
