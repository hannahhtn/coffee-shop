import {Link} from "react-router-dom";
import Footer from "./Footer";
import Item from "./Item";
import React from "react";

const Menu = ({ items, updateCart, list, updateList }) => {
	return (
		<>
			<main>
				<section className="specials">
					<h1>HOT Drinks</h1>
					<ul>
						<Item
							name={"Latte"}
							data={0}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Flat White"}
							data={1}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Mocha"}
							data={2}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Capu"}
							data={3}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Chai"}
							data={4}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
					</ul>
				</section>

				<section className="specials">
					<h1>COLD Drinks</h1>
					<ul>
						<Item
							name={"Honey Lavender"}
							data={5}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Choco Frap"}
							data={6}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Matcha Frap"}
							data={7}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Cucumber Lemonade"}
							data={8}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Strawberry Matcha"}
							data={9}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
					</ul>
				</section>

				<section className="specials">
					<h1>Grab n Go</h1>
					<ul>
						<Item
							name={"Butter Croissant"}
							data={10}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Turkey Wrap"}
							data={11}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Berry Pie"}
							data={12}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Lemon Bar"}
							data={13}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
						<Item
							name={"Matcha Cookie"}
							data={14}
							items={items}
							updateCart={updateCart}
							list={list}
							updateList={updateList}
						/>
					</ul>
				</section>
			</main>
			<div className="row-buttons">
				<Link to="/specials" className="button">
					Add seasonal specials
				</Link>
				<Link to="/cart" className="button">
					Check out
				</Link>
			</div>
			<div className="space"></div>

			<Footer />
		</>
	);
};

export default Menu;
