import { useState } from 'react';
import { useVendingMachineContext } from '../context/VendingMachineContext'; // 导入自定义Hook以获取上下文信息

// 键盘组件
const Keyboard = ({ onInputConfirm, onConfirmPurchase, onCancel }) => {
    const { products, updateProductStock } = useVendingMachineContext(); // 使用自定义Hook获取上下文信息
    const [input, setInput] = useState(''); // 定义输入状态
    const [disableKeys, setDisableKeys] = useState(false); // 定义禁用键盘状态

    // 处理按键点击
    const handleKeyPress = (value) => {
        const newValue = input + value; // 将按下的键值拼接到输入状态中
        setInput(newValue); // 更新输入框输入状态
        onInputConfirm(newValue); // 调用父组件的onInputConfirm方法，更新PriceDisplay状态
    }

    // 处理确认
    const handleConfirm = () => {
        let timer;
        const selectedProduct = products.find(item => item.Shelf === input);
        if (selectedProduct) {
            if (selectedProduct.Stock > 0) {
                onInputConfirm(`${selectedProduct.Shelf}:${selectedProduct.Name}, Price:${selectedProduct.Price}`); // 确认选择的产品名称
                setDisableKeys(true); // 禁用键盘
                timer = setTimeout(() => {
                    setInput(''); // 清空输入
                    onCancel(input); // 取消操作
                    setDisableKeys(false); // 恢复键盘
                    clearTimeout(timer);
                }, 5000) // 设置延迟时间
            } else {
                onInputConfirm(`${selectedProduct.Name}:${selectedProduct.Shelf} out of stock`); // 显示缺货信息
                setInput(''); // 清空输入
            }
            
        } else {
            onInputConfirm("Invalid product"); // 显示无效产品信息
            setDisableKeys(true); // 禁用键盘
            timer = setTimeout(() => {
                setDisableKeys(false); // 恢复键盘
                onCancel(input); // 取消操作
                setInput(''); // 清空输入
                clearTimeout(timer);
            }, 3000); // 设置延迟时间
        }
    };

    // 处理取消
    const handleCancel = () => {
        setInput(''); // 清空输入框输入状态
        onCancel(); // 调用父组件的onCancel方法，清空PriceDisplay状态
    }


    // 处理购买
    const handlePurchase = () => {
        const selectedProduct = products.find((item) => item.Shelf === input); // 查找选中的商品
        if (selectedProduct) {
            updateProductStock(selectedProduct.Shelf, selectedProduct.Slot, selectedProduct.Stock - 1); // 更新商品库存
        }

        /*
            - 问号 ? 是可选链操作符（optional chaining operator）的一部分，它的作用是在访问对象属性或调用方法时，
              如果对象为 null 或 undefined，就不会抛出错误，而是返回 undefined。
            
              这个语法通常用于处理可能存在空值的情况，避免因为空值而导致程序崩溃。

            - selectedProduct?.Shelf 这一行表示如果 selectedProduct 不为 null 或 undefined，就访问它的 Shelf 属性。
              如果 selectedProduct 为 null 或 undefined，那么整个表达式的结果就是 undefined，不会导致运行时错误
        */

        if (selectedProduct?.Shelf) {
            onConfirmPurchase(selectedProduct.Shelf); // 调用父组件的onConfirmPurchase方法，清空输入框，设置动画状态为所选择的货架
        }

        setDisableKeys(false); // 恢复键盘

        setInput(''); // 清空输入框输入状态
    }

    return (
        <div>
            {/* 键盘界面 */}
            <div className='keyboard'>
                <div>
                    <button onClick={() => handleKeyPress('A')} disabled={disableKeys}>A</button>
                    <button onClick={() => handleKeyPress('B')} disabled={disableKeys}>B</button>
                    <button onClick={() => handleKeyPress('C')} disabled={disableKeys}>C</button>
                </div>
                <div>
                    <div>
                        <button onClick={() => handleKeyPress('D')} disabled={disableKeys}>D</button>
                        <button onClick={() => handleKeyPress('E')} disabled={disableKeys}>E</button>
                        <button onClick={() => handleKeyPress('F')} disabled={disableKeys}>F</button>
                    </div>
                </div>
                <div>
                    <button onClick={() => handleKeyPress('1')} disabled={disableKeys}>1</button>
                    <button onClick={() => handleKeyPress('2')} disabled={disableKeys}>2</button>
                    <button onClick={() => handleKeyPress('3')} disabled={disableKeys}>3</button>
                </div>
                <div>
                    <button onClick={() => handleKeyPress('4')} disabled={disableKeys}>4</button>
                    <button onClick={() => handleKeyPress('5')} disabled={disableKeys}>5</button>
                    <button onClick={() => handleKeyPress('6')} disabled={disableKeys}>6</button>
                </div>
            </div>
            {/* 确认、购买、取消按钮 */}
            <div style={{ marginTop: '5px', display: 'flex', justifyContent: 'space-evenly' }}>
                <button onClick={handleConfirm} style={{ width: 'auto', padding: '0 8px' }}>Confirm</button>
                <button onClick={handlePurchase} style={{ width: 'auto', padding: '0 8px' }}>Purchase</button>
                <button onClick={handleCancel} style={{ width: 'auto', padding: '0 8px' }}>Cancel</button>
            </div>
        </div>
    );
};

export default Keyboard; // 导出键盘组件
