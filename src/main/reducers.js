import {
    combineReducers
} from "redux";

import DashboardReducer from "../dashboard/dashboardReducer";
import tabReducer from "../common/tab/tabReducer";
import billingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: tabReducer,
    billingCycle: billingCycleReducer
})



export default rootReducer