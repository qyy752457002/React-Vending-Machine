import React, { useState } from 'react';
import VendingMachineProvider from './context/VendingMachineContext'; // 导入VendingMachineProvider上下文
import ProductDisplay from './components/ProductDisplay'; // 导入产品展示组件
import DropWindow from './components/DropWindow'; // 导入下落窗口组件
import PriceDisplay from './components/PriceDisplay'; // 导入价格显示组件
import Keypad from './components/Keypad'; // 导入键盘组件
import SideLogo from './components/SideLogo'; // 导入侧边logo组件

function App() {
  const [input, setInput] = useState(''); // 输入框状态
  const [animation, setAnimation] = useState(''); // 动画状态

  // 处理输入框确认
  const handleInputConfirm = (newInput) => {
    setInput(newInput); // 更新输入框状态
  }

  // 处理确认购买
  const handleConfirmPurchase = (shelf) => {
    setInput(''); // 清空输入框
    setAnimation(shelf); // 设置动画状态为所选择的货架
  }

  // 处理取消输入
  const handleInputonCancel = () => {
    setInput(''); // 清空输入框
  }

  // 处理动画状态变化
  const handleAnimationChange = () => {
    setAnimation(''); // 更新动画状态
  }

  return (
    <VendingMachineProvider> {/* 使用VendingMachineProvider提供的上下文 */}
      <div className="vending-machine">
        <div className='left'>
          <ProductDisplay animation={animation} handleAnimationChange={handleAnimationChange}/> {/* 产品展示 */}
          <DropWindow /> {/* 下落窗口 */}
        </div>
        <div className='right'>
          <PriceDisplay input={input}/> {/* 价格显示 */}
          <Keypad onInputConfirm={handleInputConfirm} onConfirmPurchase={handleConfirmPurchase} onCancel={handleInputonCancel}/> {/* 键盘 */}
          <SideLogo /> {/* 侧边logo */}
        </div>
      </div>
    </VendingMachineProvider>
  );
}

export default App; // 导出App组件

