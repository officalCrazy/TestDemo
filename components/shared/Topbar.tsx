import Link from "next/link"
import Image from "next/image"
import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs"

function Topbar() {
    return (
    <nav className="topbar">
        <Link href="/" className="flex items-center gap-4">
            <Image src="/assets/logo.png" alt="logo" width={44} height={44} />
            <p className="text-heading3-bold text-light-1 max-xs:hidden">Strings</p>
        </Link>

        <div className="flex items-center gap-1">
            <div className="block md:hidden">
                <SignedIn>
                    <SignOutButton>
                        <div className="flex cursor-pointer">
                            <Image
                                src="/assets/logout.svg"
                                alt="logout"
                                width={44}
                                height={44}
                            />
                        </div>
                    </SignOutButton>
                </SignedIn>
            </div>

            <OrganizationSwitcher
            appearance={{
                elements: {
                    organizationSwitcherTrigger:
                    "py-2 px-4"
                }

            }}
            
            
            />
        </div>
        
    </nav>
    )
}

export default Topbar