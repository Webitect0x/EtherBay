import useSWR from "swr";

interface UserData {
  id: any;
  username: any;
  inserted_at: any;
  account_status: any;
}

const useCurrentUser = () => {
  const { data, error, isValidating } = useSWR<UserData>(
    "http://localhost:4000/api/accounts/current",
  );

  if (isValidating) return { isLoading: true };
  if (error) return { error };

  if (!data) {
    return { error: "No data available" };
  }

  const { id, username, inserted_at, account_status } = data;
  return { id, username, inserted_at, account_status };
};

export default useCurrentUser;
