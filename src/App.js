import { useEffect } from 'react';
import NavBar from './components/NavBar';

import CartContainer from './components/CartContainer';
import { useDispatch, useSelector } from 'react-redux';
import { calculateTotals } from './features/cart/cartSlice';
import Modal from './components/Modal';

function App() {
	const { cartItems } = useSelector((store) => store.cart);
	const { isOpen } = useSelector((store) => store.modal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotals());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cartItems]);
	return (
		<main>
			{isOpen && <Modal />}
			<NavBar />
			<CartContainer />
		</main>
	);
}
export default App;
