"use client";

import Button from "@/components/atoms/button";
import FormLabel from "@/components/atoms/form-label";
import FrameOctagon from "@/components/templates/frames/frame-octagon";
import LoginWrapper from "./login-wrapper";

const LoginPage = LoginWrapper(({ loginData, setLoginData, handleLogin }) => {
  return (
    <FrameOctagon classNames="h-[85vh] mt-3 m-1">
      <form
        onSubmit={handleLogin}
        className="mx-auto flex flex-col items-center justify-center gap-5 pt-[5rem]"
      >
        <h1 className="text-2xl font-bold">Login</h1>
        <FormLabel
          title="Username"
          value={loginData.username}
          onChange={(e) =>
            setLoginData({ ...loginData, username: e.target.value })
          }
        />
        <FormLabel
          title="Password"
          value={loginData.password}
          onChange={(e) =>
            setLoginData({ ...loginData, password: e.target.value })
          }
        />
        <Button size="m" text="Login" as="button" type="submit" />
      </form>
    </FrameOctagon>
  );
});

export default LoginPage;
