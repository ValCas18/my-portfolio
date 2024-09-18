import "./App.css";

function App() {
	return (
		<>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="py-0 md:py-20 flex flex-col md:flex-row justify-center gap-5 h-[100vh]">
					<div className="basis-full md:basis-1/2 flex flex-col justify-between">
						<div>
							<div>
								<h1 className="white text-5xl font-bold mb-2">Valerio Casadei</h1>
								<h2 className="white text-3xl mb-2">Junior Frontend Developer</h2>
								<p className="max-w-xs">I like to build responsive and accessible interfaces.</p>
							</div>
						</div>
						<div>
							<p>ciao</p>
						</div>
					</div>
					<div className="basis-full md:basis-1/2">
						<div>
							<span className="font-bold">Navigate to...</span>
							<ul className="flex flex-row justify-between mt-5">
								<li>
									<a href="#about" className="navButton">
										ABOUT ME
									</a>
								</li>
								<li>
									<a href="#experience" className="navButton">
										EXPERIENCE
									</a>
								</li>
								<li>
									<a href="#project" className="navButton">
										PROJECT
									</a>
								</li>
							</ul>
						</div>
						<div id="about" className="mt-10">
							<h3 className="font-bold white py-5">ABOUT</h3>
							<p className="pb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere error est dignissimos eaque
								vitae eum labore voluptates! Minus nobis qui beatae necessitatibus tempore architecto asperiores, hic
								pariatur inventore molestias obcaecati, explicabo ad ipsum, doloribus totam at adipisci ducimus
								aspernatur.
							</p>
							<p>Qui scrivo qualcosa su di me</p>
						</div>
						<div id="experience" className="mt-10">
							<h3 className="font-bold white py-5">EXPERIENCE</h3>
							<ol>
								<li className="flex flex-row">
									<div className="basis-full md:basis-4/12">
										<p>10/2023 - 03/2024</p>
									</div>
									<div className="basis-full md:basis-8/12">
										<h3 className="white font-bold">Frontend Developer Course • EPICODE</h3>
										<p>descrivo epicode</p>
									</div>
								</li>
								<li></li>
							</ol>
						</div>
						<div id="#project" className="mt-10">
							<h3 className="font-bold white py-5">PROJECT</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
