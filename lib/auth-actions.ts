import { createClient } from "@/utils/supabase/client";
import useAuthStore from "./zustand/authStore";

export async function login(email: string, password: string): Promise<void> {
    const supabase = createClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    console.log('Supabase response:', { error, data });

    const { setUser, setLoading, setError } = useAuthStore.getState();

    if (error) {
        setError(error.message);
        setLoading(false);
        return;
    }

    const user = data?.user;
    console.log('Setting user before:', user);
    setUser(user);
    console.log('Setting user after:', user);
    setLoading(false);
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
