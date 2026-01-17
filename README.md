Advanced Smart Event Registration & Attendance Platform
Develop a **robust web-based platform** to manage **end-to-end event registration and attendance** for large-scale events such as college fests, conferences, and workshops, ensuring reliable operations, real-time visibility, and strict access control.

### **Requirements:**

- Support **complex event structures**, including:
    - Multiple days
    - Multiple venues
    - Parallel and overlapping sessions
- Enable clearly defined user roles:
    - Admin
    - Organizer
    - Volunteer
    - Attendee
- Enforce **strict role-based permissions** across the platform.
- Allow participants to **register for entire events or individual sessions**.
- Implement **secure QR-based check-ins** for on-ground attendance management.
- Provide **real-time visibility** into attendance metrics and session-wise participation.
- Ensure fast, reliable check-in flows to handle large crowds.
- Maintain **detailed audit logs** for registrations, check-ins, and administrative actions.
- Design the system to be **scalable and reliable** under real-world, high-traffic conditions.
- Deliver a clean, intuitive, and operationally efficient user experience.

src/
├── components/
│   ├── Dashboard/
│   │   ├── AdminDashboard.jsx
│   │   ├── OrganizerDashboard.jsx
│   │   ├── VolunteerDashboard.jsx
│   │   └── AttendeeDashboard.jsx
│   ├── Auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   └── common/
│       ├── ProtectedRoute.jsx
│       └── Sidebar.jsx
├── utils/
│   ├── permissions.js          ← Permission checking logic
│   ├── api.js                  ← API calls
│   └── constants.js            ← Roles, permissions constants
├── context/
│   └── AuthContext.jsx         ← User authentication state
├── middleware/
│   └── authMiddleware.js       ← Route protection
└── App.jsx
