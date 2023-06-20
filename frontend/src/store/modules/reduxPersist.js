//area resposanvel por guardar informação
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

export default reducers => {
   const persistReducers = persistReducer(
      {
         key: 'consumo Api',
         storage,
         whitelist: ['auth'],
      },
      reducers,
   )
   return persistReducers
}
