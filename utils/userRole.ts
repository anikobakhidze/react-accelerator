export function hasUserRole(user: any): user is { role: string[] } {
  return user && Array.isArray(user.role);
}
