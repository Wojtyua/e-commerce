import {create} from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { login as loginAction, signup as signupAction, logout as logoutAction} from "@/lib/auth-actions";


interface User_metadata {
    first_name?: string;
    last_name?: string;
    email?: string;
}
interface User {
    id: string;
    email?: string | null;
    user_metadata: User_metadata;
}

interface AuthState {
    user: User | null;
    isLoading: boolean;
    error: string | null;

    setUser: (user: User | null) => void;
    setLoading: (isLoading: boolean) => void;
    setError: (error: string | null) => void;

    login: (email: string, password: string, redirect: () => void) => Promise<void>;
    signup: (email: string, password: string, firstName: string, lastName: string, redirect: () => void) => Promise<void>;
    logout: (redirect: () => void) => Promise<void>;
}

const useAuthStore = create<AuthState>()(
    persist(
        (set, get) => ({
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

            login: async (email, password, redirect) => {
                set({ isLoading: true });
                try {
                    await loginAction(email, password);
                    redirect();
                } catch (error: any) {
                    set({ error: error.message, isLoading: false });
                }
            },
            signup: async (email, password, firstName, lastName, redirect) => {
                set({ isLoading: true });
                try {
                    console.log('Attempting to signup');
                    await signupAction(email, password, firstName, lastName);
                    set({ isLoading: false, error: null });
                    redirect();
                } catch (error: any) {
                    set({ error: error.message, isLoading: false });
                }
            },
            logout: async (redirect) => {
                set({ isLoading: true });
                try {
                    await logoutAction();
                    set({ isLoading: false, error: null });
                    redirect();
                } catch (error: any) {
                    set({ error: error.message, isLoading: false });
                }
            }
        }),
        {
            name: 'auth-storage', // unique name
            storage: createJSONStorage(() => localStorage), // use JSON storage
        }
    )
);

export default useAuthStore;
