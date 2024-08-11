export enum UserRole {
    admin = 'admin',
    editor = 'editor',
    guest = 'guest',
  }

type RoleDescription = Record<UserRole, string>;

const roleDescriptions: RoleDescription = {
  [UserRole.admin]: 'Admin User',
  [UserRole.editor]: 'Editor User',
  [UserRole.guest]: 'Guest User',
};