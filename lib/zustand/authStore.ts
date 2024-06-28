import {create} from 'zustand';
import { createClient } from "@/utils/supabase/client";
import { login as loginAction } from "@/lib/auth-actions";

interface User {
    id: string;
    email?: string | undefined;
}

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;

    setUser: (user: User | null) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;

    login: (email: string, password: string) => Promise<void>;
}

const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isLoading: false,
    error: null,

    setUser: (user) => {
        console.log('Setting user in state:', user);
        set({ user });
    },
    setLoading: (isLoading) => {
        console.log('Setting loading state:', isLoading);
        set({ isLoading });
    },
    setError: (error) => {
        console.log('Setting error state:', error);
        set({ error });
    },

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            console.log('Attempting to login');
            await loginAction(email, password);
        } catch (error: any) {
            set({ error: error.message, isLoading: false });
        }
    }
}));

export default useAuthStore;
