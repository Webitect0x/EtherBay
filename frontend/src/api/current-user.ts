import useSWR from "swr";
import { BASEURL } from "@/constants/constants";

export const currentUser = () => {
  const {
    data: user,
    error,
    isLoading,
  } = useSWR(`${BASEURL}/accounts/current`);

  if (!user) {
    return { error: "User Data Unavailable" };
  }

  if (error) {
    return { error: error };
  }

  const { id, account_status, bio, inserted_at, username } = user.data;

  return { id, account_status, bio, inserted_at, username, isLoading, user };
};
