import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("leadForm") || "{}");

const initialState = {
  name: saved.name || "",
  email: saved.email || "",
  submitted: saved.submitted || false,
};

const leadFormSlice = createSlice({
  name: "leadForm",
  initialState,
  reducers: {
    setLeadData(state, action) {
      state.name = action.payload.name || "";
      state.email = action.payload.email;
      state.submitted = true;
      localStorage.setItem(
        "leadForm",
        JSON.stringify({ name: state.name, email: state.email, submitted: true })
      );
    },
    clearLeadData(state) {
      state.name = "";
      state.email = "";
      state.submitted = false;
      localStorage.removeItem("leadForm");
    },
  },
});

export const { setLeadData, clearLeadData } = leadFormSlice.actions;
export default leadFormSlice.reducer;
