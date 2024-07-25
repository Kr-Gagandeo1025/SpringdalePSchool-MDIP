import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    NavigationMenuTrigger
  } from "@/components/ui/navigation-menu"
  import More from "@/constants/MoreMenu"
const NavMenu = () => {
  return (
    <>
    <NavigationMenu className="lg:flex hidden">
        <NavigationMenuList className="cursor-pointer">
            <a href="/about-us">
                <NavigationMenuItem>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>About Us</NavigationMenuLink>
                </NavigationMenuItem>
            </a>
            <a href="/academics">
                <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Academics</NavigationMenuLink>
                </NavigationMenuItem>
            </a>
            <a href="/admission">
                <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Admission</NavigationMenuLink>
                </NavigationMenuItem>
            </a>
            <a href="#contact-us">
                <NavigationMenuItem>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Contact Us</NavigationMenuLink>
                </NavigationMenuItem>
            </a>
            <NavigationMenuItem>
                <NavigationMenuTrigger>More</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col items-center justify-center p-2">
                    <a href="/student-faculty">
                        <span className={`${navigationMenuTriggerStyle()} w-full cursor-pointer`}>Student & Faculty</span>
                    </a>
                    <a href="/">
                        <span className={`${navigationMenuTriggerStyle()} w-full cursor-pointer`}>Gallery</span>
                    </a>
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    <NavigationMenu className="lg:hidden flex">
        <NavigationMenuList>
        <NavigationMenuItem className="w-full">
                <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-col items-start slef-start p-2">
                    {
                        More.map((m,key)=>(
                            <a href={m.path}>
                                <span className={`${navigationMenuTriggerStyle()} w-full cursor-pointer`} key={key}>{m.name}</span>
                            </a>
                        ))
                    }
                </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
    </>
  )
}

export default NavMenu
