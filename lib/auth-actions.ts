import { createClient } from "@/utils/supabase/client";
import useAuthStore from "./zustand/authStore";
import { toast } from "sonner";

export async function login(email: string, password: string): Promise<void> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    const { setUser, setLoading, setError } = useAuthStore.getState();

    if (error) {
        setError(error.message);
        setLoading(false);
        throw new Error(error.message)
    }

    const user = data?.user;
    setUser(user);
    setLoading(false);
    setError(null);
    toast.success('Logged in successfully!');
}

export async function signup(email: string, password: string, firstName: string, lastName: string): Promise<void> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstName,
                last_name: lastName
            }
        }
    });

    console.log('Supabase response:', { error, data });

    const { setUser, setLoading, setError } = useAuthStore.getState();

    if (error) {
        setError(error.message);
        setLoading(false);
        throw new Error(error.message); // Rzuć błąd, aby obsłużyć go w zustand
    }

    // Automatyczne logowanie po rejestracji
    await login(email, password);
    toast.success('Signed up successfully! Logging in...');
}

export async function logout(): Promise<void> {
    const supabase = createClient();
    const { error } = await supabase.auth.signOut();

    const { setUser, setLoading, setError } = useAuthStore.getState();

    if (error) {
        setError(error.message);
        setLoading(false);
        throw new Error(error.message); // Rzuć błąd, aby obsłużyć go w zustand
    }

    setUser(null);
    setLoading(false);
    toast.success('Logged out successfully!');
}