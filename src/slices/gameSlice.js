import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userHand: "",
    computerHand: "",
};

const gameSlice = createSlice({
    name: "game",
    initialState: {
        userHand: "",
        computerHand: "",
    },
    reducers: {
        setUserHand: (state, action) => {
            state.userHand = action.payload;
        },
        setComputerHand: (state, action) => {
            state.computerHand = action.payload;
        },
    },
});

export const {setUserHand, setComputerHand} = gameSlice.actions;
export default gameSlice.reducer;
