import React from "react";
import css from "@/styles/authLayout.module.css";
import Image from "next/image";

export const metadata = {
  title: "Authentication",
};

const AuthLayout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <div className={css.container}>
        {/* left side */}
        <div className={css.left}>{children}</div>
        {/* right side */}
        <div className={css.right}>
          <Image
            src="/authe.webp"
            alt="authentication"
            width={400}
            height={480}
            quality={100}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
