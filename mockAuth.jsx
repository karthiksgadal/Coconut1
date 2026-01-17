// No types, just clean JS
export const CURRENT_USER_ROLE = 'admin'; 

export const getCurrentUser = () => {
  return {
    id: '123',
    name: 'Alex Developer',
    email: 'alex@college.edu',
    role: CURRENT_USER_ROLE,
    avatar: 'https://github.com/shadcn.png'
  };
};