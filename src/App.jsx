
import React, { useState } from "react";

import {
    ArrowUpRight,
    Menu,
    X,
    Zap,
    ShieldCheck,
    Gauge,
    ChevronRight
} from "lucide-react";

import CarScene from "./components/CarScene.jsx";

const cars = [
    {
        name: "NEXON",
        category: "SUV",
        fuel: "Petrol / Diesel / EV",
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=900&q=85",
        number: "01"
    },
    {
        name: "HARRIER",
        category: "SUV",
        fuel: "Diesel",
        image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85",
        number: "02"
    },
    {
        name: "CURVV EV",
        category: "ELECTRIC",
        fuel: "Electric",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85",
        number: "03"
    }
];

export default function App() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [filter, setFilter] = useState("ALL");
    const [sent, setSent] = useState(false);

    const filteredCars =
        filter === "ALL"
            ? cars
            : cars.filter(car => car.category === filter);

    function scrollTo(id) {
        document.getElementById(id)?.scrollIntoView({
            behavior: "smooth"
        });

        setMenuOpen(false);
    }

    return (

        <main>

            {/* TOP BAR */}

            <div className="topbar">
                <span>INDEPENDENT AUTOMOTIVE CONCEPT</span>
                <span>DESIGNED FOR THE NEXT GENERATION</span>
            </div>


            {/* NAVIGATION */}

            <header className="navbar">

                <a href="#home" className="logo">
                    <span className="logo-icon">T</span>

                    <span>
                        FUTURE<span className="red"> DRIVE</span>
                        <small>AUTOMOTIVE EXPERIENCE</small>
                    </span>
                </a>

                <nav className={menuOpen ? "nav-links open" : "nav-links"}>

                    <button onClick={() => scrollTo("home")}>
                        HOME
                    </button>

                    <button onClick={() => scrollTo("vehicles")}>
                        VEHICLES
                    </button>

                    <button onClick={() => scrollTo("electric")}>
                        ELECTRIC
                    </button>

                    <button onClick={() => scrollTo("about")}>
                        ABOUT
                    </button>

                    <button onClick={() => scrollTo("contact")}>
                        CONTACT
                    </button>

                </nav>

                <button
                    className="nav-cta"
                    onClick={() => scrollTo("contact")}
                >
                    ENQUIRE <ArrowUpRight size={16} />
                </button>

                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X /> : <Menu />}
                </button>

            </header>


            {/* HERO SECTION */}

            <section className="hero" id="home">

                <div className="hero-content">

                    <div className="eyebrow">
                        <span></span>
                        THE FUTURE IS A JOURNEY
                    </div>

                    <h1>
                        DRIVE
                        <br />
                        <em>BEYOND</em>
                        <br />
                        LIMITS<span className="red">.</span>
                    </h1>

                    <p>
                        Discover the next generation of automotive
                        design, progressive engineering and
                        future mobility.
                    </p>

                    <div className="hero-buttons">

                        <button
                            className="primary-btn"
                            onClick={() => scrollTo("vehicles")}
                        >
                            EXPLORE VEHICLES
                            <ArrowUpRight size={17} />
                        </button>

                        <button
                            className="secondary-btn"
                            onClick={() => scrollTo("about")}
                        >
                            DISCOVER MORE
                            <ChevronRight size={17} />
                        </button>

                    </div>

                    <div className="hero-stats">

                        <div>
                            <strong>01</strong>
                            <span>DESIGN<br />PHILOSOPHY</span>
                        </div>

                        <div>
                            <strong>02</strong>
                            <span>FUTURE<br />MOBILITY</span>
                        </div>

                        <div>
                            <strong>03</strong>
                            <span>ADVANCED<br />TECHNOLOGY</span>
                        </div>

                    </div>

                </div>


                {/* 3D CAR */}

                <div className="hero-car">

                    <div className="car-top-label">
                        <span>01 / CONCEPT SERIES</span>
                        <span>FUTURE MOBILITY</span>
                    </div>

                    <CarScene />

                    <div className="car-bottom-label">
                        <span>DESIGN STUDY / 2026</span>
                        <span>INTERACTIVE 3D MODEL</span>
                    </div>

                </div>

            </section>


            {/* ANIMATED TEXT */}

            <div className="ticker">
                BUILT FOR TOMORROW
                <span>✳</span>
                ENGINEERED TO INSPIRE
                <span>✳</span>
                MOVE WITH PURPOSE
                <span>✳</span>
                FUTURE MOBILITY
            </div>


            {/* VEHICLES */}

            <section className="vehicles section" id="vehicles">

                <div className="section-heading">

                    <div>
                        <div className="eyebrow">
                            <span></span>
                            THE LINEUP
                        </div>

                        <h2>
                            MEET THE <em>MOVERS.</em>
                        </h2>
                    </div>

                    <p>
                        Different personalities.
                        One progressive spirit.
                        Find your next driving experience.
                    </p>

                </div>


                {/* FILTER */}

                <div className="filters">

                    {["ALL", "SUV", "ELECTRIC"].map(item => (

                        <button
                            key={item}
                            className={filter === item ? "active" : ""}
                            onClick={() => setFilter(item)}
                        >
                            {item}
                        </button>

                    ))}

                </div>


                {/* CAR CARDS */}

                <div className="vehicle-grid">

                    {filteredCars.map(car => (

                        <article
                            className="vehicle-card"
                            key={car.name}
                        >

                            <div className="vehicle-image">

                                <img
                                    src={car.image}
                                    alt={`${car.name} illustrative vehicle`}
                                />

                                <span className="vehicle-number">
                                    {car.number}
                                </span>

                                <span className="vehicle-arrow">
                                    <ArrowUpRight />
                                </span>

                            </div>

                            <div className="vehicle-info">

                                <div>
                                    <span className="vehicle-category">
                                        {car.category}
                                    </span>

                                    <h3>{car.name}</h3>

                                    <p>{car.fuel}</p>
                                </div>

                                <span className="view-more">
                                    VIEW <ArrowUpRight size={15} />
                                </span>

                            </div>

                        </article>

                    ))}

                </div>

                <p className="vehicle-note">
                    Illustrative vehicle showcase. Check the manufacturer's
                    website for current models and specifications.
                </p>

            </section>


            {/* ELECTRIC SECTION */}

            <section className="electric" id="electric">

                <div className="electric-visual">

                    <div className="orbit orbit-one"></div>
                    <div className="orbit orbit-two"></div>

                    <div className="electric-icon">
                        <Zap size={55} />
                    </div>

                    <span className="electric-label">
                        ELECTRIC MOBILITY / INDIA
                    </span>

                </div>


                <div className="electric-content">

                    <div className="eyebrow">
                        <span></span>
                        A NEW CURRENT
                    </div>

                    <h2>
                        THE ROAD
                        <br />
                        AHEAD IS
                        <br />
                        <em>ELECTRIC.</em>
                    </h2>

                    <p>
                        Experience a new perspective on electric mobility.
                        Quiet confidence, responsive performance and
                        progressive technology.
                    </p>

                    <button
                        className="primary-btn"
                        onClick={() => {
                            setFilter("ELECTRIC");
                            scrollTo("vehicles");
                        }}
                    >
                        EXPLORE ELECTRIC
                        <ArrowUpRight size={17} />
                    </button>

                    <div className="electric-features">

                        <span>
                            <Zap />
                            ELECTRIC ENERGY
                        </span>

                        <span>
                            <Gauge />
                            RESPONSIVE DRIVE
                        </span>

                        <span>
                            <ShieldCheck />
                            SMART TECHNOLOGY
                        </span>

                    </div>

                </div>

            </section>


            {/* ABOUT */}

            <section className="about section" id="about">

                <div className="eyebrow">
                    <span></span>
                    THE THINKING
                </div>

                <div className="about-grid">

                    <h2>
                        PROGRESS
                        <br />
                        IS NOT A
                        <br />
                        <em>DESTINATION.</em>
                    </h2>

                    <div className="about-text">

                        <span className="about-number">
                            / 03
                        </span>

                        <p>
                            The future of mobility begins with curiosity.
                            This independent concept celebrates
                            automotive design, technology and the
                            possibilities of tomorrow.
                        </p>

                        <button
                            className="secondary-btn"
                            onClick={() => scrollTo("contact")}
                        >
                            START A CONVERSATION
                            <ChevronRight size={17} />
                        </button>

                    </div>

                </div>

            </section>


            {/* CONTACT */}

            <section className="contact section" id="contact">

                <div className="contact-heading">

                    <div className="eyebrow">
                        <span></span>
                        STAY CONNECTED
                    </div>

                    <h2>
                        LET'S MOVE
                        <br />
                        <em>FORWARD.</em>
                    </h2>

                    <p>
                        Interested in this automotive concept?
                        Send us a demo enquiry.
                    </p>

                </div>


                <form
                    className="contact-form"
                    onSubmit={(event) => {
                        event.preventDefault();
                        setSent(true);
                    }}
                >

                    <label>
                        YOUR NAME

                        <input
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </label>

                    <label>
                        EMAIL ADDRESS

                        <input
                            type="email"
                            placeholder="name@example.com"
                            required
                        />
                    </label>

                    <label>
                        YOUR INTEREST

                        <select defaultValue="Vehicle information">

                            <option>Vehicle information</option>
                            <option>Electric mobility</option>
                            <option>Technology</option>
                            <option>General enquiry</option>

                        </select>
                    </label>

                    <button
                        type="submit"
                        className="primary-btn"
                    >
                        {sent ? "MESSAGE RECEIVED (DEMO)" : "SUBMIT ENQUIRY"}
                        <ArrowUpRight size={17} />
                    </button>

                    <small>
                        Demo form only. No information is sent or stored.
                    </small>

                </form>

            </section>


            {/* FOOTER */}

            <footer className="footer">

                <a href="#home" className="logo">

                    <span className="logo-icon">T</span>

                    <span>
                        FUTURE<span className="red"> DRIVE</span>
                        <small>AUTOMOTIVE EXPERIENCE</small>
                    </span>

                </a>

                <span>INDEPENDENT FAN / DEMO PROJECT</span>

                <span>© 2026 FUTURE DRIVE</span>

            </footer>

            <div className="disclaimer">
                This is an unofficial independent concept project.
                It is not affiliated with or endorsed by Tata Motors.
                All trademarks belong to their respective owners.
                Vehicle images are illustrative.
            </div>

        </main>
    );
}
