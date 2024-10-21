import { faArrowRight, faEnvelope, faLaptopCode, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import "./App.css";
import wowImg from "./assets/wow.png";
import postitImg from "./assets/postit.png";
import galleryImg from "./assets/gallery.png";
import weatherImg from "./assets/weather.png";
import spotifyImg from "./assets/spotify.png";
import quizImg from "./assets/quiz.png";
import html from "./assets/html-5.362x512.png";
import css from "./assets/css-3.svg";
import sass from "./assets/sass.svg";
import bootstrap from "./assets/bootstrap.svg";
import tailwind from "./assets/tailwind-css.svg";
import js from "./assets/javascript-js.svg";
import ts from "./assets/typescript-icon.svg";
import react from "./assets/react-original-wordmark.svg";
import redux from "./assets/redux-original.svg";
import github from "./assets/github-original-wordmark.svg";

function App() {
	return (
		<>
			<div className="mt-5 max-w-screen-2xl flex flex-col justify-center md:min-h-screen">
				<div className="myNav mx-2 p-3 mb-5 sticky top-0 z-50">
					<ul className="flex flex-row justify-center md:justify-evenly gap-5">
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
						<h1 className="text-5xl font-extrabold text-myOrange">Valerio Casadei</h1>
						<h3 className="text-2xl font-extrabold">
							and I am a{" "}
							<span className="text-myOrange">
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
							<a href="/public/[ITA]CV_ValerioCasadei.pdf" download>
								<button className="dlBtn px-6 py-3 bg-[#fd7014] text-black rounded-full mb-5 font-bold">
									Download CV
								</button>
							</a>
						</div>
					</div>
				</main>
				<section id="about" className="px-7 py-14 rounded-md">
					<div>
						<h2 className="text-3xl font-extrabold text-center">
							About <span className="text-myOrange">Me</span>
						</h2>
						<p className="my-5">
							The journey that brought me to the world of web development started from somewhere unexpected: sociology.
							While studying the complexities and intricacies of human society and behavior has always been an interest
							of mine, after earning both a Bachelor's Degree and a Master's Degree in Sociology, I decided to change my
							path and follow my passion for technology and innovation. Embracing the challenge of becoming a
							<strong className="text-myOrange"> frontend developer</strong> was my next step.
						</p>
						<p className="my-5">
							I joined an online course at Epicode, where I progressed from the basics of HTML and CSS to more complex
							technologies, languages, and libraries such as{" "}
							<span className="text-myOrange font-bold">JavaScript, React, Redux, Bootstrap,</span> and{" "}
							<span className="text-myOrange font-bold">Tailwind</span>. I strive to learn something new every day and
							continuously practice to hone my web development skills. What I truly enjoy about frontend development is
							the opportunity to create functional, innovative, eye-catching, and responsive websites and interfaces.
						</p>
						<p className="my-5">
							Beyond my technical skills, my background in sociology and my hobbies have taught me{" "}
							<span className="text-myOrange font-bold">empathy</span> and{" "}
							<span className="text-myOrange font-bold">teamwork</span>, providing me with a unique perspective on user
							experience and design.
						</p>
						<p className="my-5">
							When I'm not coding, you'll find me immersing myself in my other passions: playing the guitar and
							listening to rock music (especially punk and metalcore), catching up on the latest science articles, or
							enjoying a good movie: Interstellar and The Lord of the Rings are my all-time favorites. I'm also an avid
							gamer, often exploring the fields of Azeroth in World of Warcraft (For the Alliance!).
						</p>
						<p className="my-5">I can't wait to put my skills to the test and grow in this dynamic field!</p>
					</div>
				</section>
				<section id="skill" className="px-7 md:px-0 py-14">
					<h2 className="text-3xl font-extrabold text-center">
						My <span className="text-myOrange">Skills</span>
					</h2>
					<div className="flex flex-col lg:flex-row lg:gap-20">
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center border-2 border-transparent hover:border-orange-500 hover:scale-110 transform transition-all duration-500 origin-center">
							<FontAwesomeIcon icon={faLaptopCode} className="text-myOrange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Frontend Development</h3>
							<p className="my-3">I enjoy creating responsive and captivating interfaces using:</p>
							<ul className="my-3">
								<li>HTML, CSS, JS</li>
								<li>Bootstrap, Taiwind</li>
								<li>React, Redux</li>
							</ul>
						</div>
						<div className="bg-[#323946] basis-1/2 rounded-md px-3 py-6 my-5 text-center border-2 border-transparent hover:border-orange-500 hover:scale-110 transform transition-all duration-500 origin-center">
							<FontAwesomeIcon icon={faUsers} className="text-myOrange text-4xl" />
							<h3 className="text-2xl font-extrabold my-3">Soft Skill</h3>
							<p className="my-3">
								Developed in my previous studying and working experiences, and honed through my hobbies and passions.
							</p>
							<ul className="my-3">
								<li>Empathy</li>
								<li>Teamplay</li>
								<li>Dedication, Perseverance</li>
							</ul>
						</div>
					</div>
					<div className="flex flex-wrap gap-3 justify-evenly my-12">
						<img
							src={html}
							alt="html logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={css}
							alt="css logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={sass}
							alt="sass logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={bootstrap}
							alt="bootstrap logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={tailwind}
							alt="tailwind logo"
							className="w-1/6  md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={js}
							alt="js logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={ts}
							alt="ts logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={react}
							alt="react logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={redux}
							alt="redux logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
						<img
							src={github}
							alt="github logo"
							className="w-1/6 md:w-1/10 lg:w-1/12 transition-transform duration-500 ease-in-out transform hover:scale-150"
						/>
					</div>
				</section>
				<section id="project" className="bg-[#323946] px-7 py-14 rounded-md">
					<h2 className="text-3xl font-extrabold mb-5 text-center">
						My <span className="text-myOrange">Projects</span>
					</h2>
					<div className="flex flex-wrap gap-5 justify-center py-5">
						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md">
							<img src={galleryImg} alt="gallery project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">My Gallery</h2>
								<p className="mt-2 overflow-hidden max-h-24">Images showcase app. API Fetch and Tailwind practice.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>

						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md">
							<img src={postitImg} alt="post-it project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">Post-it Project</h2>
								<p className="mt-2 overflow-hidden max-h-24">
									Add or remove post-it from this To-Do-List, cartoonish style.
								</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>

						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md b g-contain">
							<img src={weatherImg} alt="weather app project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">WeatherApp</h2>
								<p className="mt-2 overflow-hidden max-h-24">
									A weather forecast app, backgrounds changes depending on weather.
								</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>

						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md">
							<img src={wowImg} alt="wow character finder project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">WoW Finder</h2>
								<p className="mt-2 overflow-hidden max-h-24">Epicode capstone project, find your WoW Character!</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>

						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md">
							<img src={spotifyImg} alt="spotify clone project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">Spotify Clone</h2>
								<p className="mt-2 overflow-hidden max-h-24">Group Project, practiced JS and Bootstrap.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>

						<div className="relative group w-full md:w-[40em] flex-shrink-0 rounded-md">
							<img src={quizImg} alt="quiz project" className="rounded-md group-hover:opacity-25" />
							<div className="px-3 text-center absolute bottom-0 left-0 right-0 bg-gradient-to-t from-orange-500 to-transparent flex flex-col items-center justify-center text-white h-0 opacity-0 transition-all duration-500 ease-in-out group-hover:h-full group-hover:opacity-100 rounded-md">
								<h2 className="text-3xl font-bold">Epicode Quiz</h2>
								<p className="mt-2 overflow-hidden max-h-24">Group Project, my very first work with JS.</p>
								<a href="https://github.com/ValCas18/mygallery-app" target="_blank" rel="noopener noreferrer">
									<FontAwesomeIcon icon={faArrowRight} className="mt-5 border-2 rounded-full p-2" />
								</a>
							</div>
						</div>
					</div>
				</section>
				<section id="contact" className="px-7 py-14 my-24 text-center">
					<h2 className="text-3xl font-extrabold mb-5">
						Interested in a collaboration? <span className="text-myOrange">Contact me!</span>
					</h2>
					<div className="inline-block">
						<a
							href="mailto:valeriocasadei18@gmail.com"
							className="dlBtn border-2 border-myOrange px-14 py-4 rounded-md bg-myOrange text-black font-bold flex items-center justify-center ease-in-out hover:bg-myOrange hover:text-myWhite hover:shadow-[0_0_15px_#fd7014,_0_0_30px_#fd7014] transition-shadow duration-1000 group"
						>
							<FontAwesomeIcon
								icon={faEnvelope}
								className="text-5xl text-black transition-colors duration-500 group-hover:text-myWhite"
							/>
						</a>
					</div>
				</section>
				<footer className="bg-[#323946] rounded-t-md">
					<p className="text-center p-7 text-sm italic">Copyright© 2024 by Valerio Casadei</p>
				</footer>
			</div>
		</>
	);
}

export default App;
