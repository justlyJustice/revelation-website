import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { worship } from "../images";

const About = () => {
	return (
		<>
			<section className="header">
				<Navbar />
			</section>

			<section className="about__page all__pages">
				<div className="first__container">
					<h4 className="lg__text">About Us</h4>
					<hr className="hr__line" />
					<h5 className="title">The Church</h5>
					<p className="about__para">
						Revelation Power Christian Assembly Inc. is a church rooted in the
						word of God and power of the Holy Spirit. We present the word of God
						systematically and analytically. The result is pure and Holy living,
						preparing us for eternity with Jesus, power for service in God’s
						house and prosperity materially and otherwise in this life. We are a
						happy people that love fellowship with God. We lead our congregation
						in spirit filled, Bible-based and result oriented prayers that
						produce miracles, signs and wonders. We are committed to a
						comprehensive development of the believer in Christ, preparing them
						to be useful in this life and life to come. We are addicted to
						fulfilling God’s vision for us as a church and also committed to
						helping our members fulfil their personal vision in life. Revelation
						Power Christian Assembly is not just a church, it is an assignment,
						from God. This is why we want you to be a part of this great vision,
						you will be happy you did.
					</p>
					<h5 className="title">Cell Church (House Fellowship)</h5>
					<p className="about__para">
						The Cell System is very important for the overall fulfilment of our
						co-operate vision. Every member must have a cell he/she belongs to
						for closer fellowship and identification and welfare delivery. Our
						cell groups are our outreach centre. It takes the ministry closer to
						the people.
						<br />
						<span>CELL MEETING DAYS: Mondays (5:00pm)</span>
					</p>
				</div>

				<div className="second__container">
					<img src={worship} alt={worship} />
					<div className="content">
						<div className="row">
							<div className="first__column">
								<h5 className="title">Service Days & Special Programme</h5>
								<hr />
							</div>

							<div className="second__column">
								<div className="col col-1">
									<p className="service__day">Sundays </p>
									<p className="service">
										Blood Empower Service
										<i className="fas fa-clock fa-sm"></i>&nbsp;<b>8am</b>
									</p>
								</div>
								<hr />
								<div className="col col-2">
									<p className="service__day">Thursdays</p>
									<p className="service">
										Covenant Communion Service
										<i className="fas fa-clock fa-sm"></i>&nbsp; <b>5pm</b>
									</p>
								</div>
								<hr />
								<div className="col col-3">
									<p className="service__day">First Day of the Month</p>
									<p className="service">
										New Moon Festival <i className="fas fa-clock fa-sm"></i>
										&nbsp; <b>6am</b>
									</p>
								</div>
								<hr />
								<div className="col col-4">
									<p className="service__day">
										First Friday of the Every Month
									</p>
									<p className="service">
										A night of Comprehensive Touch,
										<br />
										an all night meeting for signs, wonder, miracles &
										deliverance by the power of the Holy Ghost
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="third__container">
					<div className="row flex__3">
						<div className="col col__width">
							<h4 className="title capitalize__title">Our Vision</h4>
							<p className="about__para">
								Like an eagle, our vision is very clear. Preaching Christ to
								save souls and training them for service in God’s house and
								mission in the world.
							</p>
						</div>
						<div className="col col__width">
							<h4 className="title capitalize__title">Our Mission</h4>
							<ul className="about__para">
								<li className="list__item">
									Intercession for the church and nations
								</li>
								<li className="list__item">
									Evangelism and Mission (Church Planting)
								</li>
								<li className="list__item">
									Leading the people of God in quality spirit-filled worship
								</li>
								<li className="list__item">
									Training for workers, leaders, missionaries and pastors
								</li>
								<li className="list__item">
									Multi-media, Radio and T.V. Outreaches
								</li>
							</ul>
						</div>

						<div className="col col__width">
							<h4 className="title capitalize__title">Service Units</h4>
							<ul className="about__para">
								<li className="list__item">Worship Team</li>
								<li className="list__item">Prayer Bank</li>
								<li className="list__item">Protocol</li>
								<li className="list__item">Palace Guide (Ushering)</li>
								<li className="list__item">Health Care</li>
								<li className="list__item">Power and Light</li>
								<li className="list__item">Multi-media</li>
								<li className="list__item">Sound/Tech</li>
								<li className="list__item">Sanitation</li>
								<li className="list__item">Decoration</li>
								<li className="list__item">Welfare</li>
								<li className="list__item">Security</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="fourth__container">
					<h4 className="title title__branch">Branches</h4>
					<div className="row">
						<div className="col col-1">
							<h5 className="title">Azikoro Branch:</h5>
							<p>
								After UBE School, BestMan Street, Azikoro, Yenagoa, Bayelsa
								State
							</p>
						</div>
						<div className="col col-2">
							<h5 className="title">Ayama Branch:</h5>
							<p>Ayama Town, Yenagoa, Bayelsa State</p>
						</div>
					</div>
				</div>
			</section>

			<Footer />
		</>
	);
};

export default About;
