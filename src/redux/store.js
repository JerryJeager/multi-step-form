import { configureStore } from '@reduxjs/toolkit'
import billingReducer from './billingPlan'

export default configureStore({
    reducer: {
        BillingPlan: billingReducer
    }
})