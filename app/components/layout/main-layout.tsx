import Footer from "@/app/components/layout/footer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
}
