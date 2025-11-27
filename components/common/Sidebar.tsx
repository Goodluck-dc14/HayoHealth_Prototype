import React from "react";
import { LogOut } from "lucide-react";

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClick: () => void;
}

interface SidebarProps {
  title: string;
  subtitle: string;
  items: SidebarItem[];
  userAvatar: string;
  userName: string;
  userRole: string;
  onLogout: () => void;
  colorClass?: string; // e.g., 'text-primary'
}

export const Sidebar: React.FC<SidebarProps> = ({
  title,
  subtitle,
  items,
  userAvatar,
  userName,
  userRole,
  onLogout,
  colorClass = "text-primary",
}) => {
  const activeBgClass =
    colorClass === "text-secondary"
      ? "bg-secondary shadow-secondary/25"
      : "bg-primary shadow-primary/25";
  const activeTextClass = "text-white";
  const iconColorClass =
    colorClass === "text-secondary" ? "text-secondary" : "text-primary";

  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-screen fixed left-0 top-0 z-50 overflow-y-auto shadow-card">
      <div className="p-6">
        <div className="flex items-center gap-3 mb-10">
          <div
            className={`h-10 w-10 rounded-xl flex items-center justify-center text-white shadow-lg ${
              colorClass === "text-secondary"
                ? " shadow-secondary/30"
                : " shadow-primary/30"
            }`}
          >
            <img src="/HAYOHEALTH.png" />
          </div>
          <div>
            <h1 className="font-extrabold text-lg leading-tight text-slate-900">
              {title}
            </h1>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-wider">
              {subtitle}
            </p>
          </div>
        </div>

        <nav className="space-y-2">
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={item.onClick}
              className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-200 group font-medium ${
                item.active
                  ? `${activeBgClass} ${activeTextClass}`
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <div
                className={`${
                  item.active
                    ? "text-white"
                    : "text-slate-400 group-hover:text-current"
                }`}
              >
                {item.icon}
              </div>
              <span className="text-sm">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t border-slate-100 bg-slate-50/30">
        <div className="flex items-center gap-3 mb-4">
          <img
            src={userAvatar}
            alt="User"
            className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-slate-900 truncate">
              {userName}
            </p>
            <p className={`text-xs truncate font-medium ${iconColorClass}`}>
              {userRole}
            </p>
          </div>
        </div>
        <button
          onClick={onLogout}
          className="flex w-full items-center justify-center gap-2 text-slate-500 hover:text-red-500 text-sm font-bold py-3 px-4 rounded-xl hover:bg-red-50 transition-colors border border-transparent hover:border-red-100"
        >
          <LogOut size={18} />
          Log Out
        </button>
      </div>
    </aside>
  );
};
