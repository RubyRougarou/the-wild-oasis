import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate: login, isLoading: isLogingIn } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: () => {
      navigate("/dashboard");
      toast.success("Logged in successfully");
    },
    onError: (err) => {
      toast.error("invalid email or password");
    },
  });

  return { login, isLogingIn };
}
