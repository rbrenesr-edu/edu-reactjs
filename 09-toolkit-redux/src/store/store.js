import { configureStore } from '@reduxjs/toolkit'
import { todoApi } from './apis'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'


export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemons: pokemonSlice.reducer,
        [todoApi.reducerPath]: todoApi.reducer,
    },

    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
        .concat(todoApi.middleware)
})