import Footer from "./Footer";
import { addOrder, removeOrder } from "./updateOrder";
import { Link } from "react-router-dom";

const Cart = ({ items, updateCart, list, updateList }) => {
	return (
		<div>
			<section className="cart specials">
				<h1>Your Order</h1>
				<ul>
					{[...list.keys()].map((k) => {
						return (
							<li key={k}>
								<div>
									<p>
										{k} {`$ ${8.5 * list.get(k)}`}
									</p>
								</div>

								<div className="price">
									<button
										className="update-item"
										onClick={() => {
											removeOrder(items, k, list, updateCart, updateList);
										}}
									>
										<i className="fa-solid fa-circle-minus fa-lg"></i>
									</button>
									<p>{list.get(k)}</p>
									<button
										className="update-item "
										onClick={() => {
											addOrder(items, k, list, updateCart, updateList);
										}}
									>
										<i className="fa-solid fa-circle-plus fa-lg"></i>
									</button>
								</div>
							</li>
						);
					})}
				</ul>
				<p>You have {items} items in your cart</p>
				<p>Your total is: ${items * 8.5}</p>
				<button
					onClick={() => {
						updateList(new Map());
						updateCart(0);
					}}
					className="button"
				>
					Clear all
				</button>
			</section>
			<div className="row-buttons">
				<Link to="/menu" className="button">
					Add more items
				</Link>
				<Link to="/cart" className="button">
					Place your order
				</Link>
			</div>

			<div className="space"></div>
			<Footer />
		</div>
	);
};

export default Cart;
