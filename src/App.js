import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Specials from "./Specials";
import Cart from "./Cart";
import Contact from "./Contact";
import { useState } from "react";

const App = () => {
	const [itemNums, setNums] = useState(0);
	const [listItems, updateList] = useState(new Map());
	return (
		<Router>
			<div className="App">
				<header>
					<ul className="nav-bar">
						<Link to="/">Home</Link>
						<Link to="./specials">Specials</Link>
						<Link to="./menu">Menu</Link>
						<Link to="./cart">Cart</Link>
						<Link to="./contact">Contact</Link>
					</ul>
				</header>
				<Routes>
					<Route path="/" exact element={Home}></Route>
					<Route
						path="./menu"
						element={
							<Menu
								list={listItems}
								updateList={updateList}
								items={itemNums}
								updateCart={setNums}
							/>
						}
					></Route>
					<Route
						path="./specials"
						element={
							<Specials
								list={listItems}
								updateList={updateList}
								items={itemNums}
								updateCart={setNums}
							/>
						}
					></Route>
					<Route
						path="./cart"
						element={
							<Cart
								list={listItems}
								updateList={updateList}
								items={itemNums}
								updateCart={setNums}
							/>
						}
					></Route>
					<Route path="./contact" element={Contact}></Route>
					<Route path="*" element={Home}></Route>
				</Routes>
			</div>
		</Router>
	);
};

export default App;
