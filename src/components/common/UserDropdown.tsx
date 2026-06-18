"use client";

import Link from "next/link";
import { User, Users, LogOut, Moon, Sun } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import { getInitials } from "@/lib/utils";
import type { CurrentUser } from "@/types/user.type";

interface UserDropdownProps {
  currentUser: CurrentUser | null;
  isLoggedIn: boolean;
  mounted: boolean;
  theme: string | undefined;
  setTheme: (theme: string) => void;
  onLogout: () => void;
}

export function UserDropdown({
  currentUser,
  isLoggedIn,
  mounted,
  theme,
  setTheme,
  onLogout,
}: UserDropdownProps) {
  return (
    <>
      {mounted ? (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button type="button" aria-label="User menu">
              <Avatar className="size-9 border">
                <AvatarImage
                  src={currentUser?.image}
                  alt={currentUser?.name}
                />
                <AvatarFallback>
                  {getInitials(currentUser?.name || "User")}
                </AvatarFallback>
              </Avatar>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-60" align="end">
            {isLoggedIn ? (
              <>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold tracking-wider">
                      {currentUser?.name}
                    </p>
                    <p className="text-xs text-muted-foreground tracking-widest">
                      {currentUser?.email}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer uppercase text-xs tracking-wider"
                >
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 w-full"
                  >
                    <User className="text-primary w-4 h-4" />
                    <span>View Profile</span>
                  </Link>
                </DropdownMenuItem>
              </>
            ) : (
              <>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-semibold">
                      Welcome to MentorIP
                    </p>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest leading-none">
                      Security for your Innovation
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer uppercase text-xs tracking-wider"
                >
                  <Link href="/auth/login">
                    <LogOut className="rotate-180 text-primary" />
                    <span>Log In</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  asChild
                  className="cursor-pointer uppercase text-xs tracking-wider"
                >
                  <Link href="/auth/register">
                    <Users className="text-primary" />
                    <span>Register Account</span>
                  </Link>
                </DropdownMenuItem>
              </>
            )}

            <DropdownMenuSeparator />
            <div className="flex items-center justify-between px-2 py-1.5 focus:bg-accent focus:text-accent-foreground select-none">
              <div className="flex items-center gap-2">
                {theme === "dark" ? (
                  <Moon className="h-4 w-4 text-blue-400" />
                ) : (
                  <Sun className="h-4 w-4 text-amber-500" />
                )}
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                  Dark Mode
                </span>
              </div>
              <Switch
                className="scale-75"
                checked={theme === "dark"}
                onCheckedChange={(checked) =>
                  setTheme(checked ? "dark" : "light")
                }
              />
            </div>

            {isLoggedIn && (
              <>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={onLogout}
                  className="text-red-500 focus:text-red-500 cursor-pointer font-bold text-xs uppercase tracking-[0.2em]"
                >
                  <LogOut />
                  <span>Log out</span>
                </DropdownMenuItem>
              </>
            )}
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <Avatar className="size-9 border">
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      )}
    </>
  );
}
