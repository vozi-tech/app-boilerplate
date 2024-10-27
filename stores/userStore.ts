import { create } from "zustand";

interface User {
  name: string;
  email: string;
  bio: string;
  avatar?: string;
}

interface UserStore {
  user: User;
  updateUser: (updates: Partial<User>) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  user: {
    name: "",
    email: "",
    bio: "",
  },
  updateUser: (updates) =>
    set((state) => ({ user: { ...state.user, ...updates } })),
}));
