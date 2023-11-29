"use client";
import { useEffect, useState } from "react";
import SignInModal from "../modals/sign-in-modal";

const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <SignInModal />
    </>
  );
};

export default ModalProvider;
