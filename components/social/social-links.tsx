import { socialLinks } from "@/lib/social"
import { cn } from "@/lib/utils"

import {SocialIcon} from "react-social-icons"
export const TagSocial = ({className} : {className ? : string})=>{

    return(
        <div className={cn("flex flex-row items-center gap-4 flex-wrap",className)}>
            {socialLinks.map((s,i)=><SocialIcon   url={s} key={i}   target="_blank"  rel="noopener noreferrer"/>)}
        </div>
    )
}