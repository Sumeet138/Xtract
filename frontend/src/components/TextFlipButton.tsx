import React from "react"
import { cn } from "@/lib/utils"

interface TextFlipButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    hoverChildren?: React.ReactNode
    direction?: "vertical" | "horizontal"
    variant?: "default" | "primary" | "outline"
    className?: string
}

const variantStyles = {
    default: "border border-white/10 bg-transparent hover:bg-white/5 rounded-[6px]",
    primary: "bg-[rgb(129,74,200)] hover:bg-[rgb(110,60,180)] border border-white/10 rounded-[6px] shadow-[0_0.706592px_0.706592px_-0.625px_rgba(0,0,0,0.15),0_1.80656px_1.80656px_-1.25px_rgba(0,0,0,0.145),0_3.62176px_3.62176px_-1.875px_rgba(0,0,0,0.137),0_6.8656px_6.8656px_-2.5px_rgba(0,0,0,0.125),0_13.6468px_13.6468px_-3.125px_rgba(0,0,0,0.106),0_30px_30px_-3.75px_rgba(0,0,0,0.05)]",
    outline: "border border-white/10 bg-transparent hover:bg-white/5 rounded-[6px] shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_0_1px_rgba(255,255,255,0.2),0_0_20px_rgba(255,255,255,0.1)]"
}

export function TextFlipButton({
    children,
    hoverChildren,
    direction = "vertical",
    variant = "default",
    className,
    ...props
}: TextFlipButtonProps) {
    return (
        <button
            className={cn(
                "group relative overflow-hidden px-4 py-2 font-medium text-white transition-all duration-300",
                variantStyles[variant],
                className
            )}
            {...props}
        >
            <div className={cn("relative flex items-center justify-center overflow-hidden")}>
                {/* Default Content */}
                <div
                    className={cn(
                        "flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-[200ms] group-hover:delay-0",
                        direction === "vertical"
                            ? "translate-y-0 group-hover:-translate-y-full"
                            : "translate-x-0 group-hover:translate-x-full"
                    )}
                >
                    {children}
                </div>

                {/* Hover Content */}
                <div
                    className={cn(
                        "absolute flex items-center justify-center transition-transform duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] delay-0 group-hover:delay-[200ms]",
                        direction === "vertical"
                            ? "bottom-[-100%] left-0 right-0 translate-y-0 group-hover:-translate-y-full"
                            : "left-[-100%] bottom-0 top-0 translate-x-0 group-hover:translate-x-full"
                    )}
                >
                    {hoverChildren || children}
                </div>
            </div>
        </button>
    )
}
