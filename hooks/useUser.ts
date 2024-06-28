"use client";

import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";

const useUser = () => {
  const [user, setUser] = useState<any>(null);
  const supabase = createClient();
  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, [supabase.auth]);
  if (!user) return null;
  return user;
};

export default useUser;
