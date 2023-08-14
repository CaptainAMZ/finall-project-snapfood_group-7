"use client"

import { Provider } from "react-redux"
import { store } from "."

const Providers = ({children}) => {
  return (
    <Provider store={store}>
    {children}
    </Provider>
  )
}

export default Providers