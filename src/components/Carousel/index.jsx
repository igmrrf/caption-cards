import React from "react";
import { Carousel } from "react-bootstrap";
import Card from "../Card/Card";

export default function index() {
	return (
		<div>
			<Carousel>
				<Carousel.Item>
					<div className="slide-cards">
						<h3>Finance""</h3>"
						<div className="slide-card">
							<Card />
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="slide-cards">
						<h3>Quotes</h3>"
						<div className="slide-card">
							<Card />
						</div>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="slide-cards">
						<h3>Lifestyle</h3>"
						<div className="slide-card">
							<Card />
						</div>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}
