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
        return;
    }

    const user = data?.user;
    setUser(user);
    setLoading(false);
    toast.success('Logged in successfully!');
}

export async function signup(email: string, password: string): Promise<void> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    console.log('Supabase response:', { error, data });

    const { setLoading, setError } = useAuthStore.getState();

    if (error) {
        setError(error.message);
        setLoading(false);
        return;
    }

    // Automatyczne logowanie po rejestracji
    await login(email, password);
}
