import React from 'react';
import { useVendingMachineContext } from '../context/VendingMachineContext'; // 导入自定义Hook以获取上下文信息

// 侧边logo组件
function SideLogo() {
  const { settings } = useVendingMachineContext(); // 使用自定义Hook获取上下文信息
  return(
    // 显示侧边logo
    <img src={settings.sideLogo} style={{marginTop:'10px' }} alt="" />
  )
}

export default SideLogo; // 导出侧边logo组件
