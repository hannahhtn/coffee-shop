import Footer from "./Footer";
import Item from "./Item";
import { Link } from "react-router-dom";
const Specials = ({items, updateCart, list, updateList}) => {
	return (
		<div>
			<main>
				<section className="specials">
					<h1>Our Seasonal Specials</h1>
					<ul>
						<Item
							name={"Egg Coffee"}
							data={0}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Irish Cream"}
							data={1}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Lavender Latte"}
							data={2}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Honey n Cinnamon"}
							data={3}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Choco Raspberry"}
							data={4}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
					</ul>
				</section>
			</main>
			<div className="row-buttons">
				<Link to="/menu" className="button">
					Main menu
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

export default Specials;
