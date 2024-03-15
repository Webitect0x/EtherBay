import { toast } from "react-hot-toast";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { RegisterUserProps } from "./page";
import axios from "axios";
import ErrorToast from "@/components/atoms/error-toast";
import SuccessToast from "@/components/atoms/success-toast";

const RegisterPageWrapper = <T extends {}>(
  Component: React.ComponentType<RegisterUserProps>,
) => {
  return (props: Omit<T, keyof RegisterUserProps>) => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      confirmPassword: "",
    });
    const router = useRouter();

    const createAccount = async (e: FormEvent) => {
      e.preventDefault();

      if (formData.password !== formData.confirmPassword) {
        toast(<ErrorToast message="Password Don't Match" />);
        return;
      }

      await axios({
        method: "post",
        url: "http://localhost:4000/api/accounts/create",
        data: {
          account: {
            username: formData.username,
            password: formData.password,
            account_status: "user",
          },
        },
      })
        .then((response: any) => {
          router.push("/login");
          toast(<SuccessToast message="Successfully Registered" />);
        })
        .catch((error: any) => {
          toast(<ErrorToast message={error.response.data.errors} />);
        });
    };

    return (
      <Component
        {...props}
        formData={formData}
        setFormData={setFormData}
        createAccount={createAccount}
      />
    );
  };
};

export default RegisterPageWrapper;
