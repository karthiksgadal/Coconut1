import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getCurrentUser } from '../../lib/mockAuth';
import { 
  LayoutDashboard, Calendar, Users, BarChart3, 
  QrCode, ScanLine, FileText, LogOut 
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const user = getCurrentUser();
  const location = useLocation();
  const pathname = location.pathname;

  const roleNavItems = {
    admin: [
      { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Manage Events', href: '/dashboard/events', icon: Calendar },
      { name: 'Users', href: '/dashboard/users', icon: Users },
      { name: 'Analytics', href: '/dashboard/analytics', icon: BarChart3 },
      { name: 'Audit Logs', href: '/dashboard/logs', icon: FileText },
    ],
    organizer: [
      { name: 'My Events', href: '/dashboard/events', icon: Calendar },
      { name: 'Sessions', href: '/dashboard/sessions', icon: Users },
      { name: 'Scanner', href: '/dashboard/scan', icon: ScanLine },
    ],
    volunteer: [
      { name: 'Scan QR', href: '/dashboard/scan', icon: ScanLine },
      { name: 'Session List', href: '/dashboard/sessions', icon: Users },
    ],
    attendee: [
      { name: 'Browse Events', href: '/dashboard/browse', icon: Calendar },
      { name: 'My Tickets', href: '/dashboard/my-tickets', icon: QrCode },
    ],
  };

  const navItems = roleNavItems[user.role] || [];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r hidden md:flex flex-col">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-blue-600">EventNexus</h1>
          <p className="text-xs text-gray-500 mt-1 uppercase tracking-wider">{user.role} Portal</p>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t">
          <div className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
              {user.name[0]}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
              <button className="flex items-center gap-1 text-xs text-red-500 mt-1 hover:underline">
                <LogOut size={12} /> Sign out
              </button>
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto p-8">{children}</main>
    </div>
  );
}