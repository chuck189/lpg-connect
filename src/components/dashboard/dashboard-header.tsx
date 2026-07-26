"use client";

import { Bell, Search } from "lucide-react";

interface LPGConnectOperationsCenterHeaderProps {
  title?: string;
  subtitle?: string;
}

export default function LPGConnectOperationsCenterHeader({
  title = "LPG Connect Operations Center",
  subtitle = "Energy management platform",
}: LPGConnectOperationsCenterHeaderProps) {
  return (
    <header className="h-16 border-b bg-background flex items-center justify-between px-6">
      {/* Left Side */}

      <div>
        <h1 className="font-semibold text-lg">
          {title}
        </h1>

        <p className="text-xs text-muted-foreground">
          {subtitle}
        </p>
      </div>


      {/* Right Side */}

      <div className="flex items-center gap-4">

        <button className="rounded-full p-2 hover:bg-muted">
          <Search size={18} />
        </button>


        <button className="rounded-full p-2 hover:bg-muted">
          <Bell size={18} />
        </button>

      </div>

    </header>
  );
}