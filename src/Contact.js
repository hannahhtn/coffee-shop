import Footer from "./Footer";
const Contact = () => {
	return (
		<div>
			<h1>Leave us a message</h1>
			<form>
				<div className="contact">
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" size="30" required></input>
				</div>

				<div className="contact">
					<label htmlFor="message">Text</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						cols="30"
						required
					></textarea>
				</div>

				<input className="button" type="submit" value="Submit"></input>
			</form>

			<div className="space"></div>
			<Footer />
		</div>
	);
};

export default Contact;
