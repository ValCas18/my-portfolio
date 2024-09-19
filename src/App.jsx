import "./App.css";

function App() {
	return (
		<>
			<div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
				<div className="py-0 md:py-20 flex flex-col md:flex-row justify-center gap-5 h-[100vh]">
					<div className="basis-full md:basis-1/2 flex flex-col justify-between">
						<div>
							<div>
								<h1 className="orange text-5xl font-bold mb-2">Valerio Casadei</h1>
								<h2 className="white text-3xl mb-2">Junior Frontend Developer</h2>
								<p className="max-w-xs">I like to build responsive and accessible interfaces.</p>
							</div>
						</div>
						<div>
							<p>ciao</p>
						</div>
					</div>
					<main className="basis-full md:basis-1/2">
						<section>
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
						</section>
						<section id="about" className="mt-10">
							<h3 className="font-bold white py-5">ABOUT ME</h3>
							<p className="pb-5">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi facere error est dignissimos eaque
								vitae eum labore voluptates! Minus nobis qui beatae necessitatibus tempore architecto asperiores, hic
								pariatur inventore molestias obcaecati, explicabo ad ipsum, doloribus totam at adipisci ducimus
								aspernatur.
							</p>
							<p>Qui scrivo qualcosa su di me</p>
						</section>
						<section id="experience" className="mt-10">
							<h3 className="font-bold white py-5">EXPERIENCE</h3>
							<ol>
								<li className="card mb-3 px-1 py-3 md:p-3 flex flex-col md:flex-row">
									<div className="basis-full md:basis-1/3">
										<p>10/2023 - 03/2024</p>
									</div>
									<div className="basis-full md:basis-2/3">
										<h3 className="white font-bold">Frontend Developer Course • EPICODE</h3>
										<p>descrivo epicode</p>
									</div>
								</li>
								<li className="card mb-3 px-1 py-3 md:p-3 flex flex-col md:flex-row">
									<div className="basis-full md:basis-1/3">
										<p>10/2023 - 03/2024</p>
									</div>
									<div className="basis-full md:basis-2/3">
										<h3 className="white font-bold">Frontend Developer Course • EPICODE</h3>
										<p>descrivo epicode</p>
									</div>
								</li>
							</ol>
						</section>
						<section id="#project" className="mt-10">
							<h3 className="font-bold white py-5">PROJECT</h3>
						</section>
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
