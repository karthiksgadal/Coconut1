import React from 'react';
import { getCurrentUser } from '../../lib/mockAuth';
import { TrendingUp, Users, Calendar, Ticket } from 'lucide-react';

export default function DashboardOverview() {
  const user = getCurrentUser();

  const stats = {
    admin: [
      { label: 'Total Registrations', value: '2,543', icon: Users, color: 'bg-blue-500' },
      { label: 'Active Events', value: '14', icon: Calendar, color: 'bg-purple-500' },
      { label: 'Revenue', value: '$45k', icon: TrendingUp, color: 'bg-green-500' },
    ],
    attendee: [
      { label: 'My Events', value: '3', icon: Calendar, color: 'bg-orange-500' },
      { label: 'Tickets', value: '12', icon: Ticket, color: 'bg-blue-500' },
    ],
    // Add organizer/volunteer stats if needed
  };

  const currentStats = stats[user.role] || stats.admin;

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-gray-900">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentStats.map((stat, i) => (
          <div key={i} className="p-6 bg-white rounded-xl shadow-sm border flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.color} text-white`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm text-gray-500">{stat.label}</p>
              <h3 className="text-2xl font-bold">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}