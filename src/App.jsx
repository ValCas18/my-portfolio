import { faArrowRight, faLaptopCode, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import wowImg from "./assets/wow.png";
import postitImg from "./assets/postit.png";
import galleryImg from "./assets/gallery.png";
import weatherImg from "./assets/weather.png";
import spotifyImg from "./assets/spotify.png";
import quizImg from "./assets/quiz.png";

function App() {
	return (
		<>
			<div className="mx-auto mt-5 max-w-screen-xl flex flex-col md:min-h-screen">
				<div className="myNav mx-2 p-3 mb-5 sticky top-0">
					<ul className="flex flex-row justify-center gap-5">
						<li className="navItem" href="#about">
							<a href="#about">About Me</a>
						</li>
						<li className="navItem" href="#skill">
							<a href="#skill">Skills</a>
						</li>
						<li className="navItem">
							<a href="#project">Projects</a>
						</li>
						<li className="navItem">
							<a href="#contact">Contact</a>
						</li>
					</ul>
				</div>
				<main id="intro" className="px-7 py-14 flex flex-col text-center">
					<div className="font-extrabold space-y-1 mb-5">
						<h2 className="text-3xl font-extrabold">Hello! My name is</h2>
						<h1 className="text-5xl font-extrabold">Valerio Casadei</h1>
						<h3 className="text-2xl font-extrabold">
							and I am a{" "}
							<span className="orange">
								Front-end <br className="md:hidden"></br>Web Developer
							</span>
						</h3>{" "}
					</div>
					<div className="flex flex-row justify-center gap-5 mb-5 md:flex-col md:items-center">
						<div className="flex flex-col gap-5 md:flex-row">
							<div className="flex flex-row justify-center gap-5">
								<a href="https://www.linkedin.com/in/valerio-casadei-frontenddeveloper/" target="_blank">
									<FontAwesomeIcon icon={faLinkedinIn} className="myIcon" />
								</a>
								<a href="https://github.com/ValCas18" target="_blank">
									<FontAwesomeIcon icon={faGithub} className="myIcon" />
								</a>{" "}
							</div>
							<a href="/[ITA]CV_Casadei_Valerio1.pdf" download>
								<button className="dlBtn px-6 py-3 bg-[#fd7014] text-black rounded-full mb-5 font-bold">
									Download CV
								</button>
							</a>
						</div>
					</div>
				</main>
				<section id="about" className="px-7 py-14">
					<div>
						<h2 className="text-3xl font-extrabold text-center">
							About <span className="orange">Me</span>
						</h2>
						<p className="my-5">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit sapiente ducimus earum quaerat at maiores
							nesciunt nulla commodi quas ipsam.
						</p>
						<p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, soluta.</p>
					</div>
				</section>
				<section id="skill" className="px-7 py-14">
					<h2 className="text-3xl font-extrabold text-center">
						My <span className="orange">Skills</span>
					</h2>
					<div className="flex flex-col lg:flex-row lg:gap-20">
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center">
							<FontAwesomeIcon icon={faLaptopCode} className="orange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Frontend Development</h3>
							<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum?</p>
							<ul className="my-3">
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
							</ul>
						</div>
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center">
							<FontAwesomeIcon icon={faUsers} className="orange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Soft Skill</h3>
							<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum?</p>
							<ul className="my-3">
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
							</ul>
						</div>
					</div>
				</section>
				<section id="project" className="bg-[#323946] px-7 py-14">
					<div className="flex flex-col gap-10">
						<div className="relative group">
							<img src={galleryImg} alt="gallery project" className="basis-full rounded-md" />{" "}
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
						<div className="relative group">
							<img src={postitImg} alt="post-it project" className="basis-full rounded-md" />
							<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">Gallery Project</h2>
								<p className="mt-2">A showcase of images with hover effects</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
						<div className="relative group">
							<img src={weatherImg} alt="weather app project" className="basis-full rounded-md" />{" "}
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
						<div className="relative group">
							<img src={wowImg} alt="wow character finder project" className="basis-full rounded-md" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
						<div className="relative group">
							<img src={spotifyImg} alt="spotify clone project" className="basis-full rounded-md" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
						<div className="relative group">
							<img src={quizImg} alt="quiz project" className="basis-full rounded-md" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="px-7 py-14">
					<h2 className="text-3xl font-extrabold text-center">
						My <span className="orange">Skills</span>
					</h2>
					<div className="flex flex-col lg:flex-row lg:gap-20">
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center">
							<FontAwesomeIcon icon={faLaptopCode} className="orange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Frontend Development</h3>
							<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum?</p>
							<ul className="my-3">
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
							</ul>
						</div>
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center">
							<FontAwesomeIcon icon={faUsers} className="orange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Soft Skill</h3>
							<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum?</p>
							<ul className="my-3">
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
								<li>Lorem, ipsum dolor.</li>
							</ul>
						</div>
					</div>
				</section>
				<footer className="bg-[#323946]">
					<p className="text-center p-8 text-sm">Copyright© 2024 by Valerio Casadei</p>
				</footer>
			</div>
		</>
	);
}

export default App;
