// Component Imports
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

// Image Imports
import { radioLogo } from "../images";

const Radio = () => {
	return (
		<>
			<Navbar />
			<section class="radio__page all__pages">
				<div class="first__container">
					<h4 class="lg__text">Radio</h4>
					<hr class="hr__line" />
					<h5 class="title">Revelation Power Radio Int'l - ABOUT US</h5>
					<img
						src={radioLogo}
						width="30%"
						style={{ float: "left" }}
						alt="Radio Logo"
					/>
					<p class="about__para">
						Revelation Power Radio Int’l is a dynamic Christian internet radio
						in Nigeria with top of the range programs, independently managed
						professional Christian broadcasters, producing quality Christian
						programs to the glory of the Lord. Revelation Power Radio Int’l
						broadcast from Nigeria, to reach the African continent and the world
						at large. The programs range from inspirational, reformative
						devotional content, informative and educational with the intention
						of bringing the full message of the gospel of Jesus through various
						packages to bring much needed change in the body of Christ and the
						world. We create the platform for the ministry gift in the body of
						Christ to use their ministry in it various forms to prepare the
						Church for the return of the Lord Jesus Christ.
					</p>
				</div>

				<div class="second__container">
					<div class="row flex__3">
						<div class="col col__width">
							<h4 class="title capitalize__title">Our Vision</h4>
							<p class="about__para">
								To take the fulness of the gospel of Jesus through the internet
								radio to the local and international listeners.
							</p>
						</div>
						<div class="col col__width">
							<h4 class="title capitalize__title">Our Mission</h4>
							<p class="about__para">
								To be an outstanding internet radio with inspirational,
								reformational, educational and entertaining programs that bring
								wholeness to the spirit, soul and body.
							</p>
						</div>
						<div class="col col__width">
							<h4 class="title capitalize__title">Program Listing</h4>
							<ul class="about__para">
								<li class="list__item">Gospel Messages</li>
								<li class="list__item">Gospel Music</li>
								<li class="list__item">Talk Show</li>
								<li class="list__item">Live Broadcast</li>
								<li class="list__item">Adverts</li>
								<li class="list__item">Sponsored Programs</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Radio;
