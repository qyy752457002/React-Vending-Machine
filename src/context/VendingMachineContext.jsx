import React, { createContext, useState } from 'react';
import { useContext } from 'react';

// 初始化 VendingMachineContext
const VendingMachineContext = createContext({
  products: [],
  settings: {},
  updateProductStock: () => {},
});

// 自定义 hook to use VendingMachineContext
export function useVendingMachineContext() {
  return useContext(VendingMachineContext);
}

// This will be the provider component
export default function VendingMachineProvider({ children }) {

  // Place your products array and settings object here
  const [products, setProducts] = useState([
    { Name: "Dasani", Shelf: "A1", Slot: 1, Price: 250, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    { Name: "Coke", Shelf: "A2", Slot: 2, Price: 300, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "A3", Slot: 3, Price: 150, Stock: 6, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "A4", Slot: 4, Price: 250, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Coke", Shelf: "A5", Slot: 5, Price: 250, Stock: 8, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Diet", Shelf: "A6", Slot: 6, Price: 150, Stock: 2, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },

    { Name: "Dasani", Shelf: "B1", Slot: 1, Price: 300, Stock: 4, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    { Name: "Coke", Shelf: "B2", Slot: 2, Price: 250, Stock: 8, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Coke", Shelf: "B3", Slot: 3, Price: 250, Stock: 2, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "B4", Slot: 4, Price: 200, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "B5", Slot: 5, Price: 150, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Diet", Shelf: "B6", Slot: 6, Price: 100, Stock: 6, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },

    { Name: "Coke", Shelf: "C1", Slot: 1, Price: 250, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "C2", Slot: 2, Price: 200, Stock: 6, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "C3", Slot: 3, Price: 300, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Diet", Shelf: "C4", Slot: 4, Price: 200, Stock: 8, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
    { Name: "Coke", Shelf: "C5", Slot: 5, Price: 300, Stock: 4, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Dasani", Shelf: "C6", Slot: 6, Price: 150, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },

    { Name: "Dasani", Shelf: "D1", Slot: 1, Price: 250, Stock: 4, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    { Name: "Coke", Shelf: "D2", Slot: 2, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "D3", Slot: 3, Price: 250, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "D4", Slot: 4, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "D5", Slot: 5, Price: 350, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Diet", Shelf: "D6", Slot: 6, Price: 250, Stock: 2, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },

    { Name: "Dasani", Shelf: "E1", Slot: 1, Price: 250, Stock: 4, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    { Name: "Coke", Shelf: "E2", Slot: 2, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "E3", Slot: 3, Price: 250, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "E4", Slot: 4, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "E5", Slot: 5, Price: 350, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Diet", Shelf: "E6", Slot: 6, Price: 250, Stock: 2, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },

    { Name: "Dasani", Shelf: "F1", Slot: 1, Price: 250, Stock: 4, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-dasani.svg" },
    { Name: "Coke", Shelf: "F2", Slot: 2, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "F3", Slot: 3, Price: 250, Stock: 3, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Coke", Shelf: "F4", Slot: 4, Price: 200, Stock: 7, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-coke.svg" },
    { Name: "Sprite", Shelf: "F5", Slot: 5, Price: 350, Stock: 5, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-sprite.svg" },
    { Name: "Diet", Shelf: "F6", Slot: 6, Price: 250, Stock: 2, ImageURL: "http://giovanni.io/coke/graphics/bottles/bottle-diet.svg" },
  ]);

  const settings = {
    drawerColor: '#f80506',
    drawerLogo: "https://t8.baidu.com/it/u=2668462275,183009387&fm=217&app=126&size=f242,150&n=0&f=JPEG&fmt=auto?s=AB25D104BCA9180D28A39CCD0300D099&sec=1713114000&t=e77a7592218a480bcf1f9a616ba29686",
    metalRollingColor: '#666',
    sideLogo: "https://img0.baidu.com/it/u=4143264126,1728950732&fm=253&fmt=auto&app=138&f=JPEG?w=664&h=372",
    rowsAvailable: 6,
  };

  // 当商品被购买的时候，更新商品
  function updateProductStock(shelf, slot, newStock) {
    setProducts((currentProducts) =>
      currentProducts.map((product) => 
        /* 
          如果product.Shelf等于shelf，并且product.Slot等于slot，
          则返回一个新的库存数量newStock的product，否则返回原始product
        */
        product.Shelf === shelf && product.Slot === slot ? { ...product, Stock: newStock} : product
      )
    );
  };
  

  // Define vendingMachineValues
  const vendingMachineValues = {
    products,
    settings,
    updateProductStock
  };

  return (
    <VendingMachineContext.Provider value={vendingMachineValues}>
      {children}
    </VendingMachineContext.Provider>
  );
};
