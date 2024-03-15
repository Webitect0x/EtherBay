import { useState, FormEvent, Dispatch, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import toast from "react-hot-toast";
import axios from "axios";
import Cookies from "js-cookie";
import SuccessToast from "@/components/atoms/success-toast";

interface LoginPageProps {
  loginData: {
    username: string;
    password: string;
  };
  setLoginData: Dispatch<
    SetStateAction<{
      username: string;
      password: string;
    }>
  >;
  handleLogin: (e: FormEvent) => void;
}

const LoginWrapper = <T extends {}>(
  Component: React.ComponentType<LoginPageProps>,
) => {
  return (props: Omit<T, keyof LoginPageProps>) => {
    const [loginData, setLoginData] = useState({
      username: "",
      password: "",
    });

    const router = useRouter();

    const handleLogin = async (e: FormEvent) => {
      e.preventDefault();

      await axios({
        method: "post",
        url: "http://localhost:4000/api/accounts/sign_in",
        data: {
          username: loginData.username,
          password: loginData.password,
        },
        withCredentials: true,
      })
        .then((response) => {
          Cookies.set("jwt-token", response.data.token);
          toast(<SuccessToast message="Login Successful" />);
          mutate("http://localhost:4000/api/accounts/current");
          router.push("/");
        })
        .catch((error) => console.log(error));
    };
    return (
      <Component
        {...props}
        loginData={loginData}
        setLoginData={setLoginData}
        handleLogin={handleLogin}
      />
    );
  };
};

export default LoginWrapper;
