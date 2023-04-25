import { create } from "zustand";

interface AuthStore {
  username: string;
  login: (username: string) => void;
  logout: () => void;
}

const useAuthStore = create<AuthStore>((set) => ({
  username: "",
  login: (username) =>
    set(() => ({ username: username })),
  logout: () => set((store) => ({ username: "" })),
}));

export default useAuthStore;
