import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, MapPin, Zap, Code, Heart, Briefcase, Users, TrendingUp, Mail, Phone, Download, Star, Server, Database, CheckCircle, Calendar, Rocket } from 'lucide-react';
import CharuProfilepic from "../src/assets/Charu_ProfilePic.jpg";

// lucide-react no longer ships brand/logo icons (Github, Linkedin, etc.)
// Simple inline SVGs used instead so nothing breaks.
const GithubIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.4-5.26 5.68.41.36.78 1.08.78 2.17 0 1.57-.01 2.83-.01 3.22 0 .3.2.66.79.55A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);


const COLORS = {
  PRIMARY: '#a855f7',
  PRIMARY_LIGHT: '#c084fc',
  SECONDARY: '#ec4899',
  ACCENT_CYAN: '#06b6d4',
  ACCENT_GREEN: '#10b981',
  ACCENT_BLUE: '#3b82f6',
  ACCENT_ORANGE: '#f97316',
  BG_DARK: '#0f172a',
  BG_PURPLE: '#581c87',
  BG_CARD: 'rgba(255, 255, 255, 0.05)',
  BG_HOVER: 'rgba(255, 255, 255, 0.1)',
  BORDER_DEFAULT: 'rgba(255, 255, 255, 0.1)',
  BORDER_HOVER: 'rgba(168, 85, 247, 0.5)',
  BORDER_PURPLE: 'rgba(168, 85, 247, 0.3)',
  TEXT_PRIMARY: '#ffffff',
  TEXT_SECONDARY: '#9ca3af',
  TEXT_MUTED: '#6b7280',
  STATUS_SUCCESS: '#10b981',
  GRADIENT_PRIMARY: 'linear-gradient(to right, #a855f7, #ec4899)',
  GRADIENT_PURPLE_PINK: 'linear-gradient(to right, #c084fc, #f472b6, #c084fc)',
  GRADIENT_GREEN: 'linear-gradient(to right, #10b981, #059669)',
};

const SECTION_IDS = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navigation = ({ activeSection, setActiveSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Scroll-spy: find which section is currently in view
      let current = SECTION_IDS[0];
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setActiveSection]);

  const menuItems = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'];

  const handleMenuClick = (item) => {
    const id = item.toLowerCase();
    setActiveSection(id);
    setIsMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'backdrop-blur-xl shadow-lg' : ''}`}
      style={{ backgroundColor: scrolled ? 'rgba(15, 23, 42, 0.95)' : 'transparent' }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl" style={{ background: COLORS.GRADIENT_PRIMARY }}>C</div>
            <span className="text-xl font-bold">Charulatha</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className="text-sm font-semibold transition-colors relative group"
                style={{ color: activeSection === item.toLowerCase() ? COLORS.PRIMARY : COLORS.TEXT_PRIMARY }}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 transition-all ${activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'}`}
                  style={{ backgroundColor: COLORS.PRIMARY }}
                />
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden backdrop-blur-xl border-t" style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', borderTopColor: COLORS.BORDER_PURPLE }}>
          <div className="px-6 py-4 space-y-3">
            {menuItems.map((item) => (
              <button key={item} onClick={() => handleMenuClick(item)} className="block py-2 w-full text-left" style={{ color: activeSection === item.toLowerCase() ? COLORS.PRIMARY : COLORS.TEXT_PRIMARY }}>
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HeroSection = () => {
  const stats = [
    { icon: <Briefcase />, value: '7', label: 'Major Projects' },
    { icon: <Code />, value: '15+', label: 'Technologies' },
    { icon: <Users />, value: '100%', label: 'Client Satisfaction' },
    { icon: <TrendingUp />, value: '2+', label: 'Years Experience' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-6" style={{ backgroundColor: `${COLORS.PRIMARY}1A`, borderWidth: '1px', borderColor: COLORS.BORDER_PURPLE }}>
              <div className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: COLORS.STATUS_SUCCESS }} />
              <span className="text-sm font-semibold">Available for Opportunities</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
              <span>Hi, I'm </span>
              <span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PURPLE_PINK }}>Charulatha</span>
            </h1>
            <div className="text-2xl md:text-3xl font-bold mb-4" style={{ color: COLORS.TEXT_SECONDARY }}>Full Stack Developer</div>
            <p className="text-lg mb-3" style={{ color: COLORS.TEXT_SECONDARY }}>React.js • React Native • Node.js • FastAPI</p>
            <p className="mb-6 leading-relaxed max-w-2xl" style={{ color: COLORS.TEXT_SECONDARY }}>
              I build end-to-end web and mobile applications with clean UI, scalable architecture, and real-world business workflows.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all hover:scale-105"
                style={{ background: COLORS.GRADIENT_PRIMARY, boxShadow: `0 10px 40px ${COLORS.PRIMARY}50` }}
              >
                <span>View My Work</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 rounded-full font-semibold border-2 transition-all hover:scale-105"
                style={{ borderColor: COLORS.PRIMARY }}
              >
                Get In Touch
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2"><MapPin size={16} style={{ color: COLORS.PRIMARY }} /><span style={{ color: COLORS.TEXT_SECONDARY }}>Coimbatore, TN</span></div>
              <div className="flex items-center space-x-2"><Zap size={16} style={{ color: COLORS.PRIMARY }} /><span style={{ color: COLORS.TEXT_SECONDARY }}>Open to Relocate</span></div>
            </div>
          </div>
          <div className="relative hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full blur-3xl opacity-50 animate-pulse" style={{ background: COLORS.GRADIENT_PRIMARY }} />
              <div className="relative w-80 h-80 rounded-full p-1" style={{ background: COLORS.GRADIENT_PRIMARY }}>

                <img
                  src={CharuProfilepic}
                  alt="Charulatha - Profile"
                  className="w-full h-full rounded-full object-cover"
                  style={{ backgroundColor: COLORS.BG_DARK }}
                />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 backdrop-blur-xl border rounded-2xl p-4 animate-bounce" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <Code style={{ color: COLORS.PRIMARY }} size={28} className="mb-1" />
              <div className="text-sm font-semibold">Clean Code</div>
            </div>
            <div className="absolute -bottom-8 -left-8 backdrop-blur-xl border rounded-2xl p-4" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <Heart style={{ color: COLORS.SECONDARY }} size={28} className="mb-1" />
              <div className="text-sm font-semibold">Pixel Perfect</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {stats.map((stat, i) => (
            <div key={i} className="group backdrop-blur-xl rounded-2xl p-5 border transition-all hover:scale-105" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <div className="mb-2" style={{ color: COLORS.PRIMARY }}>{stat.icon}</div>
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  const locationData = [
    { label: 'Current Location', value: 'Coimbatore, Tamil Nadu' },
    { label: 'Open to Relocate', value: 'Coimbatore / Chennai / Bangalore' }
  ];
  const whatILove = ['Writing clean, maintainable code', 'Designing beautiful user interfaces', 'Solving real business problems', 'Building production-quality features', 'Continuous learning & growth'];

  return (
    <section id="about" className="relative py-20 px-6" style={{ backgroundColor: COLORS.BG_CARD }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black mb-4">
            <span>About </span>
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Me</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: COLORS.TEXT_SECONDARY }}>
            Passionate Full Stack Developer with expertise in healthcare systems, job portals, enterprise dashboards, and mobile applications.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <h3 className="text-2xl font-bold mb-4 flex items-center space-x-3"><MapPin style={{ color: COLORS.PRIMARY }} /><span>Location & Availability</span></h3>
              <div className="space-y-3">
                {locationData.map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl" style={{ backgroundColor: `${COLORS.PRIMARY}0D` }}>
                    <span style={{ color: COLORS.TEXT_SECONDARY }}>{item.label}:</span>
                    <span className="font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <h3 className="text-2xl font-bold mb-4">What I Love</h3>
              <div className="space-y-2">
                {whatILove.map((item, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 rounded-lg" style={{ backgroundColor: `${COLORS.PRIMARY}0D` }}>
                    <div className="w-2 h-2 rounded-full" style={{ background: COLORS.GRADIENT_PRIMARY }} />
                    <span style={{ color: COLORS.TEXT_SECONDARY }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ background: `linear-gradient(135deg, ${COLORS.PRIMARY}1A, ${COLORS.SECONDARY}1A)`, borderColor: COLORS.BORDER_PURPLE }}>
            <h3 className="text-3xl font-bold mb-4">Who Am I?</h3>
            <div className="space-y-3" style={{ color: COLORS.TEXT_SECONDARY }}>
              <p className="leading-relaxed text-lg">I'm a passionate full-stack developer who loves creating seamless digital experiences across web and mobile.</p>
              <p className="leading-relaxed text-lg">My approach combines technical proficiency with creative problem-solving, ensuring every project exceeds expectations.</p>
              <p className="leading-relaxed text-lg">I have successfully built healthcare enterprise systems, job portals, mobile apps, and enterprise HR platforms.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {[{ label: 'Clean Code', value: '100%' }, { label: 'Best Practices', value: '100%' }, { label: 'Performance', value: '98%' }, { label: 'Security', value: '99%' }].map((stat, i) => (
                <div key={i} className="backdrop-blur-xl rounded-xl p-3 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
                  <div className="text-2xl font-black mb-1" style={{ color: COLORS.PRIMARY }}>{stat.value}</div>
                  <div className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PhilosophySection = () => {
  const philosophy = [
    { icon: '🧩', title: 'Reusable Components', desc: 'Build modular, maintainable code', color: COLORS.ACCENT_BLUE },
    { icon: '🎨', title: 'Intuitive UI', desc: 'Design beautiful, easy-to-use experiences', color: COLORS.PRIMARY },
    { icon: '✨', title: 'Clean Code', desc: 'Follow best practices and coding standards', color: COLORS.ACCENT_CYAN },
    { icon: '⚡', title: 'Performance', desc: 'Optimize for speed and efficiency', color: COLORS.ACCENT_ORANGE },
    { icon: '📚', title: 'Always Learning', desc: 'Stay updated with new technologies', color: COLORS.ACCENT_GREEN }
  ];

  return (
    <section className="relative py-14 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <h3 className="text-4xl font-bold mb-3"><span>Development </span><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Philosophy</span></h3>
          <p style={{ color: COLORS.TEXT_SECONDARY }}>The principles that guide my development approach</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {philosophy.map((item, i) => (
            <div key={i} className="group backdrop-blur-xl rounded-2xl p-5 border transition-all hover:scale-105" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = item.color; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.BORDER_DEFAULT; }}
            >
              <div className="flex items-start space-x-4">
                <div className="text-4xl transform transition-transform group-hover:scale-125 group-hover:rotate-12">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                  <p style={{ color: COLORS.TEXT_SECONDARY }}>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const frontend = [{ name: 'React.js', level: 95, icon: '⚛️' }, { name: 'React Native', level: 88, icon: '📱' }, { name: 'TypeScript', level: 88, icon: '🔷' }, { name: 'Tailwind CSS', level: 92, icon: '🎨' }];
  const backend = [{ name: 'Python / FastAPI', level: 88, icon: '🐍' }, { name: 'Node.js', level: 85, icon: '🟢' }, { name: 'MySQL / PostgreSQL', level: 85, icon: '🐘' }, { name: 'REST APIs', level: 92, icon: '🔌' }];
  const cloudDeploy = ['AWS Amplify', 'Amazon EC2', 'Application Load Balancer', 'Nginx', 'Cloudflare DNS', 'AWS ACM (SSL/TLS)', 'Ubuntu / systemd', 'GitHub CI/CD'];
  const tools = ['Git & GitHub', 'Figma', 'VS Code', 'Postman', 'JMeter'];
  const softSkills = ['Clear Communication', 'Problem Solving', 'Fast Learner', 'Team Collaboration'];

  return (
    <section id="skills" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black mb-4"><span>Technical </span><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Skills</span></h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
            <div className="flex items-center space-x-3 mb-6"><Code style={{ color: COLORS.PRIMARY }} size={28} /><h3 className="text-2xl font-bold">Frontend</h3></div>
            <div className="space-y-4">
              {frontend.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2"><span className="font-semibold">{skill.icon} {skill.name}</span><span className="font-bold" style={{ color: COLORS.PRIMARY }}>{skill.level}%</span></div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.BG_HOVER }}><div className="h-full rounded-full transition-all duration-1000" style={{ width: `${skill.level}%`, background: COLORS.GRADIENT_PRIMARY }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
            <div className="flex items-center space-x-3 mb-6"><Server style={{ color: COLORS.ACCENT_GREEN }} size={28} /><h3 className="text-2xl font-bold">Backend</h3></div>
            <div className="space-y-4">
              {backend.map((skill, i) => (
                <div key={i}>
                  <div className="flex items-center justify-between mb-2"><span className="font-semibold">{skill.icon} {skill.name}</span><span className="font-bold" style={{ color: COLORS.ACCENT_GREEN }}>{skill.level}%</span></div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: COLORS.BG_HOVER }}><div className="h-full rounded-full transition-all duration-1000" style={{ width: `${skill.level}%`, background: COLORS.GRADIENT_GREEN }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <div className="flex items-center space-x-3 mb-4"><Database style={{ color: COLORS.ACCENT_CYAN }} size={28} /><h3 className="text-2xl font-bold">Tools</h3></div>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool, i) => (<div key={i} className="rounded-lg p-2.5 border text-sm font-semibold text-center" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}>{tool}</div>))}
              </div>
            </div>
            <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}>
              <div className="flex items-center space-x-3 mb-4"><Users style={{ color: COLORS.ACCENT_ORANGE }} size={28} /><h3 className="text-2xl font-bold">Soft Skills</h3></div>
              <div className="space-y-2">
                {softSkills.map((skill, i) => (<div key={i} className="flex items-center space-x-3 p-2.5 rounded-lg" style={{ backgroundColor: `${COLORS.ACCENT_ORANGE}1A` }}><Star size={16} style={{ color: '#fbbf24' }} fill="#fbbf24" /><span style={{ color: COLORS.TEXT_SECONDARY }}>{skill}</span></div>))}
              </div>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-xl rounded-3xl p-6 border" style={{ background: `linear-gradient(135deg, ${COLORS.ACCENT_ORANGE}1A, ${COLORS.PRIMARY}1A)`, borderColor: COLORS.BORDER_PURPLE }}>
          <div className="flex items-center space-x-3 mb-4"><Rocket style={{ color: COLORS.ACCENT_ORANGE }} size={28} /><h3 className="text-2xl font-bold">Cloud & Deployment (AWS)</h3></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {cloudDeploy.map((item, i) => (<div key={i} className="rounded-lg p-3 border text-sm font-semibold text-center transition-all hover:scale-105" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}>{item}</div>))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(0);

  const projects = [
    {
      title: 'HR Intra Portal',
      category: 'Enterprise Web Application',
      role: 'Full Stack Developer',
      tech: ['React 19', 'TypeScript', 'Vite', 'FastAPI', 'Microsoft Graph API', 'Entra ID (Azure AD)', 'AWS Amplify', 'EC2', 'Nginx'],
      description: 'A secure, enterprise-grade HR Intranet integrated with Microsoft 365 — built end-to-end from authentication architecture to production AWS deployment. Replaces static mock data with a fully dynamic system backed by SharePoint as a headless CMS.',
      metrics: [{ label: 'Modules Built', value: '8+' }, { label: 'User Roles', value: '3' }, { label: 'API Endpoints', value: '20+' }, { label: 'Deployed On', value: 'AWS' }],
      categories: [
        { name: 'Authentication & Security', icon: '🔐', color: COLORS.PRIMARY, items: ['Implemented Microsoft Entra ID login using OAuth 2.0 Authorization Code Flow with PKCE via MSAL', 'Built 3-tier Role-Based Access Control (Admin, Publisher, Viewer) enforced on both frontend and FastAPI backend', 'Designed system idle-timeout detection (1 hour) with automatic WFH checkout and session expiry handling', 'Engineered delayed-checkout architecture distinguishing tab close vs refresh using beforeunload + keepalive'] },
        { name: 'Core Modules Developed', icon: '🧩', color: COLORS.ACCENT_BLUE, items: ['Announcements module with rich media, PDF/link attachments, archive & restore, and DL-based email notifications', 'Real-time in-app Notifications system synced with backend read/unread state', 'Useful Links module with dynamic categorization and SharePoint-backed CRUD', 'Documents module as a native overlay for SharePoint Document Libraries with file-level permissions', 'My Profile integration pulling live data from Microsoft Graph', 'Customizable Settings for theme (light/dark) and accent preferences'] },
        { name: 'Work From Home System', icon: '⏱️', color: COLORS.ACCENT_GREEN, items: ['Built live check-in/check-out flow with a real-time ticking session timer accurate across navigation', 'Automated duplicate-session cleanup for users checking in across multiple devices', 'Implemented accurate attendance-percentage calculation aggregating check-ins into single "day present"', 'Handled UTC timestamp normalization with local timezone conversion'] },
        { name: 'Dashboard & Reporting', icon: '📊', color: COLORS.ACCENT_CYAN, items: ['Built a drag-and-drop customizable dashboard using react-grid-layout with persisted widget positions', 'Developed independent, fault-isolated widgets (Announcements, Notifications, Links, Documents, WFH status)', 'Created Working Hours Reports with Recharts visualizations and dynamic filtering', 'Implemented client-side PDF export (html2pdf.js) and Excel export (xlsx)', 'Optimized heavy aggregation logic using useMemo to sustain smooth performance'] },
        { name: 'UI/UX Engineering', icon: '🎨', color: COLORS.SECONDARY, items: ['Built a custom glassmorphic design system in scoped Vanilla CSS for a premium, distinctive look', 'Added Framer Motion micro-interactions for modals, layout transitions, and list animations', 'Implemented Skeleton loaders across all widgets to eliminate layout shift', 'Ensured accessibility with semantic HTML and aria-labels on icon-only elements'] },
        { name: 'Production Deployment (AWS)', icon: '☁️', color: COLORS.ACCENT_ORANGE, items: ['Deployed React frontend on AWS Amplify with GitHub-based CI/CD', 'Configured custom domain with SSL/HTTPS using AWS ACM', 'Managed DNS via Cloudflare, including CNAME records and domain verification', 'Deployed FastAPI backend on AWS EC2 (Ubuntu) behind an Nginx reverse proxy', 'Configured an Application Load Balancer for secure, resilient traffic routing', 'Managed backend uptime using systemd for auto-restart & recovery'] },
        { name: 'Testing & Quality', icon: '✅', color: COLORS.ACCENT_GREEN, items: ['Maintained a central test-case tracker covering Auth, WFH, CRUD, and responsive UI scenarios', 'Diagnosed and fixed a critical production bug distinguishing browser refresh from tab close during checkout', 'Performed regression testing across peripheral features whenever core fixes shipped'] }
      ],
      icon: '🏢'
    },
    {
      title: 'Aidas Intelligence Platform',
      category: 'Multi-Tenant SaaS Platform',
      role: 'Full Stack Developer',
      tech: ['React.js', 'Python', 'FastAPI', 'MySQL', 'AWS S3', 'SQLAlchemy'],
      description: 'An enterprise-grade multi-tenant AI & analytics SaaS platform supporting secure data management, workflow automation, and machine learning lifecycle tracking across multiple organizations.',
      metrics: [{ label: 'Architecture', value: 'Multi-tenant' }, { label: 'Backend', value: 'FastAPI' }, { label: 'Storage', value: 'AWS S3' }, { label: 'Database', value: 'MySQL' }],
      categories: [
        { name: 'Platform Engineering', icon: '🏗️', color: COLORS.PRIMARY, items: ['Designed and developed a multi-tenant architecture supporting secure, isolated data management per organization', 'Implemented role-based access control and a guided tenant-onboarding workflow', 'Built REST APIs with FastAPI and modeled relational schemas with SQLAlchemy against MySQL', 'Integrated AWS S3 for scalable file and asset storage'] },
        { name: 'Product Features', icon: '⚙️', color: COLORS.ACCENT_CYAN, items: ['Built customizable dashboards to improve usability and adapt to tenant needs', 'Developed scheduling and alert-management features for operational workflows', 'Implemented machine learning lifecycle management tooling', 'Added workflow automation to reduce manual operational overhead'] }
      ],
      icon: '🤖'
    },
    {
      title: 'Healthcare Web Application',
      category: 'Web Application',
      role: 'Full Stack Developer',
      tech: ['React.js', 'Node.js', 'PostgreSQL'],
      description: 'Complete healthcare management platform built around real hospital workflows — doctors, lab, scan, and scopy departments — with full data lifecycle handling from entry to billing to reporting.',
      metrics: [{ label: 'Modules', value: '4' }, { label: 'CRUD Flows', value: 'Full' }, { label: 'DB', value: 'PostgreSQL' }, { label: 'Role', value: 'Full Stack' }],
      categories: [
        { name: 'Modules Built', icon: '🏥', color: COLORS.ACCENT_GREEN, items: ['Doctor screen and Doctor session screen for managing consultations', 'Lab module: patient list, lab bill generation, and lab report screens', 'Scan module: scan list, scan bill generation, and scan report screens', 'Scopy module: scopy list, scopy bill generation, and scopy report screens'] },
        { name: 'Technical Highlights', icon: '🛠️', color: COLORS.ACCENT_BLUE, items: ['Built full CRUD operations across every module (Create, Read, Update, Delete)', 'Handled dynamic data binding and business-rule validations end-to-end', 'Built the complete flow from UI → API → PostgreSQL database', 'Designed a professional, clean UI tailored to real medical workflows'] }
      ],
      icon: '🏥'
    },
    {
      title: 'Job Portal Application',
      category: 'Web Application',
      role: 'Frontend Developer',
      tech: ['React.js', 'Tailwind CSS', 'Node.js'],
      description: 'Full-featured job portal with two completely separate experiences — Employers managing hiring pipelines, and Job Seekers managing their search and applications.',
      metrics: [{ label: 'User Types', value: '2' }, { label: 'Dashboards', value: '2' }, { label: 'Forms', value: 'Validated' }, { label: 'Design', value: 'Responsive' }],
      categories: [
        { name: 'Employer Side', icon: '💼', color: COLORS.PRIMARY, items: ['Employer Dashboard with hiring overview', 'Post a Job flow with structured job-creation forms', 'My Job Posts management screen', 'Received Applications tracking', 'Company Profile & account Settings'] },
        { name: 'Job Seeker Side', icon: '🔍', color: COLORS.ACCENT_CYAN, items: ['Job Seeker Dashboard', 'Search Jobs with filtering', 'Saved Jobs and Applications tracking', 'Profile Settings management'] },
        { name: 'Technical Highlights', icon: '⚙️', color: COLORS.ACCENT_GREEN, items: ['Built the full menu structure, routing, and navigation for both user types', 'Built reusable components for dashboards, job cards, and job-post forms', 'Implemented form validations and fully responsive layouts'] }
      ],
      icon: '💼'
    },
    {
      title: 'Home Service Mobile App',
      category: 'Mobile Application',
      role: 'React Native Developer',
      tech: ['React Native', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      description: 'A dual-sided mobile app connecting home-service Workers (plumbers, electricians, etc.) with Users booking those services — including live analytics, scheduling, and booking flows.',
      metrics: [{ label: 'Apps in One', value: '2' }, { label: 'Platform', value: 'React Native' }, { label: 'DB', value: 'MongoDB' }, { label: 'Auth', value: 'Login/Register' }],
      categories: [
        { name: 'Workers App', icon: '🧰', color: COLORS.ACCENT_ORANGE, items: ['Dashboard with pie charts for positive rating, cancel rate, and accept rate', 'Total earnings and order summary (total, pending, completed, cancelled)', 'Jobs menu: requests from users, active jobs, completed jobs, cancelled jobs', 'Profile screen with worker info, app settings, and support information'] },
        { name: 'Users App', icon: '👥', color: COLORS.SECONDARY, items: ['Home screen with worker categories (plumber, electrician, etc.) and recommended workers', 'Explore screen with worker cards showing photo, name, category, rating, and price', 'Worker profile screen with Schedule and Book Now actions', 'Smooth Login and Registration navigation flows'] }
      ],
      icon: '🔧'
    },
    {
      title: 'Axcen Innovation Lab Website',
      category: 'Corporate Website',
      role: 'Frontend Developer',
      tech: ['React.js', 'Tailwind CSS'],
      description: 'Fully self-developed the official corporate website for Axcen Innovation Lab Private Limited — live at axcentech.com — reflecting their positioning as a software product development and IT services company that turns ideas into reality with modern tech.',
      metrics: [{ label: 'Live Site', value: 'axcentech.com' }, { label: 'Built', value: 'From Scratch' }, { label: 'Design', value: 'Responsive' }, { label: 'Stack', value: 'React' }],
      categories: [
        { name: 'Design & Animation', icon: '🎨', color: COLORS.PRIMARY, items: ['Designed and animated the entire UI independently — from layout to micro-interactions', 'Built smooth section transitions and scroll-based animations to make the brand feel modern and dynamic', 'Created a clean component structure reflecting the "cutting-edge technology" brand positioning', 'Designed dedicated pages for company services, showcasing the product-development focus'] },
        { name: 'Technical Highlights', icon: '⚙️', color: COLORS.ACCENT_CYAN, items: ['Built fully functional navigation across all company pages', 'Ensured the site is fully responsive across desktop, tablet, and mobile', 'Structured reusable React components for long-term maintainability'] }
      ],
      icon: '🏢'
    },
    {
      title: 'Travel App UI Design',
      category: 'UI/UX Design',
      role: 'UI/UX Designer',
      tech: ['Figma'],
      description: 'A complete travel application UI prototype designed from scratch, focused on visual hierarchy and a clean, user-friendly booking experience.',
      metrics: [{ label: 'Tool', value: 'Figma' }, { label: 'Screens', value: 'Multiple' }, { label: 'Type', value: 'Prototype' }, { label: 'Focus', value: 'UX' }],
      categories: [
        { name: 'Screens Designed', icon: '📱', color: COLORS.ACCENT_BLUE, items: ['Landing screens introducing the app experience', 'Destination cards for browsing travel options', 'Explore section UI for discovery', 'Filters and booking screens for completing a trip'] },
        { name: 'Design Focus', icon: '🎯', color: COLORS.SECONDARY, items: ['Clean, modern travel-themed color palette', 'Structured layouts prioritizing visual hierarchy', 'User-friendly flows from discovery to booking'] }
      ],
      icon: '✈️'
    }
  ];

  return (
    <section id="projects" className="relative py-20 px-6" style={{ backgroundColor: COLORS.BG_CARD }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black mb-4"><span>Featured </span><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Projects</span></h2>
          <p className="text-xl" style={{ color: COLORS.TEXT_SECONDARY }}>7 Major Projects Delivered — click any project to see the full scope of work</p>
        </div>

        <div className="space-y-5">
          {projects.map((project, i) => {
            const isOpen = expandedProject === i;
            return (
              <div key={i} className="backdrop-blur-xl rounded-3xl overflow-hidden border transition-all" style={{ backgroundColor: COLORS.BG_CARD, borderColor: isOpen ? COLORS.BORDER_HOVER : COLORS.BORDER_DEFAULT }}>
                <div className="p-6 md:p-8 cursor-pointer" onClick={() => setExpandedProject(isOpen ? -1 : i)}>
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border" style={{ backgroundColor: `${COLORS.PRIMARY}33`, borderColor: COLORS.BORDER_PURPLE, color: COLORS.PRIMARY }}>{project.category}</div>
                      <div className="flex items-center space-x-4 mb-3"><span className="text-5xl">{project.icon}</span><div><h3 className="text-3xl font-black">{project.title}</h3><p className="text-sm" style={{ color: COLORS.TEXT_MUTED }}>{project.role}</p></div></div>
                      <p className="leading-relaxed text-lg mb-4" style={{ color: COLORS.TEXT_SECONDARY }}>{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, j) => (<span key={j} className="px-3 py-1.5 rounded-lg text-sm font-mono border" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}>{tech}</span>))}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {project.metrics.map((m, j) => (
                          <div key={j} className="rounded-xl p-3 border text-center" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}>
                            <div className="text-lg font-black" style={{ color: COLORS.PRIMARY }}>{m.value}</div>
                            <div className="text-xs" style={{ color: COLORS.TEXT_SECONDARY }}>{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <button
                      className="flex-shrink-0 flex items-center gap-2 px-5 py-3 rounded-full font-semibold text-sm self-start"
                      style={{ background: isOpen ? COLORS.GRADIENT_PRIMARY : COLORS.BG_HOVER, border: `1px solid ${COLORS.BORDER_DEFAULT}` }}
                    >
                      {isOpen ? 'Hide Full Details' : 'See Full Scope of Work'}
                      <ChevronRight size={16} style={{ transform: isOpen ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }} />
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="px-6 md:px-8 pb-8 pt-2 border-t" style={{ borderTopColor: COLORS.BORDER_DEFAULT }}>
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      {project.categories.map((cat, ci) => (
                        <div key={ci} className="rounded-2xl p-5 border" style={{ backgroundColor: `${cat.color}0D`, borderColor: `${cat.color}33` }}>
                          <h4 className="font-bold mb-3 flex items-center gap-2" style={{ color: cat.color }}>
                            <span className="text-2xl">{cat.icon}</span>
                            <span>{cat.name}</span>
                          </h4>
                          <div className="space-y-2">
                            {cat.items.map((item, ii) => (
                              <div key={ii} className="flex items-start space-x-2">
                                <ChevronRight size={14} className="flex-shrink-0 mt-1" style={{ color: cat.color }} />
                                <span className="text-sm leading-relaxed" style={{ color: COLORS.TEXT_SECONDARY }}>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const jobs = [
    {
      role: 'Full Stack Developer',
      company: 'Aidas Technologies India Private Limited',
      location: 'Coimbatore',
      duration: 'Jan 2026 – Present',
      current: true,
      points: [
        'Developed frontend and backend features for multiple platform modules',
        'Designed and implemented REST APIs using FastAPI',
        'Worked on Role-Based Access Control (RBAC) and tenant onboarding workflow',
        'Implemented timezone handling across the application',
        'Designed database schemas and optimized SQL queries',
        'Created technical documentation and workflow diagrams',
        'Supported QA test case design aligning with business requirements'
      ]
    },
    {
      role: 'Software Engineer',
      company: 'Axcen Innovation Lab Private Limited',
      location: 'Trichy',
      duration: 'Oct 2023 – Dec 2025',
      current: false,
      points: [
        'Enhanced responsive web applications using React.js, Node.js, and MySQL',
        'Built and maintained RESTful APIs, improving front-end/back-end data exchange',
        'Managed code versioning and team collaboration using GitHub',
        'Deployed and maintained web applications on the Azure cloud platform',
        'Conducted performance testing with JMeter to identify and fix bottlenecks',
        'Enhanced UX with modern UI features using HTML5, CSS3, and JavaScript'
      ]
    }
  ];

  const deploymentHighlights = [
    'Deployed React.js frontend on AWS Amplify with GitHub-based CI/CD',
    'Configured custom domain & SSL/HTTPS via AWS Amplify + ACM',
    'Managed DNS via Cloudflare (CNAME records, domain verification)',
    'Deployed FastAPI backend on AWS EC2 (Ubuntu) with Nginx reverse proxy',
    'Configured Application Load Balancer for secure traffic routing',
    'Managed backend services with systemd for auto-restart & recovery'
  ];

  const whyHireMe = [
    { icon: '🚀', title: 'Production-Quality Apps', desc: 'Real, industrial-level applications', color: COLORS.ACCENT_BLUE },
    { icon: '☁️', title: 'Cloud Deployment', desc: 'AWS Amplify, EC2, Nginx, ALB', color: COLORS.ACCENT_ORANGE },
    { icon: '📱', title: 'Full Stack Expertise', desc: 'Web and mobile development', color: COLORS.ACCENT_CYAN },
    { icon: '✨', title: 'Clean Architecture', desc: 'Structured, maintainable code', color: COLORS.ACCENT_GREEN },
    { icon: '⚡', title: 'Fast Learner', desc: 'Quickly adapt to new tech', color: COLORS.PRIMARY },
    { icon: '🤝', title: 'Team Player', desc: 'Small teams & startups', color: COLORS.SECONDARY },
    { icon: '🤖', title: 'AI-Powered Dev', desc: 'Boost productivity with AI tools', color: COLORS.PRIMARY },
    { icon: '🔧', title: 'Problem Solver', desc: 'Debugging & optimization', color: COLORS.ACCENT_CYAN }
  ];

  return (
    <section id="experience" className="relative py-20 px-6">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-5xl md:text-6xl font-black mb-4"><span>Professional </span><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Experience</span></h2>
        </div>

        <div className="mb-10 space-y-5">
          {jobs.map((job, idx) => (
            <div key={idx} className="backdrop-blur-xl rounded-3xl p-6 md:p-8 border" style={{ background: `linear-gradient(135deg, ${COLORS.PRIMARY}1A, ${COLORS.SECONDARY}1A)`, borderColor: COLORS.BORDER_PURPLE }}>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5">
                <div className="flex items-center space-x-3 mb-3">
                  <Briefcase style={{ color: COLORS.PRIMARY }} size={28} />
                  <div>
                    <h3 className="text-2xl font-black flex items-center gap-3">
                      {job.role}
                      {job.current && (
                        <span className="text-xs font-bold px-3 py-1 rounded-full" style={{ backgroundColor: `${COLORS.ACCENT_GREEN}33`, color: COLORS.ACCENT_GREEN }}>CURRENT</span>
                      )}
                    </h3>
                    <p className="text-lg font-semibold mt-1" style={{ color: COLORS.PRIMARY }}>{job.company}</p>
                  </div>
                </div>
                <div className="flex flex-col space-y-2">
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border" style={{ backgroundColor: `${COLORS.ACCENT_GREEN}33`, borderColor: COLORS.ACCENT_GREEN }}>
                    <Calendar size={16} style={{ color: COLORS.ACCENT_GREEN }} /><span className="font-bold text-sm" style={{ color: COLORS.ACCENT_GREEN }}>{job.duration}</span>
                  </div>
                  <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border" style={{ backgroundColor: `${COLORS.ACCENT_CYAN}33`, borderColor: COLORS.ACCENT_CYAN }}>
                    <MapPin size={16} style={{ color: COLORS.ACCENT_CYAN }} /><span className="font-semibold text-sm" style={{ color: COLORS.ACCENT_CYAN }}>{job.location}</span>
                  </div>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {job.points.map((item, i) => (<div key={i} className="flex items-start space-x-3 p-3 rounded-xl" style={{ backgroundColor: `${COLORS.PRIMARY}1A` }}><ChevronRight size={20} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.PRIMARY }} /><span style={{ color: COLORS.TEXT_SECONDARY }}>{item}</span></div>))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-10 backdrop-blur-xl rounded-3xl p-6 md:p-8 border" style={{ background: `linear-gradient(135deg, ${COLORS.ACCENT_ORANGE}1A, ${COLORS.ACCENT_BLUE}1A)`, borderColor: COLORS.BORDER_PURPLE }}>
          <h3 className="text-2xl font-bold mb-4 flex items-center space-x-2" style={{ color: COLORS.ACCENT_ORANGE }}>
            <Rocket size={24} /><span>Production Deployment & Cloud Infrastructure</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            {deploymentHighlights.map((item, i) => (<div key={i} className="flex items-start space-x-3 p-3 rounded-xl" style={{ backgroundColor: `${COLORS.ACCENT_ORANGE}1A` }}><ChevronRight size={20} className="flex-shrink-0 mt-0.5" style={{ color: COLORS.ACCENT_ORANGE }} /><span style={{ color: COLORS.TEXT_SECONDARY }}>{item}</span></div>))}
          </div>
        </div>

        <div>
          <div className="text-center mb-8"><h3 className="text-4xl font-black mb-3"><span>Why </span><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Hire Me</span></h3></div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {whyHireMe.map((item, i) => (
              <div key={i} className="group backdrop-blur-xl rounded-2xl p-5 border transition-all hover:scale-105" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_DEFAULT }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = item.color; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = COLORS.BORDER_DEFAULT; }}
              >
                <div className="text-4xl mb-3 transform transition-transform group-hover:scale-125 group-hover:rotate-12">{item.icon}</div>
                <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                <p className="text-sm" style={{ color: COLORS.TEXT_SECONDARY }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contactMethods = [
    { icon: <Mail size={24} />, label: 'Email', value: 'charulatha0229@gmail.com', color: COLORS.PRIMARY, href: 'mailto:charulatha0229@gmail.com' },
    { icon: <Phone size={24} />, label: 'Phone', value: '+91 86752 04168', color: COLORS.SECONDARY, href: 'tel:+918675204168' },
    { icon: <MapPin size={24} />, label: 'Location', value: 'Coimbatore, TN', color: COLORS.ACCENT_CYAN, href: null }
  ];

  return (
    <section id="contact" className="relative py-20 px-6" style={{ backgroundColor: COLORS.BG_CARD }}>
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="backdrop-blur-2xl rounded-[3rem] p-8 md:p-12 border" style={{ backgroundColor: COLORS.BG_CARD, borderColor: COLORS.BORDER_PURPLE }}>
          <div className="text-center mb-10">
            <h2 className="text-5xl md:text-6xl font-black mb-4"><span>Let's Build Something</span><br /><span className="bg-clip-text text-transparent" style={{ backgroundImage: COLORS.GRADIENT_PRIMARY }}>Amazing Together!</span></h2>
            <p className="text-xl" style={{ color: COLORS.TEXT_SECONDARY }}>Open to exciting opportunities in web & mobile development</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            {contactMethods.map((contact, i) => (
              <a
                key={i}
                href={contact.href || undefined}
                className="group backdrop-blur-xl rounded-2xl p-6 text-center border transition-all hover:scale-105 block"
                style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT, cursor: contact.href ? 'pointer' : 'default' }}
              >
                <div className="inline-flex p-4 rounded-xl mb-3" style={{ backgroundColor: `${contact.color}33` }}><div style={{ color: contact.color }}>{contact.icon}</div></div>
                <div className="text-sm mb-1" style={{ color: COLORS.TEXT_SECONDARY }}>{contact.label}</div>
                <div className="font-semibold text-sm break-words">{contact.value}</div>
              </a>
            ))}
          </div>
          <div className="flex justify-center space-x-4 mb-10">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="p-4 border rounded-xl transition-all hover:scale-110" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}><GithubIcon /></a>
            <a href="https://www.linkedin.com/in/charulatha-p-87258236a/" target="_blank" rel="noopener noreferrer" className="p-4 border rounded-xl transition-all hover:scale-110" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}><LinkedinIcon /></a>
            <a href="mailto:charulatha0229@gmail.com" className="p-4 border rounded-xl transition-all hover:scale-110" style={{ backgroundColor: COLORS.BG_HOVER, borderColor: COLORS.BORDER_DEFAULT }}><Mail /></a>
          </div>
          {/* <div className="flex justify-center">
            <button className="px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 flex items-center justify-center space-x-2" style={{ background: COLORS.GRADIENT_PRIMARY }}><span>Download Resume</span><Download size={20} /></button>
          </div> */}
          <div className="mt-8 pt-6 border-t text-center space-y-2" style={{ borderTopColor: COLORS.BORDER_DEFAULT }}>
            <p style={{ color: COLORS.TEXT_SECONDARY }}><span className="font-semibold" style={{ color: COLORS.PRIMARY }}>Current Salary:</span> ₹20,000 (In-hand)</p>
            <p style={{ color: COLORS.TEXT_SECONDARY }}><span className="font-semibold" style={{ color: COLORS.SECONDARY }}>Willing to Relocate:</span> Coimbatore, Chennai, Bangalore</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="relative py-10 px-6 border-t" style={{ borderTopColor: COLORS.BORDER_PURPLE }}>
    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className="flex flex-col items-center space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-xl" style={{ background: COLORS.GRADIENT_PRIMARY }}>C</div>
          <span className="text-xl font-bold">Charulatha</span>
        </div>
        <p style={{ color: COLORS.TEXT_SECONDARY }}>Full Stack Developer | Building Amazing Web & Mobile Applications</p>
        <p className="text-sm" style={{ color: COLORS.TEXT_MUTED }}>© 2025 Charulatha. Crafted with 💜 using React & Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen text-white" style={{ background: `linear-gradient(to bottom right, ${COLORS.BG_DARK}, ${COLORS.BG_PURPLE}, ${COLORS.BG_DARK})` }}>
      <div className="fixed inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20" style={{ backgroundColor: COLORS.PRIMARY }} />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse opacity-20" style={{ backgroundColor: COLORS.SECONDARY }} />
      </div>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <PhilosophySection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}