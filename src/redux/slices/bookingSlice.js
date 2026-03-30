import { createSlice } from "@reduxjs/toolkit";

const saved = JSON.parse(localStorage.getItem("booking") || "{}");

const initialState = {
  callScheduled: saved.callScheduled || false,
  dateTime: saved.dateTime || null,
  qualificationAnswers: saved.qualificationAnswers || {
    currentJob: "",
    biggestChallenge: "",
    goal: "",
    timeline: "",
  },
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setQualificationAnswers(state, action) {
      state.qualificationAnswers = action.payload;
      localStorage.setItem(
        "booking",
        JSON.stringify({ ...state, qualificationAnswers: action.payload }),
      );
    },
    confirmBooking(state, action) {
      state.callScheduled = true;
      state.dateTime = action.payload;
      localStorage.setItem(
        "booking",
        JSON.stringify({
          callScheduled: true,
          dateTime: action.payload,
          qualificationAnswers: state.qualificationAnswers,
        }),
      );
    },
    clearBooking(state) {
      state.callScheduled = false;
      state.dateTime = null;
      state.qualificationAnswers = {
        currentJob: "",
        biggestChallenge: "",
        goal: "",
        timeline: "",
      };
      localStorage.removeItem("booking");
    },
  },
});

export const { setQualificationAnswers, confirmBooking, clearBooking } =
  bookingSlice.actions;
export default bookingSlice.reducer;
