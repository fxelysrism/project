import React, { useEffect, useState } from 'react';
import { ChevronUp, Play, Twitter, Youtube, MessageCircle, Users, ArrowRight, Trophy, Target, Zap, Star, Calendar, Eye, Clock, Shield, Gamepad2, Crown, Flame } from 'lucide-react';
import './styles/main.css';

const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="bg-shapes">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`shape shape-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="logo-brand">
          <div className="logo-container">
            <div className="logo-hexagon">
              <img src="/image.png" alt="REBELS Logo" width={32} height={32} />
            </div>
            <div className="brand-text">
              <span className="brand-name">REBELS</span>
              <span className="brand-tagline">ESPORTS</span>
            </div>
          </div>
        </div>
        <nav className="main-nav">
          <a href="#home" className="nav-item active">HOME</a>
          <a href="#team" className="nav-item">TEAM</a>
          <a href="#tournaments" className="nav-item">TOURNAMENTS</a>
          <a href="#content" className="nav-item">CONTENT</a>
          <a href="#news" className="nav-item">NEWS</a>
          <a href="#contact" className="nav-item">CONTACT</a>
        </nav>
        <div className="header-actions">
          <button className="join-btn">JOIN US</button>
        </div>
      </div>
    </header>
  );
};


const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <AnimatedBackground />
      <div className="container">
        <div className="hero-content-centered">
          <h1 className="hero-title">
            <span className="glitch" data-text="RISE WITH THE">RISE WITH THE</span>
            <span className="title-highlight glitch" data-text="REBELS">REBELS</span>
          </h1>
          <p className="hero-subtitle">
            Elite esports organization dominating competitive gaming across multiple titles. 
            Join the revolution and witness the future of professional gaming.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <Trophy size={20} />
              <div>
                <span className="stat-number">47</span>
                <span className="stat-label">Tournaments Won</span>
              </div>
            </div>
            <div className="stat-item">
              <Target size={20} />
              <div>
                <span className="stat-number">12</span>
                <span className="stat-label">Pro Players</span>
              </div>
            </div>
            <div className="stat-item">
              <Crown size={20} />
              <div>
                <span className="stat-number">3</span>
                <span className="stat-label">World Titles</span>
              </div>
            </div>
          </div>
          <div className="hero-actions">
            <button className="primary-btn">
              <Play size={18} />
             <a href="#contact" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
               OUR SOCIALS
             </a>
            </button>
            <button className="secondary-btn">
              <a href="#team" style={{ color: 'inherit', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                MEET THE OWNERS
              </a>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const players = [
    {
      name: "REBELS Flixz",
      role: "Founder",
      pfp: "https://i.ibb.co/GfdS9Gwz/image.png"
    },
    {
      name: "REBELS Xela",
      role: "CEO",
      pfp: "https://i.ibb.co/21Gt6v25/image.png"
    },
    {
      name: "REBELS Zeref",
      role: "Founder",
      pfp: "https://i.ibb.co/XRBXxF8/image.png"
    },
    {
      name: "REBELS Krayzo",
      role: "Founder",
      pfp: "https://i.ibb.co/j9Lfry3t/image.png"
    }
  ];

  return (
    <section id="team" className="team-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Users size={16} />
            OUR ROSTER
          </div>
          <h2 className="section-title">
            MEET THE <span className="text-gradient">LEGENDS</span>
          </h2>
          <p className="section-description">
            Our elite roster of professional gamers, each a master of their craft and 
            a champion in their respective games.
          </p>
        </div>
        <div className="team-grid">
          {players.map((player, index) => (
            <div key={index} className="player-card">
              <div className="player-image">
                <img src={player.pfp} alt={player.name} className="player-pfp" />
              </div>
              <div className="player-info">
                <div className="player-header">
                  <h3>{player.name}</h3>
                  <span className="player-role">{player.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TournamentSection = () => {
  const tournaments = [
    {
      title: "REBELS Invitational 2024",
      date: "Dec 15-17, 2024",
      prize: "$500,000",
      status: "upcoming",
      game: "Fortnite",
      participants: "64 Teams"
    },
    {
      title: "World Championship Finals",
      date: "Nov 28, 2024",
      prize: "$1,000,000",
      status: "won",
      game: "Valorant",
      participants: "32 Teams"
    },
    {
      title: "Regional Masters",
      date: "Oct 12, 2024",
      prize: "$250,000",
      status: "won",
      game: "CS2",
      participants: "16 Teams"
    }
  ];

  return (
    <section id="tournaments" className="tournament-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Trophy size={16} />
            COMPETITIONS
          </div>
          <h2 className="section-title">
            TOURNAMENT <span className="text-gradient">DOMINANCE</span>
          </h2>
        </div>
        <div className="tournament-grid">
          {tournaments.map((tournament, index) => (
            <div key={index} className={`tournament-card ${tournament.status}`}>
              <div className="tournament-header">
                <div className="tournament-status">
                  {tournament.status === 'won' ? (
                    <>
                      <Crown size={16} />
                      CHAMPIONS
                    </>
                  ) : (
                    <>
                      <Calendar size={16} />
                      UPCOMING
                    </>
                  )}
                </div>
                <div className="tournament-prize">{tournament.prize}</div>
              </div>
              <div className="tournament-content">
                <h3>{tournament.title}</h3>
                <div className="tournament-details">
                  <div className="detail-item">
                    <Clock size={14} />
                    {tournament.date}
                  </div>
                  <div className="detail-item">
                    <Gamepad2 size={14} />
                    {tournament.game}
                  </div>
                  <div className="detail-item">
                    <Users size={14} />
                    {tournament.participants}
                  </div>
                </div>
              </div>
              <div className="tournament-action">
                <button className="tournament-btn">
                  {tournament.status === 'won' ? 'VIEW HIGHLIGHTS' : 'REGISTER NOW'}
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContentSection = () => {
  const [activeTab, setActiveTab] = useState('streams');

  const streams = [
    {
      title: "Launchdate",
      streamer: "Coming Soon",
      viewers: "?????",
      game: "Twitter",
      thumbnail: "/image.png",
      live: true
    },
    {
      title: "Coming Soon",
      streamer: "Coming Soon",
      viewers: "0.0k",
      game: "discord.gg/rebelsesp",
      thumbnail: "/image.png",
      live: true
    }
  ];

  const videos = [
    {
      title: "Coming Soon",
      duration: "00:00",
      views: "0",
      thumbnail: "/image.png"
    },
    {
      title: "Coming Soon",
      duration: "00:00",
      views: "0",
      thumbnail: "/image.png"
    },
    {
      title: "Coming Soon",
      duration: "00:00",
      views: "0",
      thumbnail: "/image.png"
    }
  ];

  return (
    <section id="content" className="content-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Play size={16} />
            ENTERTAINMENT
          </div>
          <h2 className="section-title">
            REBELS <span className="text-gradient">CONTENT</span>
          </h2>
        </div>
        <div className="content-tabs">
          <button 
            className={`tab-btn ${activeTab === 'streams' ? 'active' : ''}`}
            onClick={() => setActiveTab('streams')}
          >
            <Zap size={16} />
            LIVE STREAMS
          </button>
          <button 
            className={`tab-btn ${activeTab === 'videos' ? 'active' : ''}`}
            onClick={() => setActiveTab('videos')}
          >
            <Play size={16} />
            VIDEOS
          </button>
        </div>
        
        {activeTab === 'streams' && (
          <div className="streams-grid">
            {streams.map((stream, index) => (
              <div key={index} className="stream-card">
                <div className="stream-thumbnail">
                  <img src={stream.thumbnail} alt={stream.title} />
                  <div className="stream-overlay">
                    {stream.live && (
                      <div className="live-badge">
                        <div className="pulse-dot"></div>
                        LIVE
                      </div>
                    )}
                    <div className="viewer-count">
                      <Eye size={14} />
                      {stream.viewers}
                    </div>
                    <button className="play-overlay">
                      <Play size={32} fill="white" />
                    </button>
                  </div>
                </div>
                <div className="stream-info">
                  <h3>{stream.title}</h3>
                  <p>{stream.streamer} • {stream.game}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'videos' && (
          <div className="videos-grid">
            {videos.map((video, index) => (
              <div key={index} className="video-card">
                <div className="video-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                  <div className="video-overlay">
                    <button className="play-overlay">
                      <Play size={32} fill="white" />
                    </button>
                    <div className="video-duration">{video.duration}</div>
                  </div>
                </div>
                <div className="video-info">
                  <h3>{video.title}</h3>
                  <p>{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

const NewsSection = () => {
  const news = [
    {
      title: "Coming Soon",
      excerpt: "Coming Soon",
      date: "Coming Soon",
      category: "Coming Soon",
      image: "/image.png",
      featured: true
    },
    {
      title: "Coming Soon",
      excerpt: "Coming Soon",
      date: "Coming Soon",
      category: "Facility",
      image: "/image.png"
    },
    {
      title: "Coming Soon",
      excerpt: "Coming Soon",
      date: "Coming Soon",
      category: "Coming Soon",
      image: "/image.png"
    }
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <MessageCircle size={16} />
            LATEST NEWS
          </div>
          <h2 className="section-title">
            REBELS <span className="text-gradient">UPDATES</span>
          </h2>
        </div>
        <div className="news-layout">
          <div className="featured-news">
            <div className="featured-card">
              <div className="featured-image">
                <img src={news[0].image} alt={news[0].title} />
                <div className="featured-overlay">
                  <span className="news-category">{news[0].category}</span>
                  <span className="news-date">{news[0].date}</span>
                </div>
              </div>
              <div className="featured-content">
                <h3>{news[0].title}</h3>
                <p>{news[0].excerpt}</p>
                <button className="read-more-btn">
                  READ FULL STORY
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
          <div className="news-list">
            {news.slice(1).map((item, index) => (
              <div key={index} className="news-item">
                <div className="news-thumb">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="news-content">
                  <div className="news-meta">
                    <span className="category">{item.category}</span>
                    <span className="date">{item.date}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-hexagon">
                <img src="/image.png" alt="Logo" width={32} height={32} />
              </div>
              <div className="brand-text">
                <span className="brand-name">REBELS</span>
                <span className="brand-tagline">ESPORTS</span>
              </div>
            </div>
            <p>Elite esports organization pushing the boundaries of competitive gaming.</p>
            <div className="social-links">
              <a href="https://x.com/RebelsESP" target="_blank" rel="noopener noreferrer" className="social-link">
                <Twitter size={20} />
              </a>
              <a href="https://www.youtube.com/@Rebels2025" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="https://discord.gg/rebelsesp" target="_blank" rel="noopener noreferrer" className="social-link">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <div className="link-group">
              <h4>Team</h4>
              <a href="#">Players</a>
              <a href="#">Coaches</a>
              <a href="#">Management</a>
            </div>
            <div className="link-group">
              <h4>Tournaments</h4>
              <a href="#">Schedule</a>
              <a href="#">Results</a>
              <a href="#">Rankings</a>
            </div>
            <div className="link-group">
              <h4>Content</h4>
              <a href="#">Streams</a>
              <a href="#">Videos</a>
              <a href="#">Highlights</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 REBELS Esports. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
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

    // Intersection Observer for animations
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

    document.querySelectorAll('.player-card, .tournament-card, .stream-card, .video-card, .news-item').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Header />
      <HeroSection />
      <TeamSection />
      <TournamentSection />
      <ContentSection />
      <NewsSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;