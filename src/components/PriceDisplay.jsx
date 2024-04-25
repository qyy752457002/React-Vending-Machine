import React from 'react';

// 键盘组件
function Keypad({ input }) {
    return (
        <div className="product-display" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '200px', border: '1px solid #282c34', padding: '10px' }}>
            {/* 显示输入内容 */}
            <div style={{ width: '200px', height: '25px', lineHeight: '25px', paddingLeft: '4px' }}>{input}</div>
        </div>
    )
}

export default Keypad; // 导出键盘组件
