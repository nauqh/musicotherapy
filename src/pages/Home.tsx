import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "../assets/Home.css";

const sr = ScrollReveal({
	duration: 3000,
});

const Home = () => {
	const [playlistLink, setPlaylistLink] = useState("");
	const navigate = useNavigate();

	useEffect(() => {
		sr.reveal(`.home__data`, { origin: "top", delay: 100 });
		sr.reveal(`.home__img`, { origin: "bottom", delay: 200 });
		sr.reveal(`.home__footer`, { delay: 800 });
	}, []);

	const handleButtonClick = () => {
		navigate("/input", {
			state: { link: playlistLink },
		});
	};

	return (
		<>
			<section className="home">
				<div className="home__container container">
					<div className="home__data">
						<h1 className="home__title">How sick is your music?</h1>
						<p className="home__description">
							Our sophisticated AI diagnoses and prescribes
							awesome remedies for that awful music taste of
							yours.
						</p>

						<div className="button-container">
							<div className="button" onClick={handleButtonClick}>
								Find out
							</div>
							<a
								href="https://github.com/nauqh/Resonance"
								target="_blank"
								className="button button-alter"
							>
								Learn more
							</a>
						</div>

						<div className="home__input">
							<p className="home__description">
								Or upload your Spotify playlist below
							</p>
							<div className="input-container">
								<form action="">
									<input
										type="text"
										id="lname"
										name="lname"
										placeholder="Insert Spotify playlist link here"
										onChange={(e) =>
											setPlaylistLink(e.target.value)
										}
									/>
								</form>
							</div>
						</div>
					</div>

					<div className="home__img">
						<img src="/shelf.jpeg" alt="" />
						<div className="home__shadow"></div>
					</div>
				</div>

				<footer className="home__footer">
					<div>
						A project by{" "}
						<span
							style={{
								fontSize: "2rem",
								fontWeight: 700,
							}}
						>
							<a href="https://nauqh.github.io">nauqh</a>
						</span>
					</div>
					<span
						style={{
							alignSelf: "flex-end",
							textAlign: "right",
							width: 200,
						}}
					>
						Powered by{" "}
						<a href="https://openai.com/blog/new-embedding-models-and-api-updates">
							OpenAI GPT-4
						</a>
					</span>
				</footer>
			</section>
		</>
	);
};

export default Home;
