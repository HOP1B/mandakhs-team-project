"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Bell,
  User,
  Settings,
  LogOut,
  Gift,
  Wallet,
} from "lucide-react";

import { usePathname } from "next/navigation";
import { Button } from "../../../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Cases", href: "/cases" },
    // { name: "Upgrade", href: "/upgrade" },
    { name: "Inventory", href: "/inventory" },
  ];

  return (
    <header className="py-6 px-4 relative z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-600"
          >
            GunVault
          </Link>

          <nav className="hidden md:flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`transition-colors ${
                  pathname === item.href
                    ? "text-white font-medium"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-medium text-white">
                    3
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-80 bg-gray-800 border-gray-700"
              >
                <DropdownMenuLabel className="flex items-center justify-between">
                  <span>Notifications</span>
                  <Badge variant="outline" className="text-xs">
                    3 new
                  </Badge>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <div className="max-h-[300px] overflow-y-auto">
                  {[1, 2, 3].map((id) => (
                    <DropdownMenuItem key={id} className="py-3 cursor-pointer">
                      <div className="flex items-start">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
                          <Gift className="h-4 w-4 text-white" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">
                            New case available!
                          </p>
                          <p className="text-xs text-gray-400 mt-1">
                            Check out the new Neon Dreams case with exclusive
                            skins.
                          </p>
                          <p className="text-xs text-gray-500 mt-1">Just now</p>
                        </div>
                      </div>
                    </DropdownMenuItem>
                  ))}
                </div>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="justify-center">
                  <Link
                    href="/notifications"
                    className="text-sm text-cyan-400 hover:text-cyan-300"
                  >
                    View all notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 flex items-center">
              <span className="text-yellow-400 font-medium">1,250</span>
              <span className="ml-2">coins</span>
              <Button
                variant="ghost"
                size="icon"
                className="ml-1 text-gray-400 hover:text-white"
              >
                <Wallet className="h-4 w-4" />
              </Button>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-10 w-10 rounded-full"
                >
                  <Avatar>
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600">
                      JD
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-gray-800 border-gray-700"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="cursor-pointer">
                  <User className="mr-2 h-4 w-4" />
                  <Link href="/profile">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Wallet className="mr-2 h-4 w-4" />
                  <Link href="/profile?tab=history">Transactions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <Link href="/profile?tab=settings">Settings</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator className="bg-gray-700" />
                <DropdownMenuItem className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-950/30">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50"
          >
            <div className="container mx-auto py-4 px-4">
              <nav className="flex flex-col space-y-4 mb-6">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-lg transition-colors ${
                      pathname === item.href
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarImage
                      src="/placeholder.svg?height=40&width=40"
                      alt="User"
                    />
                    <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">JohnDoe</div>
                    <div className="text-sm text-gray-400">Level 42</div>
                  </div>
                </div>
                <div className="bg-gray-800 rounded-full px-3 py-1 flex items-center">
                  <span className="text-yellow-400 font-medium">1,250</span>
                  <span className="ml-1 text-sm">coins</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = "/profile";
                  }}
                >
                  <User className="mr-2 h-5 w-5" />
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={() => {
                    setIsMenuOpen(false);
                    window.location.href = "/profile?tab=settings";
                  }}
                >
                  <Settings className="mr-2 h-5 w-5" />
                  Settings
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-950/30"
                >
                  <LogOut className="mr-2 h-5 w-5" />
                  Log out
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
