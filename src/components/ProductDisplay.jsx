import { useVendingMachineContext } from '../context/VendingMachineContext'; // 导入自定义Hook以获取上下文信息

// 产品展示组件
function ProductDisplay(props) {
  const { products, settings } = useVendingMachineContext(); // 使用自定义Hook获取上下文信息
  const rows = Math.ceil(products.length / settings.rowsAvailable); // 计算行数

  // 计算下落距离
  const calculateDropDistance = () => {
    let rowIndex;
    const firstLetter = props.animation.charAt(0).toUpperCase(); // 获取动画第一个字母并转为大写
    switch (firstLetter) {
      case 'A':
        rowIndex = 0;
        break;
      case 'B':
        rowIndex = 1;
        break;
      case 'C':
        rowIndex = 2;
        break;
      case 'D':
        rowIndex = 3;
        break;
      case 'E':
        rowIndex = 4;
        break;
      case 'F':
        rowIndex = 5;
        break;
      default:
        rowIndex = 0; // 默认为第一行
    }
    return (6 - rowIndex) * 220; // 返回下落距离
  };

  // 处理图片点击事件
  const handleImageClick = (product) => {
    if (product.Shelf === props.animation) {
      props.handleAnimationChange(); // 切换动画状态
    }
  };

  return (
    <div className="product-display">
      {/* 显示产品 */}
      {Array.from({ length: rows }, (_, rowIndex) => (
        <div key={rowIndex} className="product-row">
          {products
            .slice(rowIndex * settings.rowsAvailable, (rowIndex + 1) * settings.rowsAvailable)
            .map((product, index) => (
              <div key={index} className="product-item">
                {/* 产品图片 */}

                {/*   

                  这行代码是一段使用了 JSX 语法的 React 组件代码，主要是用于渲染一个产品图片。

                    1. `<img>` 标签用于在网页上显示图像。

                    2. `className="product-image"`：这是给 `<img>` 元素添加了一个 CSS 类名，用于样式控制或者选择器定位。

                    3. `src={product.ImageURL}`：这个部分定义了图像的来源 URL。
                                                `product.ImageURL` 变量应该是从组件的 props 中传递而来，用于显示特定产品的图像。

                    4. `alt={product.Name}`：这个部分定义了图像的替代文本，如果图像无法显示时会出现在图像的位置。
                                             通常会使用产品的名称或者描述性的文字。

                    5. `style={{...}}`：这个部分定义了图像的样式，采用了内联样式的方式。
                                        在这里，样式是作为一个 JavaScript 对象传递的，包含了一些属性和对应的值。

                    6. `transform: product.Shelf === props.animation ? \`translateY(${calculateDropDistance()}px)\` : 'none'`：

                        这个样式属性是根据条件来决定图像的变换效果。
                        如果 `product.Shelf` 等于 `props.animation`，则图像会根据 `calculateDropDistance()` 函数返回的像素值在垂直方向上进行移动（通过 translateY 变换）。
                        否则，图像的变换效果为 'none'，即没有变换。
                        
                    7. `opacity: '1'`：这个样式属性设置了图像的不透明度为 1，表示完全不透明，即图像完全可见。

                    综上所述，这行代码的作用是渲染一个产品图片，并根据条件设置了图像的变换效果和不透明度。
                
                */}
                <img className="product-image"
                  src={product.ImageURL} alt={product.Name} style={{
                    transform: product.Shelf === props.animation ? `translateY(${calculateDropDistance()}px)` : 'none', 
                    opacity: '1' // 设置透明度
                  }}

                  // 点击事件处理函数，当用户点击产品图片时触发，将动画状态切换成 ''
                  onClick={() => handleImageClick(product)} />
                <div className="product-name">{product.Name}</div> {/* 产品名称 */}
                <div className="product-shelf">{product.Shelf}</div> {/* 货架编号 */}
                <div className="product-stock">Stock: {product.Stock}</div> {/* 库存信息 */}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default ProductDisplay; // 导出产品展示组件



