import { Subject, User } from "@prisma/client";
import { create } from "zustand";

export type ModalType =
  | "signIn"
  | "profile"
  | "addSubject"
  | "addQualification";

interface ModalData {
  user?: User | null;
  allSubjects?: Subject[];
}

interface ModalStore {
  type: ModalType | null;
  data: ModalData;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: ModalData) => void;
  onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({
  type: null,
  data: {},
  isOpen: false,
  onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false, data: {} }),
}));
