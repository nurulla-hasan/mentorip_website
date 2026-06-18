import {
  Home,
  Info,
  Users,
  Briefcase,
  Phone,
  Image as ImageIcon,
  ChevronRight,
} from "lucide-react";

export interface NavLink {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  isCTA?: boolean;
}

export const navLinks: NavLink[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "/about", icon: Info },
  { name: "Our Clients", href: "/clients", icon: Users },
  { name: "Service & Practices", href: "/services", icon: Briefcase },
  { name: "Contact Us", href: "/contact", icon: Phone },
  { name: "Team of Lawyers", href: "/team-of-lawyers", icon: Users },
  { name: "Gallery", href: "/gallery", icon: ImageIcon },
  {
    name: "Access Client Portal",
    href: "https://app.mentorip.com/login",
    icon: ChevronRight,
    isCTA: true,
  },
];
