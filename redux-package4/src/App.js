import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './store';
import Cart from './Cart';


function App() {
  return (
    <Provider store={store}>
      <Cart />
    </Provider>

  );
}

export default App;



// Quản lý giỏ hàng mua sắm:
// * Tạo một giỏ hàng mua sắm sử dụng Redux để thêm và xóa sản phẩm, tính tổng giá trị và số lượng sản phẩm trong giỏ hàng.

// npm i redux react-redux