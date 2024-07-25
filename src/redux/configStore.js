import { configureStore } from "@reduxjs/toolkit";
import { rowSeatSlice } from "./rowSeatSlice";

export const store = configureStore({
  reducer: {
    hoTen: () => "Quang Vũ",
    booking: rowSeatSlice,
  },
});
