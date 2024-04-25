import React from 'react';

// 下落窗口组件
function DropWindow() {
  return(
    <div style={{ width: '100%', height:'180px', border: '1px solid #282c34', padding: '10px', marginTop:'10px' }}>
        {/* 显示图片 */}
        <img src="/微信图片_20240418232126.jpg" alt="" backgroundcolor="#fff" style={{width: '100%', height:'160px', opacity: '0.5', zIndex:-10, pointerEvents:'none' }} />
    </div>
  )
}

export default DropWindow; // 导出下落窗口组件
