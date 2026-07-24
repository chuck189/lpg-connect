import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Building2,
  Truck,
  CreditCard,
  BarChart3,
  Settings,
} from "lucide-react";

export const dashboardNavigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Marketplace",
    href: "/marketplace",
    icon: ShoppingCart,
  },
  {
    title: "Orders",
    href: "/orders",
    icon: Package,
  },
  {
    title: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    title: "Suppliers",
    href: "/suppliers",
    icon: Building2,
  },
  {
    title: "Deliveries",
    href: "/deliveries",
    icon: Truck,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];