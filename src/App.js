import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Code, Shield, Users, Globe, Mail, ExternalLink, Linkedin, Twitter, Languages, Sparkles, Trophy, UserPlus, MessageSquare, Award } from 'lucide-react';

const translations = {
    fr: {
        nav: { home: "Accueil", members: "Membres", ctf: "CTF", joinUs: "Nous Rejoindre", contact: "Contact" },
        hero: { title1: "Association pour la Promotion du", title2: "Libre et de l'Open Source", subtitle: "Pour une Souveraineté Numérique en France", cta1: "Découvrir notre mission", cta2: "Nous rejoindre" },
        mission: {
            title: "Notre Mission",
            subtitle: "L'APLOSN œuvre pour la promotion du logiciel libre, de l'open source et de la souveraineté numérique en France",
            features: [
                { title: "Open Source", description: "Promouvoir les logiciels libres et open source comme piliers d'une technologie accessible et transparente." },
                { title: "Souveraineté Numérique", description: "Défendre l'autonomie et le contrôle des données pour les citoyens et les organisations françaises." },
                { title: "Communauté", description: "Créer un réseau d'acteurs engagés pour l'indépendance technologique et le partage des connaissances." },
                { title: "Innovation Libre", description: "Encourager l'innovation collaborative et le développement de solutions numériques éthiques." }
            ]
        },
        values: {
            title: "Nos Valeurs",
            items: [
                { title: "Transparence", description: "Favoriser l'accès au code source et la compréhension des technologies que nous utilisons." },
                { title: "Liberté", description: "Garantir la liberté d'utiliser, d'étudier, de modifier et de partager les logiciels." },
                { title: "Autonomie", description: "Promouvoir l'indépendance technologique et la maîtrise de nos infrastructures numériques." },
                { title: "Collaboration", description: "Encourager le partage des connaissances et la coopération au sein de la communauté." }
            ],
            card: { title: "Engagement pour un numérique éthique", description: "Nous défendons un écosystème numérique respectueux de la vie privée, accessible à tous et contrôlé par ses utilisateurs." }
        },
        contactPage: {
            title: "Contactez-nous",
            subtitle: "Nous sommes là pour répondre à vos questions",
            form: { name: "Nom", email: "Email", subject: "Sujet", message: "Message", send: "Envoyer", namePlaceholder: "Votre nom", emailPlaceholder: "votre@email.com", subjectPlaceholder: "Objet de votre message", messagePlaceholder: "Votre message...", success: "Message envoyé avec succès !", or: "Ou contactez-nous directement" }
        },
        sponsors: {
            title: "Nos Sponsors",
            subtitle: "Ils soutiennent notre mission pour un numérique libre",
            companies: [
                { name: "OffSec", description: "Cybersecurity Training & Certification" },
                { name: "DC2SCALE", description: "Digital Infrastructure Solutions" },
                { name: "Hackuten", description: "Cybersecurity & Innovation" }
            ]
        },
        members: { title: "Nos Membres", subtitle: "L'équipe qui fait vivre l'APLOSN", roles: { president: "Président", secretary: "Secrétaire", treasurer: "Trésorier" } },
        ctf: {
            title: "Capture The Flag",
            subtitle: "Participez à nos compétitions de cybersécurité",
            description: "L'APLOSN organise régulièrement des CTF pour promouvoir l'apprentissage de la cybersécurité et le développement des compétences techniques.",
            upcoming: "Prochains événements",
            features: [
                { title: "Challenges variés", desc: "Web, Crypto, Reverse, Pwn, Forensics" },
                { title: "Tous niveaux", desc: "Du débutant à l'expert" },
                { title: "Communauté", desc: "Apprenez et partagez" },
                { title: "Récompenses", desc: "Prix pour les gagnants" }
            ],
            dinoCtf: { name: "Dino CTF", date: "Février 2025", type: "En ligne", register: "S'inscrire" }
        },
        joinUs: {
            title: "Rejoignez l'APLOSN",
            subtitle: "Devenez membre et contribuez à la souveraineté numérique",
            why: "Pourquoi nous rejoindre ?",
            benefits: [
                { title: "Réseau", desc: "Accédez à un réseau de professionnels et passionnés" },
                { title: "Événements", desc: "Participez à nos CTF, conférences et ateliers" },
                { title: "Projets", desc: "Contribuez à des projets open source impactants" },
                { title: "Formation", desc: "Développez vos compétences techniques" }
            ],
            how: "Comment adhérer ?",
            steps: [ "Rejoignez notre serveur Discord", "Remplissez le formulaire d'adhésion", "Participez à nos événements et projets" ],
            cta: "Rejoindre maintenant"
        },
        footer: { copyright: "Association pour la Promotion du Libre, de l'Open Source et de la Souveraineté Numérique" }
    },
    en: {
        nav: { home: "Home", members: "Members", ctf: "CTF", joinUs: "Join Us", contact: "Contact" },
        hero: { title1: "Association for the Promotion of", title2: "Free and Open Source Software", subtitle: "For Digital Sovereignty in France", cta1: "Discover our mission", cta2: "Join us" },
        mission: {
            title: "Our Mission",
            subtitle: "APLOSN works to promote free software, open source and digital sovereignty in France",
            features: [
                { title: "Open Source", description: "Promote free and open source software as pillars of accessible and transparent technology." },
                { title: "Digital Sovereignty", description: "Defend autonomy and data control for French citizens and organizations." },
                { title: "Community", description: "Create a network of committed actors for technological independence and knowledge sharing." },
                { title: "Free Innovation", description: "Encourage collaborative innovation and the development of ethical digital solutions." }
            ]
        },
        values: {
            title: "Our Values",
            items: [
                { title: "Transparency", description: "Promote access to source code and understanding of the technologies we use." },
                { title: "Freedom", description: "Guarantee the freedom to use, study, modify and share software." },
                { title: "Autonomy", description: "Promote technological independence and control of our digital infrastructures." },
                { title: "Collaboration", description: "Encourage knowledge sharing and cooperation within the community." }
            ],
            card: { title: "Commitment to ethical digital technology", description: "We defend a digital ecosystem that respects privacy, is accessible to all and controlled by its users." }
        },
        contactPage: {
            title: "Contact Us",
            subtitle: "We're here to answer your questions",
            form: { name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send", namePlaceholder: "Your name", emailPlaceholder: "your@email.com", subjectPlaceholder: "Subject of your message", messagePlaceholder: "Your message...", success: "Message sent successfully!", or: "Or contact us directly" }
        },
        sponsors: {
            title: "Our Sponsors",
            subtitle: "They support our mission for free digital technology",
            companies: [
                { name: "OffSec", description: "Cybersecurity Training & Certification" },
                { name: "DC2SCALE", description: "Digital Infrastructure Solutions" },
                { name: "Hackuten", description: "Cybersecurity & Innovation" }
            ]
        },
        members: { title: "Our Members", subtitle: "The team behind APLOSN", roles: { president: "President", secretary: "Secretary", treasurer: "Treasurer"} },
        ctf: {
            title: "Capture The Flag",
            subtitle: "Join our cybersecurity competitions",
            description: "APLOSN regularly organizes CTF competitions to promote cybersecurity learning and technical skills development.",
            upcoming: "Upcoming events",
            features: [
                { title: "Various challenges", desc: "Web, Crypto, Reverse, Pwn, Forensics" },
                { title: "All levels", desc: "From beginner to expert" },
                { title: "Community", desc: "Learn and share" },
                { title: "Rewards", desc: "Prizes for winners" }
            ],
            dinoCtf: { name: "Dino CTF", date: "February 2025", type: "Online", register: "Register" }
        },
        joinUs: {
            title: "Join APLOSN",
            subtitle: "Become a member and contribute to digital sovereignty",
            why: "Why join us?",
            benefits: [
                { title: "Network", desc: "Access a network of professionals and enthusiasts" },
                { title: "Events", desc: "Participate in our CTF, conferences and workshops" },
                { title: "Projects", desc: "Contribute to impactful open source projects" },
                { title: "Training", desc: "Develop your technical skills" }
            ],
            how: "How to join?",
            steps: [ "Join our Discord server", "Fill out the membership form", "Participate in our events and projects" ],
            cta: "Join now"
        },
        footer: { copyright: "Association for the Promotion of Free, Open Source and Digital Sovereignty" }
    }
};

const members = [
    { name: "Lux_", role: "president", avatar: "https://cdn.discordapp.com/avatars/786144801456259092/a_ae7b71bb9b330e81be977120b4986f81.gif?size=512" },
    { name: "Arrkyo", role: "treasurer", avatar: "https://cdn.discordapp.com/avatars/374223856254189600/5945c592e52a7d0226ce047ed874901d.webp?size=100" },
    { name: "Asuna Cracotte™", role: "secretary", avatar: "https://cdn.discordapp.com/avatars/1072121997942861824/50393dda6612c4ac4efb257193bf53f9.webp?size=160" }
];

export default function APLOSNWebsite() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [language, setLanguage] = useState('fr');
    const [currentPage, setCurrentPage] = useState('home');
    const [scrollY, setScrollY] = useState(0);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const t = translations[language];

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScrolled(window.scrollY > 50);
        };
        const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    useEffect(() => { window.scrollTo(0, 0); }, [currentPage]);

    const navigateTo = (page) => { setCurrentPage(page); setIsMenuOpen(false); };
    const features = [ { icon: <Code className="w-8 h-8" /> }, { icon: <Shield className="w-8 h-8" /> }, { icon: <Users className="w-8 h-8" /> }, { icon: <Globe className="w-8 h-8" /> } ];
    const parallaxOffset = scrollY * 0.5;
    const heroOpacity = Math.max(0, 1 - scrollY / 500);
    const heroScale = Math.max(0.95, 1 - scrollY / 2000);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(true);
        setTimeout(() => {
            setFormSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
            {/* Animated background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ top: '10%', left: '10%', transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
                <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ bottom: '10%', right: '10%', animationDelay: '1s', transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }} />
                <div className="absolute w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ top: '50%', left: '50%', animationDelay: '2s', transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)` }} />
            </div>

            {/* Navigation */}
            <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl shadow-cyan-500/10' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <button onClick={() => navigateTo('home')} className="flex items-center space-x-3 group">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">APLOSN</span>
                        </button>

                        <div className="hidden md:flex items-center space-x-8">
                            {['home', 'members', 'ctf', 'joinUs', 'contact'].map(page => (
                                <button key={page} onClick={() => navigateTo(page)} className={`hover:text-cyan-300 transition-colors duration-300 font-medium relative group ${currentPage === page ? 'text-cyan-400' : ''}`}>
                                    {t.nav[page]}
                                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all duration-300 ${currentPage === page ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                                </button>
                            ))}
                            <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 border border-white/20 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/20">
                                <Languages className="w-4 h-4" />
                                <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
                            </button>
                        </div>

                        <div className="md:hidden flex items-center gap-3">
                            <button onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')} className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-200 border border-white/20">
                                <Languages className="w-4 h-4" />
                                <span className="text-sm font-medium">{language === 'fr' ? 'EN' : 'FR'}</span>
                            </button>
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <X /> : <Menu />}</button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white/10 backdrop-blur-2xl border-t border-white/20">
                        <div className="px-4 pt-2 pb-4 space-y-2">
                            {['home', 'members', 'ctf', 'joinUs', 'contact'].map(page => (
                                <button key={page} onClick={() => navigateTo(page)} className="block w-full text-left py-2 hover:text-cyan-400 transition-colors">{t.nav[page]}</button>
                            ))}
                        </div>
                    </div>
                )}
            </nav>

            {/* HOME PAGE */}
            {currentPage === 'home' && (
                <>
                    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset}px)`, opacity: heroOpacity }}>
                            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
                        </div>
                        <div className="max-w-7xl mx-auto relative z-10 text-center" style={{ transform: `scale(${heroScale})`, opacity: heroOpacity }}>
                            <div className="mb-6 inline-block">
                                <div className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-cyan-400/30 rounded-full">
                                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                                    <span className="text-sm text-cyan-400 font-medium">Open Source & Digital Sovereignty</span>
                                </div>
                            </div>
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                {t.hero.title1}
                                <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">{t.hero.title2}</span>
                            </h1>
                            <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">{t.hero.subtitle}</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button onClick={() => navigateTo('joinUs')} className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                                    {t.hero.cta1}
                                    <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </button>
                                <button onClick={() => navigateTo('joinUs')} className="inline-flex items-center justify-center px-8 py-4 bg-white/5 backdrop-blur-sm border-2 border-slate-700 rounded-full font-semibold hover:border-cyan-500 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">{t.hero.cta2}</button>
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center p-2">
                                <div className="w-1 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                            </div>
                        </div>
                    </section>

                    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" style={{ marginTop: '-100px', paddingTop: '120px' }}>
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.mission.title}</h2>
                                <p className="text-xl text-slate-300 max-w-3xl mx-auto">{t.mission.subtitle}</p>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {t.mission.features.map((feature, index) => (
                                    <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30">{features[index].icon}</div>
                                        <h3 className="text-2xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                                        <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-950">
                        <div className="max-w-7xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.values.title}</h2>
                                    <div className="space-y-6">
                                        {t.values.items.map((item, index) => (
                                            <div key={index} className="flex items-start space-x-4 group">
                                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-cyan-400 transition-all duration-300"></div>
                                                <div>
                                                    <h3 className="text-xl font-semibold mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                                                    <p className="text-slate-300">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
                                    <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105">
                                        <div className="text-center">
                                            <Shield className="w-24 h-24 mx-auto mb-6 text-cyan-400 animate-pulse" />
                                            <h3 className="text-2xl font-bold mb-4">{t.values.card.title}</h3>
                                            <p className="text-slate-300">{t.values.card.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12">
                                <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.sponsors.title}</h2>
                                <p className="text-xl text-slate-300">{t.sponsors.subtitle}</p>
                            </div>
                            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                                {[
                                    { url: "https://www.offsec.com", logo: "https://avatars.githubusercontent.com/u/2352090?v=4", alt: "OffSec", bgClass: "bg-white/10" },
                                    { url: "https://dc2scale.com", logo: "https://cdn.asp.events/CLIENT_CloserSt_D86EA381_5056_B739_5482D50A1A831DDD/sites/CEEP-2023/media/libraries/exhibitors/589ef495-800f-11ef-b52-06bd0f937899-logo.png", alt: "DC2SCALE", bgClass: "bg-white" },
                                    { url: "https://hackuten.com", logo: "https://media.licdn.com/dms/image/v2/D4E0BAQG8BNHpdktuBw/company-logo_200_200/B4EZbzvt6GHAAM-/0/1747846096124?e=2147483647&v=beta&t=ZQv91PgDxs3GXtslyx009aDi7GLGn-M9HUfa9XItKuE", alt: "Hackuten", bgClass: "bg-white/10" }
                                ].map((sponsor, index) => (
                                    <a key={index} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20">
                                        <div className="flex flex-col items-center justify-center h-full gap-6">
                                            <div className={`w-32 h-32 rounded-2xl overflow-hidden ${sponsor.bgClass} flex items-center justify-center p-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                <img src={sponsor.logo} alt={sponsor.alt} className="w-full h-full object-contain" />
                                            </div>
                                            <div className="text-center">
                                                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">{t.sponsors.companies[index].name}</h3>
                                                <p className="text-slate-400 text-sm">{t.sponsors.companies[index].description}</p>
                                            </div>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* MEMBERS PAGE */}
            {currentPage === 'members' && (
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.members.title}</h1>
                            <p className="text-xl text-slate-300">{t.members.subtitle}</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {members.map((member, index) => (
                                <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20">
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-32 h-32 rounded-full overflow-hidden mb-6 ring-4 ring-cyan-500/30 group-hover:ring-cyan-400 transition-all duration-300 group-hover:scale-110">
                                            <img src={member.avatar} alt={member.name} className="w-full h-full object-cover" />
                                        </div>
                                        <h3 className="text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{member.name}</h3>
                                        <span className="px-4 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-semibold">{t.members.roles[member.role]}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTF PAGE */}
            {currentPage === 'ctf' && (
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-6">
                                <Trophy className="w-20 h-20 text-cyan-400 mx-auto animate-pulse" />
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.ctf.title}</h1>
                            <p className="text-xl text-slate-300 mb-6">{t.ctf.subtitle}</p>
                            <p className="text-lg text-slate-400 max-w-3xl mx-auto">{t.ctf.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                            {t.ctf.features.map((feature, index) => (
                                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 text-center">
                                    <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold mb-2 text-cyan-400">{feature.title}</h3>
                                    <p className="text-slate-300">{feature.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50">
                            <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.ctf.upcoming}</h2>
                            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 p-8 rounded-2xl border border-cyan-500/30 mb-6">
                                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="text-center md:text-left">
                                        <h3 className="text-3xl font-bold text-cyan-400 mb-2">🦖 {t.ctf.dinoCtf.name}</h3>
                                        <div className="flex flex-col md:flex-row gap-4 text-slate-300">
                      <span className="flex items-center gap-2 justify-center md:justify-start">
                        <Trophy className="w-5 h-5 text-cyan-400" />
                          {t.ctf.dinoCtf.date}
                      </span>
                                            <span className="flex items-center gap-2 justify-center md:justify-start">
                        <Globe className="w-5 h-5 text-cyan-400" />
                                                {t.ctf.dinoCtf.type}
                      </span>
                                        </div>
                                    </div>
                                    <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50">
                                        {t.ctf.dinoCtf.register}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* JOIN US PAGE */}
            {currentPage === 'joinUs' && (
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
                    <div className="max-w-7xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-6">
                                <UserPlus className="w-20 h-20 text-cyan-400 mx-auto animate-pulse" />
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.joinUs.title}</h1>
                            <p className="text-xl text-slate-300">{t.joinUs.subtitle}</p>
                        </div>

                        <div className="mb-16">
                            <h2 className="text-3xl font-bold mb-8 text-center">{t.joinUs.why}</h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {t.joinUs.benefits.map((benefit, index) => (
                                    <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-3 hover:shadow-2xl hover:shadow-cyan-500/20 text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-cyan-500/30">
                                            {index === 0 && <Users className="w-8 h-8" />}
                                            {index === 1 && <Trophy className="w-8 h-8" />}
                                            {index === 2 && <Code className="w-8 h-8" />}
                                            {index === 3 && <Shield className="w-8 h-8" />}
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 text-cyan-400">{benefit.title}</h3>
                                        <p className="text-slate-300">{benefit.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-12 rounded-3xl border border-slate-700/50 mb-12">
                            <h2 className="text-3xl font-bold mb-8 text-center">{t.joinUs.how}</h2>
                            <div className="space-y-6 max-w-2xl mx-auto">
                                {t.joinUs.steps.map((step, index) => (
                                    <div key={index} className="flex items-start space-x-4 group">
                                        <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform">
                                            <span className="text-white font-bold">{index + 1}</span>
                                        </div>
                                        <p className="text-lg text-slate-300 mt-2">{step}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="text-center">
                            <a
                                href="https://discord.gg/qWwBkNbJKK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/50"
                            >
                                <UserPlus className="mr-2 w-5 h-5" />
                                {t.joinUs.cta}
                            </a>
                        </div>
                    </div>
                </section>
            )}

            {/* CONTACT PAGE */}
            {currentPage === 'contact' && (
                <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <div className="inline-block mb-6">
                                <MessageSquare className="w-20 h-20 text-cyan-400 mx-auto animate-pulse" />
                            </div>
                            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{t.contactPage.title}</h1>
                            <p className="text-xl text-slate-300">{t.contactPage.subtitle}</p>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-8 mb-12">
                            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
                                <h2 className="text-2xl font-bold mb-6 text-cyan-400">Formulaire de contact</h2>
                                {formSubmitted ? (
                                    <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6 text-center">
                                        <div className="text-green-400 text-lg font-semibold mb-2">✓ {t.contactPage.form.success}</div>
                                        <p className="text-slate-300 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">{t.contactPage.form.name}</label>
                                            <input type="text" name="name" value={formData.name} onChange={handleInputChange} required placeholder={t.contactPage.form.namePlaceholder} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">{t.contactPage.form.email}</label>
                                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} required placeholder={t.contactPage.form.emailPlaceholder} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">{t.contactPage.form.subject}</label>
                                            <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required placeholder={t.contactPage.form.subjectPlaceholder} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500" />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium mb-2 text-slate-300">{t.contactPage.form.message}</label>
                                            <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="5" placeholder={t.contactPage.form.messagePlaceholder} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all text-white placeholder-slate-500 resize-none"></textarea>
                                        </div>
                                        <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30">
                                            {t.contactPage.form.send}
                                        </button>
                                    </form>
                                )}
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold mb-6 text-cyan-400">{t.contactPage.form.or}</h2>

                                <a href="mailto:contact@aplosn.fr" className="group block bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                                            <Mail className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">Email</h3>
                                            <p className="text-slate-300">contact@aplosn.fr</p>
                                        </div>
                                    </div>
                                </a>

                                <a href="https://discord.gg/qWwBkNbJKK" target="_blank" rel="noopener noreferrer" className="group block bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30">
                                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold mb-1 group-hover:text-cyan-400 transition-colors">Discord</h3>
                                            <p className="text-slate-300">discord.gg/qWwBkNbJKK</p>
                                        </div>
                                    </div>
                                </a>

                                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50">
                                    <h3 className="text-lg font-bold mb-4">Réseaux Sociaux</h3>
                                    <div className="flex gap-4">
                                        <a href="https://linkedin.com/company/aplosn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                        <a href="https://twitter.com/aplosn" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Footer */}
            <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800 bg-slate-950">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/50">
                                <Code className="w-6 h-6 text-white" />
                            </div>
                            <span className="text-xl font-bold">APLOSN</span>
                        </div>

                        <div className="flex items-center gap-6">
                            <a href="https://discord.gg/qWwBkNbJKK" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20" aria-label="Discord">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                                </svg>
                            </a>
                            <a href="https://linkedin.com/company/aplosn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20" aria-label="LinkedIn">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="https://twitter.com/aplosn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20" aria-label="Twitter">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </div>

                        <p className="text-slate-400 text-center md:text-right text-sm">
                            © 2025 APLOSN - {t.footer.copyright}
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}