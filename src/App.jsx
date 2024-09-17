import "./App.css";

function App() {
	return (
		<>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className=" py-20 flex flex-row justify-center gap-5 h-[100vh]">
					<div className="basis-1/2 flex flex-col justify-between">
						<div>
							<div>
								<h1 className="white text-6xl font-bold mb-2">Valerio Casadei</h1>
								<h2 className="white text-3xl mb-2">Junior Frontend Developer</h2>
								<p className="max-w-xs">I like to build responsive and accessible interfaces.</p>
							</div>
							<div className="mt-12 leading-10">
								<span>Navigate to...</span>
								<ul>
									<li>
										<a href="#section1" class="navButton">
											ABOUT ME
										</a>
									</li>
									<li>
										<a href="#experience">
											<span className="white font-bold">EXPERIENCE</span>
										</a>
									</li>
									<li>
										<a href="#projects">
											<span className="white font-bold">PROJECTS</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
						<div>
							<p>ciao</p>
						</div>
					</div>
					<div className="w-1/2">
						<div>
							<h1>Valerio</h1>
						</div>
						<div>
							<p>ciao</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
