import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// import Swiper from 'swiper';
import picture from "../image/logo.png";
import InvestScreen from "../assets/screenshotInvesting.png";
import YouTubeScreen from "../assets/youtubescreen.png"
import Pathfinder from '../assets/pathfinder.png'


export default function Home() {
    const [menuActive, setMenuActive] = useState('');
    const [activeLink, setActiveLink] = useState('');
    const iconToggleRef = useRef(null);
    const iconCloseRef = useRef(null);
    const menuLinksRef = useRef([]);
    const sections = document.querySelectorAll('section[id]');
    const [isModalOpenFullStack, setIsModalOpenFullStack] = useState(false);
    const [isModalOpenFrontend, setIsModalOpenFrontend] = useState(false);
    const [isModalOpenBackend, setIsModalOpenBackend] = useState(false);
    // const words = ['Developer', 'Designer', 'Freelancer'];
    // const [currentWord, setCurrentWord] = useState(0);
    // const words = ['Developer', 'Designer', 'Freelancer'];
    

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setMenuActive(sectionId);
        }
    };

    const scrollActive = () => {
        const scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 50;

            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                setActiveLink(sectionId);
            }
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', scrollActive);

        scrollActive();

        return () => {
            window.removeEventListener('scroll', scrollActive);
        };
    }, []);

    useEffect(() => {
        const handleToggleClick = () => {
            setMenuActive(!menuActive);
        };

        const handleCloseClick = () => {
            setMenuActive('');
        };

        iconToggleRef.current.addEventListener('click', handleToggleClick);
        iconCloseRef.current.addEventListener('click', handleCloseClick);

        return () => {
            iconToggleRef.current.removeEventListener('click', handleToggleClick)
            iconCloseRef.current.removeEventListener('click', handleCloseClick);
        };
    }, [menuActive]);

    useEffect(() => {
        const swiper = new Swiper('.testimonial_container', {
            effect: 'slide',
            loop: true,
            slidesPerView: 1,
            grabCursor: true,
            spaceBetween: 100,
            breakpoints: {
                768: {
                    slidesPerView: 2
                }
            }
        });

        return () => {
            swiper.destroy(true, true);
        };
    }, []);

    const openModal = (serviceType) => {
        console.log(`Opening ${serviceType} modal...`);
        if (serviceType === 'fullStack') setIsModalOpenFullStack(true);
        else if (serviceType === 'frontend') setIsModalOpenFrontend(true);
        else if (serviceType === 'backend') setIsModalOpenBackend(true);
    };

    const closeModal = (serviceType) => {
        console.log(`Closing ${serviceType} modal...`);
        if (serviceType === 'fullStack') setIsModalOpenFullStack(false);
        else if (serviceType === 'frontend') setIsModalOpenFrontend(false);
        else if (serviceType === 'backend') setIsModalOpenBackend(false);
    };
      


    return (
        <>
            <header id="header">
                <div class="container">
                    <Link to="/">
                        <img class='logo' src={picture} alt="" />
                    </Link>
                    <ul class={`menu ${menuActive ? 'active' : ''}`}>
                        <li class="menu_item">
                            <Link to="#hero" class={`menu_link ${activeLink === 'hero' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} ref={(el) => menuLinksRef.current.push(el)}>Home</Link>
                        </li>
                        <li class="menu_item">
                            <Link to="#about" class={`menu_link ${activeLink === 'about' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} ref={(el) => menuLinksRef.current.push(el)}>About</Link>
                        </li>
                        <li class="menu_item">
                            <Link to="#resume" class={`menu_link ${activeLink === 'resume' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }} ref={(el) => menuLinksRef.current.push(el)}>Resume</Link>
                        </li>
                        <li class="menu_item">
                            <Link to="#portfolio" class={`menu_link ${activeLink === 'portfolio' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('portfolio'); }} ref={(el) => menuLinksRef.current.push(el)}>Portfolio</Link>
                        </li>
                        <li class="menu_item">
                            {/* <Link to="#services" class={`menu_link ${activeLink === 'services' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('services'); }} ref={(el) => menuLinksRef.current.push(el)}>Services</Link> */}
                        </li>
                        <li class="menu_item">
                            <Link to="#contact" class={`menu_link ${activeLink === 'contact' ? 'active-link' : ''}`} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} ref={(el) => menuLinksRef.current.push(el)}>Contact</Link>
                        </li>
                        <ion-icon name="close-outline" class="close_icon" ref={iconCloseRef}></ion-icon>
                    </ul>
                    <ion-icon name="menu-outline" class="toggle_icon" ref={iconToggleRef}></ion-icon>
                </div>
            </header>

            <main>
            <section className="hero section" id="hero">
      <div className="hero_container container grid">
        <div className="hero_content">
          <h4>hi there, </h4>
          <h1>
            I'm Berlin I. Rivas
          </h1>
          <p>
            I'm a creative developer based in New Jersey, and I'm very passionate and dedicated to web development
          </p>
          <div className="hero_social">
            <a href="https://www.linkedin.com/in/berlinrivas/">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
            <a href="https://github.com/BerlinRivas">
              <ion-icon name="logo-github"></ion-icon>
            </a>
          </div>
        </div>
        <div className="hero_img">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/online-seller-listing-product-for-sale-7129320-5791991.png?f=webp"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </section>
                <section class="about section" id="about">
                    <h2 class="section_title">About Me</h2>
                    <div class="about_container container grid">
                        <div class="about_img">
                            <img class="about-img" src="https://static.vecteezy.com/system/resources/previews/011/153/365/original/3d-web-developer-working-on-project-illustration-png.png" alt=""></img>
                        </div>
                        <div class="about_content">
                            <h1>I make professional and creative designs</h1>
                            <p>Exploring the intersection of innovation and aesthetics, I craft digital experiences that not only meet industry standards but redefine them. My passion for design goes beyond pixels and code—it's about telling a story, creating an emotional connection, and leaving a lasting impression. Let's turn your ideas into captivating visual narratives!</p>
                        </div>
                    </div>
                </section>
                <section class="resume section" id="resume">
                    <h2 class="section_title">Resume</h2>
                    <div class="resume_container container grid">
                    <div class="resume_tabs">
                            <ul>
                                <li>
                                    <Link
                                        to="#page-1"
                                        class={activeLink === 'page-1' ? 'current' : ''}
                                        onClick={() => scrollToSection('page-1')}
                                    >
                                        Education
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#page-2"
                                        class={activeLink === 'page-2' ? 'current' : ''}
                                        onClick={() => scrollToSection('page-2')}
                                    >
                                        Experience
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#page-3"
                                        class={activeLink === 'page-3' ? 'current' : ''}
                                        onClick={() => scrollToSection('page-3')}
                                    >
                                        Skills
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div class="resume_content">
                            <div id="page-1" class="page one">
                                <div class="page_heading">Education</div>
                                <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="school-outline"></ion-icon>
                                    </div>
                                    /* 
                                    <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="school-outline"></ion-icon>
                                    </div>
                                    <div class="resume_wrap-content">
                                        <span class="date">June 2025 - Dec 2025</span>
                                        <h4>B.S. in Network Engineering and Security</h4>
                                        <span class="position">Western Governors University</span>
                                        <p>
                                            My academic journey, centered on earning a BS in Network Engineering and Security at WGU, has been vital in shaping my path in cybersecurity. Through immersive coursework and practical labs, I’ve sharpened my networking and security skills, building a strong foundation that fuels my passion for defending digital infrastructure.
                                        </p>
                                    </div>
                                </div>
                            </div>
                                */
                                    <div class="resume_wrap-content">
                                        <span class="date">Fall 2023 - Spring 2025</span>
                                        <h4>Computer Science (Cybersecurity Option) A.S.</h4>
                                        <span class="position">Hudson County Community College</span>
                                        <p>
                                            My pursuit of knowledge in the dynamic realm of cybersecurity, coupled with my current collegiate endeavors, defines a transformative journey toward becoming a cybersecurity professional. Engaging in rigorous academic exploration, I navigate the complexities of this ever-evolving field, leveraging coursework and hands-on experiences to sharpen my skills. This educational odyssey lays a solid groundwork, propelling my aspirations to contribute meaningfully to the realm of cybersecurity through innovative and effective solutions.
                                        </p>
                                    </div>
                                </div>
                                <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="school-outline"></ion-icon>
                                    </div>
                                    <div class="resume_wrap-content">
                                        <span class="date">Dec 2022 - Jan 2024</span>
                                        <h4>Certificate in Software Engineering</h4>
                                        <span class="position">Pursuit</span>
                                        <p>
                                            My academic journey, marked by attending Pursuit for Computer Science, has been instrumental in shaping my path as a software engineer. Fueled by engaging coursework and hands-on experiences, I've honed my analytical and coding skills, laying a robust foundation that continues to drive my passion for innovative software solutions.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div id="page-2" class="page two">
                                <div class="page_heading">Experience</div>
                                {/* <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="briefcase-outline"></ion-icon>
                                    </div>
                                  
                                    <div class="resume_wrap-content">
                                        <span class="date">Feb 2024 - present</span>
                                        <h4>Unarmed Security Guard</h4>
                                        <span class="position">Prime Security Services</span>
                                        <p>
                                        I was responsible for registering visitor names at a residential building, overseeing visitor parking arrangements, and meticulously documenting building activities every hour in the logbook.
                                        </p>
                                    </div>
                                </div> */}
                                <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="briefcase-outline"></ion-icon>
                                    </div>
                                  
                                    <div class="resume_wrap-content">
                                        <span class="date">Sep 2024 - present</span>
                                        <h4>Web Administrator</h4>
                                        <span class="position">Hudson County Community</span>
                                        <p>
                                        I was responsible for managing and updating web content, monitoring site functionality and security, and assisting in resolving technical issues to ensure seamless user experiences.
                                        </p>
                                    </div>
                                </div>
                                {/* <div class="resume_wrap">
                                    <div class="resume_wrap-icon">
                                        <ion-icon name="briefcase-outline"></ion-icon>
                                    </div>
                                    <div class="resume_wrap-content">
                                        <span class="date">May 2023- Dec 2023</span>
                                        <h4>Overnight Dishwasher/Porter</h4>
                                        <span class="position">Choc O Pain</span>
                                        <p>
                                            Ensured optimal cleanliness of dishes and utensils, maintaining a high standard of sanitation. Performed meticulous mopping and sweeping duties throughout the facility, including offices, bathrooms, and the main customer area, to create a clean and welcoming environment. Expanded skill set by actively participating in pastry preparation and packing for distribution to other Choc O Pain stores in New York City.
                                        </p>
                                    </div>
                                </div> */}
                            </div>
                            <div id="page-3" class="page three">
                                <div class="page_heading">Skills</div>
                                <div class="progressBoxs grid">
                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>HTML</span>
                                            <span> 90%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: ' 90%' }}></div>
                                        </div>
                                    </div>
                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>CSS</span>
                                            <span> 93%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: "93%"}}></div>
                                        </div>
                                    </div>
                                    
                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>JavaScript</span>
                                            <span> 97%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{width: "97%"}}></div>
                                        </div>
                                    </div>
                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>Node.js/Express.js</span>
                                            <span> 89%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{width: "89%"}}></div>
                                        </div>
                                    </div>
                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>MySQL</span>
                                            <span> 91%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{width: "91%"}}></div>
                                        </div>
                                        {/* New Line inserted start */}

                                        <div class="progressBox">
                                        <div class="progress_name">
                                            <span>Java</span>
                                            <span> 95%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: ' 95%' }}></div>
                                        </div>
                                    </div>

                                    {/* ------------- */}

                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>C++</span>
                                            <span> 92%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: ' 92%' }}></div>
                                        </div>
                                    </div>

                                    {/* ---------------- */}

                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>Python</span>
                                            <span> 87%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: ' 87%' }}></div>
                                        </div>
                                    </div>

                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>VMWare</span>
                                            <span> 82%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: "82%"}}></div>
                                        </div>
                                    </div>

                                    <div class="progressBox">
                                        <div class="progress_name">
                                            <span>Linux</span>
                                            <span> 88%</span>
                                        </div>
                                        <div class="progress">
                                            <div class="progress_bar" style={{ width: "88%"}}></div>
                                        </div>
                                    </div>
                                        {/* New Line insterted end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section clas="portfolio section" id="portfolio">
                    <h2 class="section_title">Portfolio</h2>

                    <div class="portfolio_container container">
                        <ul class="portfolio_filters">
                        </ul>
                        <div class="portfolio_wrap-container">
                            <div class="portfolio_item filter-web"> 
                                <div class="portfolio_wrap">
                                <img src={InvestScreen} alt="" class="img-fluid"></img>
                                    <div class="portfolio_info">
                                        <h4>CoinHub</h4>
                                        <p>Website #1</p>
                                        <div class="portfolio_links">
                                            {/* <a href="*"><ion-icon name="link-outline"></ion-icon></a> */}
                                            <a href="https://main--coinhub1.netlify.app/"><ion-icon name="link-outline"></ion-icon></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="portfolio_item filter-web-two">
                                    <div class="portfolio_wrap">
                                        <img src={YouTubeScreen} alt="" class="img-fluid"></img>
                                        <div class="portfolio_info">
                                            <h4>YouTube Clone</h4>
                                            <p>Website #2</p>
                                            <div class="portfolio_links">
                                                {/* <a href="#"><ion-icon name="add-outline"></ion-icon></a> */}
                                                <a href="https://youtubeclonepursuit.netlify.app/"><ion-icon name="link-outline"></ion-icon></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="portfolio_item filter-web-two">
                                    <div class="portfolio_wrap">
                                        <img src={Pathfinder} alt="" class="img-fluid"></img>
                                        <div class="portfolio_info">
                                            <h4>Pathfinder (Capstone Project)</h4>
                                            <p>Website #3</p>
                                            <div class="portfolio_links">
                                                {/* <a href="#"><ion-icon name="add-outline"></ion-icon></a> */}
                                                <a href="https://pathfinder-game.netlify.app/"><ion-icon name="link-outline"></ion-icon></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </section>
                <section class="testimonial section">
                    <h2 class="section_title">Testimonial</h2>
                    <div class="testimonial_container container swiper">
                        <div class="swiper-wrapper">
                            <div class="testimonial_item swiper-slide">
                                <i class="bx bxs-quote-alt-left"></i>
                                 <p class="testimonial">
                                    Working with Berlin Rivas was an absolute pleasure. His expertise and dedication to the project were evident from the start. He exceeded our expectations and delivered results that truly impressed our team. We look forward to collaborating with him on future projects.
                                </p>
                                <div class="img_name">
                                    <img src="https://shotkit.com/wp-content/uploads/2020/07/headshots_image002.jpg" alt="" />
                                    <span class="name">Kevin Luzzi</span>
                                    <span class="post">Clients</span>
                                </div>
                            </div>
                            <div class="testimonial_item swiper-slide">
                                 <i class="bx bxs-quote-alt-left"></i>
                                 <p>
                                    Collaborating with Berlin Rivas was an exceptional experience. His profound expertise and unwavering dedication to the project were evident right from the beginning. Berlin not only met but surpassed our expectations, delivering results that left our team thoroughly impressed. We eagerly anticipate future collaborations with him.
                                </p>
                                <div class="img_name">
                                    <img src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2016/02/Headshot-Photography-London-0997.jpg?ssl=1" alt="" />
                                    <span class="name">Tyrone Lawrence</span>
                                    <span class="post">Clients</span>
                                </div>
                            </div>
                            <div class="testimonial_item swiper-slide">
                                 <i class="bx bxs-quote-alt-left"></i>
                                 <p>
                                    "Embarking on a project with Berlin Rivas was a delight. His innovative approach and unwavering dedication were evident from the outset. Berlin not only met but exceeded our expectations, delivering results that left our team truly impressed. Anticipating future collaborations with enthusiasm."  
                                </p>

                                <div class="img_name">
                                    <img src="https://images.squarespace-cdn.com/content/v1/51ef4493e4b0561c90fa76d6/1667313827879-7ULBZNGQ28WWWKHFXHC8/20210624_SLP4937-Edit.jpg?format=1000w" alt="" />
                                    <span class="name">Karla Martinez</span>
                                    <span class="post">Clients</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section class="services section" id="services">
                    <h2 class="section_title">Services</h2>

                    <div class="services_container container grid">
                        <div class="services_item">
                            <i class="uil uil-window-grid"></i>
                            <h3 class="services_title">Full Stack <br/> Websites</h3>
                            <span class="services_button" onClick={() => openModal('fullStack')}>
                            View More <i class="uil uil-angle-right"></i>
                            </span>
                            {isModalOpenFullStack && (
                            <div class="services_modal">
                                <div>
                                <ion-icon
                                    name="close-outline"
                                    class="modal_close-icon"
                                    onClick={() => closeModal('fullStack')}
                                ></ion-icon>
                                <h3 class="services_modal-title">Full Stack Website</h3>
                                <p class="services_modal-description">
                                    Services with less than a year of experience. Providing quality work
                                    to clients and companies
                                </p>
                                <ul>
                                    <li>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                    <p class="services_modal-info">
                                        Develop Frontend & Backend
                                    </p>
                                    </li>
                                    <li>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                    <p class="services_modal-info">Help with Deployment</p>
                                    </li>
                                    <li>
                                    <ion-icon name="checkmark-circle-outline"></ion-icon>
                                    <p class="services_modal-info">
                                        Design and create mockups of products
                                    </p>
                                    </li>
                                </ul>
                                </div>
                            </div>
                            )}

                        </div>
                        <div class="services_item">
                            <i class="uil uil-window-grid"></i>
                             <h3 class="servcies_title">Frontend <br/> Developer</h3>
                             <span class="services_button" onClick={() => openModal('frontend')}>
                            View More <i class="uil uil-angle-right"></i>
                            </span>
                            {isModalOpenFrontend && (
                             <div class="services_modal">
                                <div>
                                <ion-icon
                                    name="close-outline"
                                    class="modal_close-icon"
                                    onClick={() => closeModal('frontend')}
                                ></ion-icon>
                                    <h3 class="services_modal-title">Frontend Developer</h3>
                                    <p class="services_modal-description">Services with less than a year of experience.
                                    Providing quality work to clients and companies</p>
                                    <ul>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Produce routes and design the style of your web</p>
                                        </li>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Web Page Development</p>
                                        </li>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Functional and user-friendly</p>
                                        </li>
                                    </ul>
                                </div>  
                             </div>
                             )}
                        </div>
                        <div class="services_item">
                             <i class="uil uil-window-grid"></i>
                             <h3 class="servcies_title">Backend <br/> Developer</h3>
                             <span class="services_button" onClick={() => openModal('backend')}>
                            View More <i class="uil uil-angle-right"></i>
                            </span>
                            {isModalOpenBackend && (
                             <div class="services_modal">
                                <div>
                                <ion-icon
                                    name="close-outline"
                                    class="modal_close-icon"
                                    onClick={() => closeModal('backend')}
                                ></ion-icon>
                                    <h3 class="services_modal-title">Backend Developer</h3>
                                    <p class="services_modal-description">Services with less than a year of experience.
                                    Providing quality work to clients and companies</p>
                                    <ul>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Help in storing data</p>
                                        </li>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Provide seed and schema sql files</p>
                                        </li>
                                        <li>
                                             <ion-icon name="checkmark-circle-outline"></ion-icon>
                                             <p class="services_modal-info">Create a functional and working backend</p>
                                        </li>
                                    </ul>
                                </div>  
                             </div>
                             )}
                        </div>
                    </div>
                </section> */}
                <section class="contact section" id="contact">
                    <h2 class="section_title">Contact Me</h2>
                    <div class="contact_container container">
                        <div class="contact_content">
                            <form action="https://formspree.io/f/mvojjdqz" method="POST">
                                <div class="inputs">
                                    <input name="name" type="text" placeholder="Enter your Name" />
                                    <input name="email" type="email" placeholder="Enter your Email" />
                                </div>
                                <textarea name="message" id="message" cols="50" rows="10" placeholder="Message"></textarea>
                                <button type="submit" class="btn">Send Message
                                    <ion-icon name="chevron-forward-outline"></ion-icon>
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                <footer>
                    <div class="footer_bg"></div>
                    <div class="footer_container container">
                        <div class="main_footer">
                            <div class="footer_social">
                                <a href="https://www.linkedin.com/in/berlinrivas/"><ion-icon name="logo-linkedin"></ion-icon></a>
                            </div>
                            <h3>B.I.R</h3>
                            <p clas="footer_txt">Explore my portfolio showcasing full-stack, front-end, and backend expertise. 
                                Elevate projects with value-driven solutions as a software engineer</p>
                        </div>
                        <div class="footer_copy">&#169; B.I.R. All right reserved</div>
                    </div>
                </footer>
            </main>
        </>
    );
}
