import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
	return (
		<>
			<div className="mx-auto my-5 max-w-screen-xl flex flex-col md:min-h-screen">
				<div className="myNav mx-2 p-3 mb-5">
					<ul className="flex flex-row justify-center gap-5">
						<li className="navItem">About Me</li>
						<li className="navItem">Experience</li>
						<li className="navItem">Projects</li>
						<li className="navItem">Contact</li>
					</ul>
				</div>
				<main id="intro" className="px-7 py-14 flex flex-col text-center md:flex-row md:items-center">
					<div className="font-extrabold space-y-1 mb-5">
						<h2 className="text-3xl font-extrabold">Hello! I am</h2>
						<h1 className="text-5xl font-extrabold">Valerio Casadei</h1>
						<h3 className="text-2xl font-extrabold">
							and I am a <span className="orange">Front-end Web Developer</span>
						</h3>{" "}
					</div>
					<div className="flex flex-row justify-center gap-5 mb-5">
						<a href="https://www.linkedin.com/in/valerio-casadei-frontenddeveloper/" target="_blank">
							<i className="bx bxl-linkedin myIcon"></i>
						</a>
						<a href="https://github.com/ValCas18" target="_blank">
							<i className="bx bxl-github myIcon"></i>
						</a>
					</div>
					<div>
						<a href="./assets/[ITA]CV_Casadei_Valerio1.pdf" download>
							<button className="dlBtn px-6 py-3 bg-[#fd7014] text-black rounded-full mb-5 font-bold">
								Download CV
							</button>
						</a>
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
				<section className="px-7 py-14">
					<h2 className="text-3xl font-extrabold text-center">
						My <span className="orange">Skills</span>
					</h2>
					<div className="bg-[#323946] rounded-md px-3 py-6 my-5 text-center">
						<FontAwesomeIcon icon={faLaptopCode} className="orange text-4xl" />
						<h3 className="text-2xl font-extrabold my-3">Frontend Development</h3>
						<p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dolorum?</p>
						<ul className="my-3">
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
							<li>Lorem, ipsum dolor.</li>
						</ul>
					</div>
					<div className="bg-[#323946]">
						<i></i>
						<h3></h3>
						<p></p>
						<ul></ul>
						<ul></ul>
						<ul></ul>
					</div>
				</section>
			</div>
		</>
	);
}

export default App;
