import {cva, VariantProps} from "class-variance-authority";
import React from "react";
import {cn} from "@/lib/utils";

const linkVariants = cva(
    "h-9 rounded-full border-2 border-accent hover:bg-accent hover:cursor-pointer",
    {
        variants: {
            variant: {
                default:
                    "h-9 rounded-full border-2 border-accent hover:bg-accent hover:cursor-pointer",
                normal:
                    "h-9",

            }
        }
    }
)


export default function Link({className, variant,children,...props}: React.ComponentProps<"a"> & VariantProps<typeof linkVariants>) {
    return <a className={cn(linkVariants({className, variant}))} {...props}>
        {children}
    </a>
}