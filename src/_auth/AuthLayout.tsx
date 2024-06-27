import { Outlet, Navigate } from "react-router-dom";

import { useUserContext } from "@/context/AuthContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  useGSAP(() => {
    gsap.to("#side-logo", {
      ease: "power1.inOut",
      opacity: 1,
      y: 0,
      duration: 2
    });
  },[]);

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>

          <img
            id="side-logo"
            src="/assets/images/logo.svg"
            alt="logo"
            className="opacity-0 translate-y-10 hidden xl:block h-screen w-2/3 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
}
