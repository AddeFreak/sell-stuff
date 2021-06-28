import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";

const CartStateContext = createContext()

 
function CartStateProvider({ children }) {
  const [cartOpen, setCartOpen] = useState(false)
  function toggleCart() {
    setCartOpen(!cartOpen)
  }
  function closeCart() {
      setCartOpen(false)
  }

  function openCart() {
      setCartOpen(true)
  }

  return (
    <CartStateContext.Provider value={{
      cartOpen,
      setCartOpen,
      toggleCart,
      closeCart,
      openCart
    }}>
          {children}
      </CartStateContext.Provider>
  )
}

function useCart() {
  const wholeCart = useContext(CartStateContext)
  return wholeCart
}
export {CartStateProvider, useCart}