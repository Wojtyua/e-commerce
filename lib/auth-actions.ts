"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import useAuthStore from "./zustand/authStore";

export async function login(formData: FormData): Promise<void> {
  const supabase = createClient();
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { data: authData, error } = await supabase.auth.signInWithPassword(data);

  const { setUser, setLoading, setError } = useAuthStore.getState();

  if (error) {
    setError(error.message);
    setLoading(false);
    redirect("/error");
    return;
  }

  setUser(authData.user);
  setLoading(false);
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signup(formData: FormData): Promise<void> {
  const supabase = createClient();
  const firstName = formData.get("first-name") as string;
  const lastName = formData.get("last-name") as string;
  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    options: {
      data: {
        full_name: `${firstName} ${lastName}`,
        email: formData.get("email") as string,
      },
    },
  };

  const { data: authData, error } = await supabase.auth.signUp(data);

  const { setUser, setLoading, setError } = useAuthStore.getState();

  if (error) {
    setError(error.message);
    setLoading(false);
    redirect("/error");
    return;
  }

  setUser(authData.user);
  setLoading(false);
  revalidatePath("/", "layout");
  redirect("/");
}

export async function signout(): Promise<void> {
  const supabase = createClient();
  const { error } = await supabase.auth.signOut();

  const { clearState, setLoading, setError } = useAuthStore.getState();

  if (error) {
    setError(error.message);
    setLoading(false);
    redirect("/error");
    return;
  }

  clearState();
  setLoading(false);
  redirect("/auth/logout");
}
