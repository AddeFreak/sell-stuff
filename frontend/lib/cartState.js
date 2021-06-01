import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const LocalStateContext = createContext()

 
function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState()
  function toggleCart() {
    setCartOpen(!cartOpen)
  }

  return (
      <LocalStateContext.Provider value={{ cartOpen, setCartOpen, toggleCart }}>
          {children}
      </LocalStateContext.Provider>
  )
}

function useCart() {
  const wholeCart = useContext(LocalStateContext)
  return wholeCart
}
export {CartStateProvider, useCart}