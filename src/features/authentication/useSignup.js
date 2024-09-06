import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth.js";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading: isSigningUp, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success(
        "User created successfully. User must verify account with email",
      );
    },
    onError: () => toast.error("Failed to create user!"),
  });

  return { isSigningUp, signup };
}
