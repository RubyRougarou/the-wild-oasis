import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth.js";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
      toast.success("User's data updated successfully.");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
