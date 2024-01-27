import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "scrollreveal";
import "../assets/Home.css";

const sr = ScrollReveal({
	distance: "60px",
	duration: 2500,
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
							Our sophisticated AI will recommend you new songs!
							And judge your awful taste in music.
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
										defaultValue="Insert Spotify playlist link here"
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
					A project by{" "}
					<span
						style={{
							fontSize: "1.5rem",
							fontWeight: 500,
						}}
					>
						<a href="https://nauqh.github.io" target="_blank">
							nauqh
						</a>
					</span>
				</footer>
			</section>
		</>
	);
};

export default Home;
