import { Link } from "react-router-dom";
import pic1 from "./coffee1.jpg";
import pic2 from "./coffee2.jpg";
import Footer from "./Footer";

const Home = () => {
	return (
		<>
			<main>
				<section className="welcome">
					<p>Hi there,</p>
					<h1>Wanna get started on your order?</h1>
					<Link to="./menu" className="button">
						MENU
					</Link>
				</section>

				<section className="intro">
					<h1>OUR STORY</h1>
					<div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
							architecto et reiciendis modi ipsam qui, asperiores amet laborum
							earum consectetur harum ea reprehenderit expedita quidem, optio
							sunt veniam libero quis. Ex nostrum non quas et, facere mollitia
							suscipit quidem id autem ipsam repudiandae quo veniam eligendi
							iste pariatur alias, saepe quos sapiente repellat? Quae,
							temporibus quam! Placeat ducimus blanditiis inventore!...
						</p>
						<img src={pic1} alt="our coffee beans" />
					</div>

					<div>
						<img src={pic2} alt="our coffee beans" />
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Voluptatum ex eum maiores dolore tenetur perspiciatis unde. Iste,
							distinctio! Odio, sint aliquid neque quo quisquam sunt magni
							accusantium dolor sed nemo.
						</p>
					</div>
				</section>
			</main>
			<div className="space"></div>
			<Footer />
		</>
	);
};

export default Home;
