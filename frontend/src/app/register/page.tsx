"use client";

import { ChangeEvent, FormEvent } from "react";
import { Dispatch, SetStateAction } from "react";
import Button from "@/components/atoms/button";
import Input from "@/components/atoms/input";
import RegisterPageWrapper from "./page-wrapper";
import FrameOctagon from "@/components/templates/frames/frame-octagon";

export type RegisterUserProps = {
  formData: {
    username: string;
    password: string;
    confirmPassword: string;
  };
  setFormData: Dispatch<
    SetStateAction<{
      username: string;
      password: string;
      confirmPassword: string;
    }>
  >;
  createAccount: (e: FormEvent) => void;
};

const RegisterPage = RegisterPageWrapper(
  ({ setFormData, createAccount, formData }) => {
    return (
      <FrameOctagon
        rightBottom={true}
        leftBottom={true}
        squareSize={5}
        classNames="relative h-[89vh] mt-3 m-1"
      >
        <div className="mx-auto flex w-full">
          <form
            onSubmit={createAccount}
            className="mx-auto mt-[5rem] flex w-full flex-col items-center justify-center gap-5"
          >
            <h1 className="text-2xl font-bold">Create An account</h1>
            <label>
              <div className="pl-5">Username</div>
              <Input
                size="m"
                value={formData.username}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, username: e.target.value })
                }
              />
            </label>
            <label>
              <div className="pl-5">Password</div>
              <Input
                size="m"
                value={formData.password}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, password: e.target.value })
                }
              />
            </label>
            <label>
              <div className="pl-5">Confirm Password</div>
              <Input
                size="m"
                value={formData.confirmPassword}
                required
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setFormData({ ...formData, confirmPassword: e.target.value })
                }
              />
            </label>
            <Button size="m" text="Register" as="button" type="submit" />
          </form>
        </div>
      </FrameOctagon>
    );
  },
);

export default RegisterPage;
