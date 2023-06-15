import React from 'react';
import './App.css';

import { HeroTopNav } from './components/topnav';

function App() {
	return (
		<div className="App">

			<div className="hero">
				<HeroTopNav />
			</div>

			<div id="home">
				<h1>Home</h1>

			</div>

			<div id="dict">
				<h1>Dictionary</h1>
			</div>

			<div id="about">
				<h1>About us</h1>
				<div className="about-desc">
					<p>
						Welcome to the wondrous world of Unwords! We are your humble guides through the tangled and often bewildering
						realm of nonexistent words. Nestled deep within the nooks and crannies of language, we have set out on a daring
						mission to bring you the most outrageous, absurd, and post-ironic definitions that can only exist in the whimsical
						corridors of our imaginations. <br /><br />

						At Unwords, we believe that language is not just a means of communication, but also a playground for creativity an
						boundless exploration. We revel in the delightful chaos that arises when words transcend their traditional definitions
						and take on new, unconventional meanings. Our aim is to blur the lines between reality and the fantastical, challenging
						linguistic norms with a mischievous twinkle in our eyes.<br /><br />

						Our team of intrepid word inventors scours the depths of linguistic possibility, conjuring up delightful and
						thought-provoking expressions that will tickle your brain and make you question everything you thought you knew
						about words. We believe that there's a certain magic in the absurd and the nonsensical, and we invite you to join
						us on this linguistic adventure.<br /><br />

						Whether you're a linguistics aficionado seeking to expand your lexicon, a poet in search of unconventional
						inspiration, or simply someone who revels in the sheer joy of linguistic playfulness, Unwords is your sanctuary.
						We celebrate the strange, the quirky, and the utterly made-up. Dive into our ever-growing collection of nonexistent
						words, where you'll discover linguistic marvels that will leave you chuckling, scratching your head, and perhaps even
						questioning the very fabric of reality.<br /><br />

						But Unwords is more than just a dictionary of imaginary expressions. It's a vibrant community of word enthusiasts who
						come together to revel in the beauty of linguistic invention. Connect with fellow language rebels, share your own invented
						words, and engage in spirited discussions about the delightful world of linguistic absurdity.<br /><br />

						So, dear visitor, step into the realm of Unwords and prepare to have your mind delightfully twisted and your laughter
						unleashed. Open your mind to the boundless possibilities of language, where words dance and meanings morph in glorious,
						nonsensical harmony. Welcome to our post-ironic dictionary wonderland. We're thrilled to have you join us on this peculiar
						journey through the labyrinth of Unwords!
					</p>
				</div>
			</div>

			<div id="contact" className="website-body">
				<h1>Contact us</h1>
			</div>


		</div>
	);
}

export default App;
