import { configureStore } from "@reduxjs/toolkit";

import cartReducer from '@/store/features/cart.store'
import shopReducer from '@/store/features/shop.store'
import globalReducer from "@/store/features/global.store";

const store = configureStore({
    reducer: {
      global: globalReducer,
      cart: cartReducer,
      shop: shopReducer
    },
    devTools: true
})

export default store