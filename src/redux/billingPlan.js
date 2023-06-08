import { createSlice } from "@reduxjs/toolkit";

export const planSlice = createSlice({
    name: "Billing",
    initialState: {
        value: 0,
        title: "",
        costPerPeriod: ""
    },
    reducers: {
        arcadeMonthly: (state) => {
            state.value = 9
            state.title = "Arcade(Monthly)"
            state.costPerPeriod = `$${state.value}/mo`
        }
    }
})

export const { arcadeMonthly } = planSlice.actions

export default planSlice.reducer