import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface LocationStore {
  currentAddress: string;
  setCurrentAddress: (address: string) => void;
}

export const useLocationStore = create<LocationStore>()(
  persist(
    (set) => ({
      currentAddress: "",
      setCurrentAddress: (address) => set({ currentAddress: address }),
    }),
    {
      name: "location-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
