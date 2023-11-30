"use client";
import { useEffect, useState } from "react";
import SignInModal from "../modals/sign-in-modal";
import ProfileModal from "../modals/profile-modal";
import AddSubjectModal from "../modals/add-subject-modal";

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
      <ProfileModal />
      <AddSubjectModal />
    </>
  );
};

export default ModalProvider;
