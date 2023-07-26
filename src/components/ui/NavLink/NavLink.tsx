
import Link from "next/link";
import { block } from "million/react";

const NavLink: React.FC<any> = ({ children, href, ...props }) => (
    <Link href={href} {...props} className={`py-2.5 px-4 text-center rounded-full duration-150 ${props?.className || ""}`}>
        {children}
    </Link>
)

export default NavLink