import { create } from "zustand";
import { Vendor } from "../schemaTypes";

interface VendorState {
  newVendor: Vendor,
  updateNewVendor: (vendor: Vendor) => void;
};

const useVendorStore = create<VendorState>((set, getState) => ({
  newVendor: {},
  updateNewVendor: (vendor) => {
    const state = getState();
    set({
      newVendor: { ...state.newVendor, ...vendor },
    });
  },
}));

export default useVendorStore;