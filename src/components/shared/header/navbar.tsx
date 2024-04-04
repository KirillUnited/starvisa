'use client'
import { navbar, services } from '@/content';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import styles from './styles.module.css'
import { cva } from 'class-variance-authority';

const menuLinkStyle = cva(
    "inline-flex items-center text-xl font-medium transition-colors duration-300 hover:text-foreground/70",
    {
        variants: {
            variant: {
                primary: "text-foreground min-h-[80px] px-4 transition-colors hover:bg-muted rounded-none",
                secondary: "text-foreground"
            }
        }
    }
);
const menuItemStyle = cva(
    "",
    {
        variants: {
            variant: {
                primary: "",
                secondary: ""
            }
        }
    }
)

type NavbarType = {
    variant?: 'primary' | 'secondary',
    enableSubmenu?: boolean
}

const Navbar = ({ variant, enableSubmenu }: NavbarType) => {
    const pathname = usePathname();

    return (
        <NavigationMenu>
            <NavigationMenuList className='flex flex-wrap flex-col lg:flex-row items-center justify-center'>
                {navbar.map((link) => {
                    const isActive = pathname === link.route;

                    if (link.menu && enableSubmenu) {
                        return (
                            <NavigationMenuItem
                                key={link.label}
                                className={cn(menuItemStyle())}
                            >
                                <NavigationMenuTrigger className={cn(
                                    "p-0 bg-transparent data-[state=open]:bg-muted h-auto focus:bg-transparent focus:text-foreground",
                                    menuLinkStyle({ variant }),
                                    {
                                        "font-bold": variant == 'primary' && isActive,
                                    },
                                )}>
                                    {link.label}
                                </NavigationMenuTrigger>
                                {enableSubmenu &&
                                    <NavigationMenuContent className='z-[999]'>
                                        <ul className='flex flex-col py-4 w-max max-w-64 bg-background'>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link href={`${link.route}`} className='text-primary flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                        Все категории
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            {
                                                services.map((item) => {
                                                    return (
                                                        <li key={item.title}>
                                                            <NavigationMenuLink asChild>
                                                                <Link href={item.link} className='flex capitalize hover:font-medium hover:bg-accent py-2 px-6 transition'>
                                                                    {item.title}
                                                                </Link>
                                                            </NavigationMenuLink>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </NavigationMenuContent>
                                }
                            </NavigationMenuItem>
                        )
                    }
                    return (
                        <NavigationMenuItem key={link.label} className={cn(menuItemStyle())}>
                            <NavigationMenuLink asChild>
                                <Link href={link.route}
                                    className={cn(
                                        menuLinkStyle({ variant }),
                                        {
                                            "font-bold": variant == 'primary' && isActive,
                                        },
                                    )}
                                >
                                    {link.label}
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    )
                })}
                {/* <NavigationMenuIndicator /> */}
            </NavigationMenuList>
            <NavigationMenuViewport />
        </NavigationMenu>
    )
}

export default Navbar