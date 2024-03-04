const Hero=()=>{
	return (
		<>
			<main className="hero container">
				<div className="hero-content">
					<h1>YOUR FEET DESERVES THE BEST</h1>
					<p>
						YOUR FEET DESERVE THE BEST AND WH'RE HERE TO HELP YOU WITH OUR SHOES. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHORES.
					</p>
					<div className="hero-btn">
						<button>Shop Now</button>
						<button className="secondary-btn">Category</button>
					</div>
					<div className="shopping">
						<p>Also available on</p>
					</div>
					<div className="brand-icons">
						<img src="/images/flipcart.png" alt=""className="brandimage"/>
						<img src="/images/amazon.png" alt=""className="brandimage"/>
					</div>
				</div>
				<div className="hero-image">
					<img src="/images/shoe.png" alt="shoe" className="shoeimage"/>
				</div>
			</main>
		</>
		)
}
export default Hero;