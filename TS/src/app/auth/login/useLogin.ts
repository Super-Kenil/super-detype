"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "sonner";
import type { IUser } from "@/types/user";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { data: session } = useSession();
  const searchParams = useSearchParams();

  const loginFormSchema = yup.object({
    email: yup.string().email("Please enter a valid email").required("Please enter your email"),
    password: yup.string().required("Please enter your password")
  });

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(loginFormSchema), defaultValues: {
      email: "user@coderthemes.com", password: "password"
    }
  });

  const changeUserRole = (role: IUser['role']) => {
    reset({
      email: role == "user" ? "user@coderthemes.com" : "admin@coderthemes.com",
      password: role == "user" ? "password" : "password"
    });
  };

  useEffect(() => {
    if (session?.user) {
      const redirectLink = searchParams.get("redirectTo");
      const adminRoute = redirectLink?.startsWith("/admin");
      if (session.user.role == "admin") {
        router.push((redirectLink && adminRoute) ? redirectLink : '/admin/dashboard');
      } else if (session.user.role == "user") {
        router.push((redirectLink && !adminRoute) ? redirectLink : "/home");
      }
    }
  }, [session]);

  type LoginFormFields = yup.InferType<typeof loginFormSchema>

  const login = handleSubmit(async (values: LoginFormFields) => {
    setLoading(true);
    signIn("credentials", {
      redirect: false, email: values?.email, password: values?.password
    }).then((res) => {
      if (res?.ok) {
        toast.success("Successfully logged in. Redirecting....", { position: "top-right", duration: 2000 });
      } else {
        toast.error(res?.error, { position: "top-right", duration: 2000 });
      }
    });
    setLoading(false);
  });

  return { loading, login, control, changeUserRole };
};

export default useLogin;
