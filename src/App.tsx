import React, { useEffect, useState } from 'react';
import { ChevronUp, Play, Twitter, Youtube, MessageCircle, Users, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import './styles/main.css';

const ParticleBackground = () => {
  return (
    <div className="particle-container">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 20}s`,
            animationDuration: `${15 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-shape"></div>
          </div>
        </div>
        <nav className="nav">
          <a href="#home" className="nav-link active">HOME</a>
          <a href="#about" className="nav-link">ABOUT</a>
          <a href="#streams" className="nav-link">LIVE STREAMS</a>
          <a href="#news" className="nav-link">NEWS</a>
          <a href="#contact" className="nav-link">CONTACT</a>
        </nav>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            HOME OF<br />
            THE <span className="highlight">SORIN</span>.
          </h1>
          <p className="hero-description">
            Everything SORIN - SORIN is a premiere esports organization, breeding the 
            next-generation of esports professionals in gaming, content-creation and more!
          </p>
          <div className="social-buttons">
            <a href="#" className="social-btn twitter">
              <Twitter size={20} />
            </a>
            <a href="#" className="social-btn youtube">
              <Youtube size={20} />
            </a>
            <a href="#" className="social-btn discord">
              <MessageCircle size={20} />
            </a>
            <a href="#" className="social-btn community">
              <Users size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const StreamCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const streams = [
    {
      id: 1,
      title: "arkfpsx is offline.",
      description: "Learn more about them on their channel!",
      thumbnail: "https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg"
    },
    {
      id: 2,
      title: "joshuavert is live!",
      description: "Playing Fortnite Championship Series",
      thumbnail: "https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg"
    }
  ];

  return (
    <section id="streams" className="streams-section">
      <div className="container">
        <div className="streams-content">
          <div className="stream-carousel">
            <div className="carousel-container">
              <div className="stream-card">
                <div className="stream-thumbnail">
                  <img src="https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg" alt="Stream" />
                  <div className="stream-overlay">
                    <div className="stream-status offline">OFFLINE</div>
                    <div className="stream-info">
                      <h3>arkfpsx is offline.</h3>
                      <p>Learn more about them on their channel!</p>
                      <a href="#" className="visit-link">▶ Visit arkfpsx</a>
                    </div>
                    <button className="stream-next">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                  <div className="stream-brands">
                    <img src="https://via.placeholder.com/60x30/ffffff/000000?text=RIVOX" alt="RIVOX" />
                    <img src="https://via.placeholder.com/60x30/ffffff/000000?text=EXIT" alt="EXIT" />
                  </div>
                  <div className="twitch-logo">twitch</div>
                </div>
              </div>
              <div className="carousel-dots">
                <span className="dot active"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
          <div className="stream-info-panel">
            <div className="panel-header">
              <span className="live-indicator">LIVE ENTERTAINMENT</span>
              <h2>SORIN TV</h2>
            </div>
            <p>
              Here are some of SORIN's live streams! Use the arrows to browse through 
              and discover our talented roster in action. Experience the best of competitive 
              gaming and content creation.
            </p>
            <button className="cta-button">
              WATCH MORE CONTENT <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <span className="section-label">WHO WE ARE</span>
            <h2 className="section-title">
              THE <span className="highlight">FUTURE</span><br />
              OF ESPORTS
            </h2>
            <button className="cta-button">
              DISCOVER OUR CONTENT <ArrowRight size={20} />
            </button>
          </div>
          <div className="about-description">
            <div className="description-content">
              <p>
                SORIN is more than just an esports organization – we're a community of 
                passionate gamers, content creators, and innovators pushing the boundaries 
                of competitive gaming.
              </p>
              <p>
                Founded with the vision of nurturing the next generation of esports talent, 
                we provide our players with cutting-edge resources, professional coaching, 
                and unparalleled opportunities to compete at the highest levels.
              </p>
              <p>
                From Fortnite to emerging titles, our diverse roster represents the pinnacle 
                of gaming excellence, creativity, and sportsmanship in the digital arena.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      date: "JUL 19, 2025",
      title: "OFFICIAL SORIN ANNOUNCEMENT",
      description: "Our team secured first place in the highly competitive Winter Championship, showcasing incredible teamwork and skill against top-tier competition.",
      image: "https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg"
    },
    {
      id: 2,
      date: "JUL 20, 2025",
      title: "Sorin Vert Qualifies for Grand Finals — and Secures a Win!",
      description: "We're proud to announce that we've qualified for Grand Finals once again!",
      image: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg"
    },
    {
      id: 3,
      date: "DEC 5, 2024",
      title: "Major Partnership with LanForge!",
      description: "SORIN partners with industry-leading gaming hardware company.",
      image: "https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg"
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            LATEST <span className="highlight">NEWS</span>
          </h2>
          <p className="section-description">
            Stay updated with the latest announcements, tournament results, and team 
            updates from SORIN Esports.
          </p>
        </div>
        <div className="news-grid">
          {newsItems.map((item) => (
            <article key={item.id} className="news-card">
              <div className="news-image">
                <img src={item.image} alt={item.title} />
                <div className="news-overlay">
                  <span className="news-date">{item.date}</span>
                </div>
              </div>
              <div className="news-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href="#" className="read-more">
                  READ MORE <ArrowRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const VideosSection = () => {
  const videos = [
    {
      id: 1,
      title: "Ark Wins FNCS Grand Finals",
      author: "SORIN ARK",
      thumbnail: "https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg",
      duration: "15:32"
    },
    {
      id: 2,
      title: "Josh Dominates Eval Cup with a 1st Place Finish",
      author: "SORIN JOSH",
      thumbnail: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg",
      duration: "12:45"
    },
    {
      id: 3,
      title: "Curve Dominates FNCS Showdown",
      author: "SORIN CURVE",
      thumbnail: "https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg",
      duration: "12:18"
    },
    {
      id: 4,
      title: "Championship Victory Highlights",
      author: "SORIN ARK",
      thumbnail: "https://images.pexels.com/photos/7862428/pexels-photo-7862428.jpeg",
      duration: "18:22"
    },
    {
      id: 5,
      title: "Tournament Analysis & Strategy",
      author: "SORIN JOSH",
      thumbnail: "https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg",
      duration: "25:15"
    },
    {
      id: 6,
      title: "Pro Player Training Session",
      author: "SORIN CURVE",
      thumbnail: "https://images.pexels.com/photos/7862492/pexels-photo-7862492.jpeg",
      duration: "32:08"
    }
  ];

  return (
    <section className="videos-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            LATEST <span className="highlight">VIDEOS</span>
          </h2>
          <p className="section-description">
            Check out our most recent content featuring gameplay highlights, tutorials, 
            and behind-the-scenes moments.
          </p>
        </div>
        <div className="videos-grid">
          {videos.map((video) => (
            <div key={video.id} className="video-card">
              <div className="video-thumbnail">
                <img src={video.thumbnail} alt={video.title} />
                <div className="video-overlay">
                  <button className="play-button">
                    <Play size={32} fill="white" />
                  </button>
                  <span className="video-duration">{video.duration}</span>
                </div>
              </div>
              <div className="video-info">
                <h3>{video.title}</h3>
                <span className="video-author">{video.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button 
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      <ChevronUp size={24} />
    </button>
  );
};

function App() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.news-card, .video-card, .stream-card').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <StreamCarousel />
      <AboutSection />
      <NewsSection />
      <VideosSection />
      <ScrollToTop />
    </div>
  );
}

export default App;