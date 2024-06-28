import { create } from "zustand";
import { login, signout, signup } from "../auth-actions";

interface User {
  id: string;
  email?: string | null;
  full_name?: string;
  // Dodaj inne właściwości użytkownika, jeśli są
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearState: () => void;

  login: (formData: FormData) => Promise<void>;
  signup: (formData: FormData) => Promise<void>;
  signout: () => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  setUser: (user) => set({ user }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),

  clearState: () => set({ user: null, isLoading: false, error: null }),

  login: async (formData) => {
    set({ isLoading: true, error: null });
    await login(formData);
  },
  signup: async (formData) => {
    set({ isLoading: true, error: null });
    await signup(formData);
  },
  signout: async () => {
    set({ isLoading: true, error: null });
    await signout();
  },
}));

export default useAuthStore;
