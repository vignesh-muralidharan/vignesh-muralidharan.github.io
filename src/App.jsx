
import './App.css'
import { useState, useEffect, useRef } from 'react';


const projects = [
    {
        title: "Liminality",
        description: "A game I made during my undergrad to learn Pygame, built entirely in code.",
        image: "/liminality.png",
        tags: ["tag-teal", "tag-green", "tag-gold"],
        tagNames: ["Game Design", "Programming", "Pygame"],
    },
    {
        title: "Redshift",
        description: `Redshift is a short psychological narrative horror game where you close your eyes to reveal a hidden layer of reality, 
        the REDSHIFT. You are a field technician sent to an abandoned research facility. Your objective? Find out why it's begun outputting power, all on its own.`,
        image: "/redshift.png",
        tags: ["tag-teal", "tag-purple", "tag-gold"],
        tagNames: ["Game Design", "Audio Design", "Level Design"],
    },
    {
        title: "Firmament",
        description: "In a distant future – a time of mechs and magic – the fate of the galaxy seems bright. Firmament is a sci-fi Tabletop Role Playing Game about mechs and their pilots, where players take on the role of a mech pilot: someone with the exceptional magical potential required to power one of the most advanced machines ever created.In Firmament, creativity and the choices of players are key. It focuses heavily on description and storytelling through your actions.In most situations, fighting isn’t the only answer. So, what is Firmament about ? It’s about daring excursions into the most hostile territory in the galaxy. It’s about high - octane mech races across planets covered in one massive metropolis. It’s about rescuing asteroid miners from zero-g cave-ins. It’s about swaying interstellar politicians to your side at luxurious galas.\n It's about a players creativity, and the stories they want to tell. \n\nI produced this project, and worked on many of the game mechanics within.",
        image: "/firmament.png",
        tags: ["tag-teal", "tag-gold", "tag-purple"],
        tagNames: ["Game Design", "TTRPG Design", "Production"],
    },
    {
        title: "Refusal of the Call",
        description: "A short film created to practice Foley. Every sound was recorded, edited, and arranged by me.",
        image: "/refusalofcall.jpg",
        tags: ["tag-blue", "tag-purple", "tag-gold"],
        tagNames: ["Narrative Design", "Foley", "Video Editing"],
    },
];

function App() {

    const [activeProject, setActiveProject] = useState(0);
    const timerRef = useRef(null);

    function resetTimer() { 
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setActiveProject((current) => (current + 1) % projects.length);
        }, 5000);
    }
    
    useEffect(() => {
        resetTimer();

        return () => clearInterval(timerRef.current);
    }, []);

    const featured = projects[activeProject];

    const otherProjects = projects
        .map((_, i) => (activeProject + i) % projects.length)
        .filter((index) => index !== activeProject)
        .map((index) => ({
            ...projects[index],
            index,
        }));

    function nextProject() {
        setActiveProject((activeProject + 1) % projects.length);
        resetTimer();
    }

    function previousProject() {
        setActiveProject((activeProject - 1 + projects.length) % projects.length);
        resetTimer();
    }
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
                    <a href="#contact">
                        Contact
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer">
                        Resume
                    </a>
                </nav>
            </header>
            <div id = "top"></div>
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
                <section className="featured-section">
                    <div className="section-heading">
                        <p className="section-label">A selection of my work</p>
                        <h2>Featured Projects</h2>
                    </div>

                    <div className="featured-main">
                        <div className="featured-image">
                            <img src={featured.image} alt={featured.title} />
                        </div>

                        <div className="featured-details">
                            <h3>{featured.title}</h3>
                            <p>{featured.description}</p>

                            <div className="project-tags">
                                {featured.tagNames.map((tag, index) => (
                                    <span className={featured.tags[index]} key={tag}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="featured-thumbnails">
                        {otherProjects.map((project) => (
                            <button
                                className="featured-thumbnail"
                                key={project.index}
                                onClick={() => setActiveProject(project.index)}
                            >
                                <img src={project.image} alt="" />
                                <span>{project.title}</span>
                            </button>
                        ))}
                    </div>
                    <div className="carousel-controls">
                        <button onClick={previousProject} aria-label="Previous project">
                            ←
                        </button>

                        <span>
                            {String(activeProject + 1).padStart(2, '0')} / 04
                        </span>

                        <button onClick={nextProject} aria-label="Next project">
                            →
                        </button>
                    </div>

                    <div className="work-link-container">
                    <a textAlign="center" className="work-link" href="#work">
                        Explore my work!
                        </a> 
                    </div>
                </section>
                <section id="work" className="section">
                    <p className="eyebrow">
                        A Comprehensive List of My Work
                    </p>
                    <h2>
                        Projects
                    </h2>
                    <p className="section-intro">
                        Here is a comprehensive list of everything I have had a hand in making thus far! <br/>Many of these projects show my versatility and capability to work in different disciplines.
                    </p>

                    <div className="project-grid">
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/redshift.png" alt="Header Image from Steam" className="project-thumbnail" />
                            </div>

                            <div className="project-content">
                                <h3>Redshift</h3>

                                <div className="project-tags">
                                    <span className="tag-teal">Game Design</span>
                                    <span className="tag-purple">Audio Design</span>
                                    <span className="tag-gold">Level Design</span>
                                </div>

                                <p style={{ textAlign: "justify" }}>
                                    Redshift is a short psychological narrative horror game where you close your eyes to reveal a hidden layer of reality, the REDSHIFT.
                                    You are a field technician sent to an abandoned research facility. Your objective? Find out why it's begun outputting power, all on its own.

                                    <br /><br />I contributed to this project by designing the level layouts, helping with dialogue implementation, voice acting, and helping with game design.
                                </p>

                                <a href="https://store.steampowered.com/app/3851950/REDSHIFT/" className="project-link" target="_blank">
                                    Play it on Steam!↗
                                </a>
                            </div>
                        </article>
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

                                {/*<a href="#contact" className="project-link">
                                    Read More
                                </a>*/}
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
                                    <br /><br />I contributed to this project as the primary developer, and designed systems that allowed level designers to design without ever needing to enter the engine. I also composed music for the game.
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

                                    <br /><br /> I help project by making game good game by inspect rock. I make many design.
                                </p>

                                {/*<a href="#contact" className="project-link">
                                    Read More
                                </a>*/}
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

                                    <br /><br />I contributed to this project by being part of the development team, creating minigames as well as composing and editing music and sound effects for the game.
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

                                    <br /><br/>I contributed to this project by creating enemies, working on music and sound effects, and implementing new mechanics each week of prototyping.
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
                                    <br/><br/>I contributed to this project by producing for the team, and helping with design.
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
                                    "In a distant future – a time of mechs and magic – the fate of the galaxy seems bright.
                                    Firmament is a sci-fi Tabletop Role Playing Game about mechs and their pilots, where players take on the role of a mech pilot:
                                    someone with the exceptional magical potential required to power one of the most advanced machines ever created. In Firmament,
                                    creativity and the choices of players are key. It focuses heavily on description and storytelling through your actions. In most situations, fighting isn’t the only answer.
                                    So, what is Firmament about ? It’s about daring excursions into the most hostile territory in the galaxy.
                                    It’s about high - octane mech races across planets covered in one massive metropolis.
                                    It’s about rescuing asteroid miners from zero-g cave-ins. It’s about swaying interstellar politicians to your side at luxurious galas. <br/>
                                    It's about a players creativity, and the stories they want to tell.
                                    <br></br>
                                    <br/>I produced this project, and worked on many of the game mechanics within.
                                </p>

                                <a href="https://www.drivethrurpg.com/en/product/565241/Firmament--A-Magitech-Roleplaying-Game?affiliate_id=5113468" className="project-link" target="_blank">
                                    Download it on DriveThruRPG!↗
                                </a>
                            </div>
                        </article>
                        <article className="project-card">
                            <div className="project-image">
                                <img src="/refusalofcall.jpg" alt="" className="project-thumbnail"/>
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
                    <p>Hey! I'm <b>Vignesh Muralidharan.</b> I'm a game designer, programmer, voice actor, and musician. With a background in Computer Science and Engineering,
                        I've had the opportunity to explore a variety of fields in my pursuit of creating meaningful experiences and solutions.
                        I've always been curious about the world around me and enjoy expanding my knowledge,
                        picking up new skills, and exploring different ways of approaching a problem.
                        I'm particularly drawn to creating things that evoke emotion,
                        whether through music, games or anything else that helps bring ideas to life.
                        I strive to carry that curiosity into everything I create. </p>
                </section>

                <section id="contact" className="section contact-section">
                    <div className="contact-content">
                        <div className="contact-intro">
                            <h2>Contact Me</h2>
                            <p>
                                Have an opportunity to share? 
                                Want to talk about something
                                I've worked on? I'd love to hear from you.
                            </p>
                        </div>

                        <div className="contact-details">
                            <span className="contact-label">SEND ME AN EMAIL</span>
                            <a className="contact-email" href="mailto:vigneshmuralidharan40@gmail.com">vigneshmuralidharan40@gmail.com<span>↗</span></a>

                            <div className="contact-socials">
                                Check out my Socials:
                                <a href="https://github.com/vignesh-muralidharan/" target="_blank" rel="noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/mvignesh42/" target="_blank" rel="noreferrer">LinkedIn</a>
                                <a href="https://cryonicstrider.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="site-footer">
                    <div className="footer-top">
                        <span className="footer-name">Vignesh Muralidharan</span>

                        <div className="footer-socials">
                            <a href="https://github.com/vignesh-muralidharan/" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/mvignesh42/" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a href="https://cryonicstrider.itch.io/" target="_blank" rel="noreferrer">itch.io</a>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <span>© 2026 Vignesh Muralidharan. All rights reserved.</span>
                        <a href="#top">Back to top ↑</a>
                    </div>
                </footer>
            </main>
        </>
    )
}

export default App