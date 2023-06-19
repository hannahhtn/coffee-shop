import { addOrder } from "./updateOrder";

const Item = ({ name, data, items, updateCart, list, updateList }) => {

	return (
		<li>
			<p>{name}</p>
			<div className="price">
				<p>$8.50</p>
				<button
					onClick={() => {
						addOrder(items, name, list, updateCart, updateList);
					}}
					data-key={data}
					className="update-item"
				>
					<i className="fa-solid fa-circle-plus fa-lg"></i>
				</button>
			</div>
		</li>
	);
};

export default Item;
