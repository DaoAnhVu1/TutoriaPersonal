"use client";
import { useEffect, useState } from "react";
import SignInModal from "../modals/sign-in-modal";
import ProfileModal from "../modals/profile-modal";
import AddSubjectModal from "../modals/add-subject-modal";
import AddQualificationModal from "../modals/add-qualification-modal";
import AddAvailableTimeModal from "../modals/add-available-time";
import ScheduleModal from "../modals/schedule-modal";

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
      <AddQualificationModal />
      <AddAvailableTimeModal />
      <ScheduleModal />
    </>
  );
};

export default ModalProvider;
