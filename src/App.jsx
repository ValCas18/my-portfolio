import "./App.css";
import "boxicons";

function App() {
	return (
		<>
			<div className="mx-auto min-h-screen max-w-screen-xl my-5 flex flex-col">
				<div className="myNav mx-2 p-3 mb-5">
					<ul className="flex flex-row justify-center gap-5">
						<li>About Me</li>
						<li>Experience</li>
						<li>Projects</li>
						<li>Contact</li>
					</ul>
				</div>
				<main id="about" className="mx-7 flex flex-col md:items-center">
					<div className="font-bold space-y-1 mb-5">
						<h2 className="text-3xl">Hello! I am</h2>
						<h1 className="text-5xl">Valerio Casadei</h1>
						<h3 className="text-2xl">
							and I am a <span className="orange">Front-end Web Developer</span>
						</h3>{" "}
					</div>
					<div className="flex flex-row gap-5 mb-5">
						<a href="https://www.linkedin.com/in/valerio-casadei-frontenddeveloper/" target="_blank">
							<i className="bx bxl-linkedin myIcon"></i>
						</a>
						<a href="https://github.com/ValCas18" target="_blank">
							<i className="bx bxl-github myIcon"></i>
						</a>
					</div>
					<div>
						<a href="./assets/[ITA]CV_Casadei_Valerio1.pdf" download>
							<button className="dlBtn px-6 py-3 bg-[#fd7014] text-black rounded-full mb-5">Download CV</button>
						</a>
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
