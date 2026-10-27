
import './App.css'
function App() {
    return (
        <>
            <header className="site-header">
                <nav>
                    <a href="#work">
                        Work
                    </a>
                    <a href="#about">
                        About
                    </a>
                    <a href="/contact">
                        Contact
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
            </header>

            <main>
                <section className="hero">
                    <p className="name">
                        Vignesh Muralidharan
                    </p>
                    <p className="eyebrow">
                        GAME DESIGN | MUSIC | VOICE ACTING
                    </p>
                    <p className="intro">
                        I'm a creative working in Game Design, Composition, and Voice Acting!
                    </p>
                </section>
                <section id="work" className="section">
                    <h2>
                        Selected Work
                    </h2>
                    <p>
                        Top Projects here;
                    </p>
                    <a className="work-link" href="#work">
                        Explore my work!
                    </a> 
                </section>
                <section id="work" className="section">
                    <p className="eyebrow">
                        A Comprehensive List of My Work
                    </p>
                    <h2>
                        My Work
                    </h2>
                    <p className="section-intro">
                        Here is a comprehensive list of everything I have had a hand in making thus far! <br/>Many of these projects show my versatility and capability to work in different disciplines.
                    </p>

                    <div className="project-grid">
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/liminality.png" alt="Poster of the game Liminality" className="project-thumbnail" />
                            </div>

                            <div className="project-content">
                                <h3>Liminality</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-green">Programming</span>
                                    <span className="tag-gold">Pygame</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    A game I made in my undergrad to learn pygame. The game was made entirely in code, using free sprite sheets and basic created images.
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img src="/dr-clueblin-flyer.png" alt="Flyer Depicting dr clueblin and the catchphrase 'its about to get funky'" className="project-thumbnail" />
                            </div>

                            <div className="project-content">
                                <h3>Dr. Clueblin, QC</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-green">Programming</span>
                                    <span className="tag-purple">Audio Design</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    Dr. Clueblin, QC is a top-down, grid-based puzzle game where you play a goblin detective searching for his lost sister.
                                </p>

                                <a href="https://macarenzle.itch.io/dr-clueblin-qc" className="project-link" target="_blank">
                                    Play it on itch.io!↗
                                </a>
                            </div>
                        </article>

                        <article className="project-card">
                            <div className="project-image">
                                <img src = "/ooga-booga.png" alt="Poster of Ooga Booga" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Ooga Booga</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-gold">Board Game Development</span>
                                    <span className="tag-peach">Prototyping</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    Ooga Booga game where you caveperson and become chief. You chief when have all rock.
                                    Rock make head no round. Head round good. Make everyone else head not round and be chief.
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/area-f1.png" alt="Banner for Area Freaky One" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Area Freaky One</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-gold">Gameplay Programming</span>
                                    <span className="tag-peach">Audio Production</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    WELCOME TO THE FREAKY ZONE !!!111!!11!1! You have so many eager aliens ready to be taken under your care.
                                    It's time for you to be an awesome caregiver to these delightful little guys.

                                    In this collection of silly minigames, mess around with a bunch of little aliens. Feed them, grab them, shake them -- anything you can dream of!
                                    Area Freaky One is a game made for the RIT IGM Roll Your Fate Game Jam 2025.
                                </p>

                                <a href="https://macarenzle.itch.io/area-freaky-one" className="project-link" target="_blank">
                                    Play it on itch.io!↗
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/platformpiracy.png" alt="A pirated image of a hand holding the CD main character of Platform Piracy" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Platform Piracy</h3>

                                <div className="project-tags">
                                    <span className="tag-purple">Audio Design</span>
                                    <span className="tag-gold">Gameplay Programming</span>
                                    <span className="tag-green"> Rapid Prototyping</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    In the year 2026, Activision-Blizzard-EA-Ubisoft-Nintendo-Microsoft-Sony (ABEAUNMS) has patented the idea of video games -
                                    and every mechanic therein. Those who want to play must spend incredible amounts of money and submit to this unfair system.
                                    You play as a piracy disk on a quest to retake games for the people. Collect patents to use their abilities and fight against
                                    THE Megacorp!
                                </p>

                                <a href="https://bluemane.itch.io/platform-piracy" className="project-link" target="_blank">
                                    Download it from itch.io!↗
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                {<img src="/squeaksquawk.PNG" alt="An exploding squirrel says 'Aw Nuts' as it faces off against the capybara boss." className="project-thumbnail"/>}
                            </div>

                            <div className="project-content">
                                <h3>Squeak or Squawk</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-gold">TTRPG Design</span>
                                    <span className="tag-green">Rapid Prototyping</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    <b>You are a rodent.</b> Your life starts, and ends, with a bang. Regardless of the amount of compassion or malice, you will inevitably meet your end in a blaze of glory (with an optional squeak of varying volume). Rodents live simple lives by the grace of the great capybara, whom they will all one day meet, in death or in glory. <br/>
                                    <b>Your Goal.</b> Kill the despicable squawking sacks of feathers that keep stealing your seeds from the rodent feeders, then god for this injustice.<br/>
                                    Squeak or Squawk is a one-page Tabletop Role-Playing Game where all you need to play is a set of dice and a few friends.
                                </p>

                                <a href="https://cryonicstrider.itch.io/squeak-or-squawk" className="project-link" target="_blank">
                                    Download from itch.io↗
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/firmament.png" alt="" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Firmament</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-gold">TTRPG Design</span>
                                    <span className="tag-purple">Production</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    In a distant future – a time of mechs and magic – the fate of the galaxy seems bright.
                                    Firmament is a sci-fi Tabletop Role Playing Game about mechs and their pilots, where players take on the role of a mech pilot:
                                    someone with the exceptional magical potential required to power one of the most advanced machines ever created.
                                    In Firmament, creativity and the choices of players are key. It focuses heavily on description and storytelling through your actions.
                                    In most situations, fighting isn’t the only answer.
                                    So, what is Firmament about? It’s about daring excursions into the most hostile territory in the galaxy.
                                    It’s about high-octane mech races across planets covered in one massive metropolis.
                                    It’s about rescuing asteroid miners from zero-g cave-ins.
                                    It’s about swaying interstellar politicians to your side at luxurious galas.<br/>
                                    It's about a players creativity, and the stories they want to tell.
                                </p>

                                <a href="#contact" className="project-link">
                                    Read More
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/ooga-booga.png" alt="" className="project-thumbnail"/>
                            </div>

                            <div className="project-content">
                                <h3>Refusal of the Call</h3>

                                <div className="project-tags">
                                    <span className="tag-blue">Narrative Design</span>
                                    <span className="tag-purple">Foley</span>
                                    <span className="tag-gold">Video Editing</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    "Refusal of the Call" is a minute long short film that has a mysterious end.
                                    It was taken up as a project to help learn and practice foley. Every sound you hear was recorded, edited, and arranged by me.
                                    The movie was also starred in, edited and recorded by me.
                                </p>

                                <a href="https://youtu.be/0hycdoyfejg?si=pVb1rDakBv0NW05F" className="project-link" target="_blank">
                                    Watch it on YouTube!↗
                                </a>
                            </div>
                        </article>
                    </div>
                </section>
                <section id="about" className="section">
                    <h2>About Me</h2>
                    <p>Intro paragraph</p>
                </section>

                <section id="contact" className="section">
                    <h2>Contact</h2>
                    <p>contact information</p>
                </section>
            </main>
        </>
    )
}

export default App