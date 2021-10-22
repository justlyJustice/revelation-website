import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// images
import { photo1, photo2, photo3, photo4 } from "../images";

const Gallery = () => {
	return (
		<>
			<section class="header">
				<Navbar />
			</section>

			<section class="gallery__page all__pages">
				<div class="first__container">
					<h4 class="lg__text">Gallery</h4>
					<hr class="hr__line" />
					<div class="row">
						<div class="col">
							<img src={photo1} alt="GalleryPhoto" />
						</div>
						<div class="col">
							<img src={photo2} alt="GalleryPhoto" />
						</div>
						<div class="col">
							<img src={photo3} alt="GalleryPhoto" />
						</div>
						<div class="col">
							<img src={photo4} alt="GalleryPhoto" />
						</div>
					</div>
				</div>

				<Footer />
			</section>
		</>
	);
};

export default Gallery;
