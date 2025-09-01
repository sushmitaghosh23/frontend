import { FileText, Sparkles, GraduationCap, Briefcase, Upload, Search, BookOpen, Target, CheckCircle, TrendingUp, User, Mail, Phone, ArrowRight, Star, Award, Zap, Heart, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function App() {
  const [demoStep, setDemoStep] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [scrollY, setScrollY] = useState(0);
  const [resumeText, setResumeText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [typingStep, setTypingStep] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const demoRef = useRef(null);

  // Smooth scroll tracking
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('[id]');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Demo animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setDemoStep(prev => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for resume builder
  useEffect(() => {
    const resumeContent = [
      "JANE DOE\n\nFRONTEND DEVELOPER\n\nSKILLS:\n• React.js • JavaScript • HTML5\n• CSS3 • TypeScript • Redux\n\nEXPERIENCE:\nSenior Developer at TechCorp (2020-Present)\n- Built responsive web applications\n- Led team of 5 developers\n\nEDUCATION:\nBS Computer Science, Stanford University",
      "JOHN SMITH\n\nFULL STACK ENGINEER\n\nSKILLS:\n• Node.js • Python • MongoDB\n• Express • React • AWS\n\nEXPERIENCE:\nSoftware Engineer at StartupCo (2019-2022)\n- Developed RESTful APIs\n- Implemented CI/CD pipelines\n\nEDUCATION:\nMS Software Engineering, MIT",
      "SARAH JOHNSON\n\nUX/UI DESIGNER\n\nSKILLS:\n• Figma • Adobe XD • Sketch\n• User Research • Wireframing\n• Prototyping • HTML/CSS\n\nEXPERIENCE:\nLead Designer at DesignStudio (2018-2021)\n- Created design systems\n- Conducted user testing\n\nEDUCATION:\nBFA Design, RISD"
    ];
    
    const currentResume = resumeContent[typingStep];
    
    if (typingIndex < currentResume.length) {
      const timer = setTimeout(() => {
        setResumeText(currentResume.substring(0, typingIndex + 1));
        setTypingIndex(typingIndex + 1);
      }, 30);
      return () => clearTimeout(timer);
    } else {
      // Move to next resume after a delay
      const timer = setTimeout(() => {
        setTypingIndex(0);
        setTypingStep((typingStep + 1) % resumeContent.length);
        setResumeText("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [typingIndex, typingStep]);

  // Feature carousel auto-rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-70 animate-pulse"
          style={{ 
            transform: `translate(${parallaxOffset * 0.1}px, ${parallaxOffset * 0.2}px)`,
            animation: 'float 8s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute top-2/3 left-1/3 w-80 h-80 bg-purple-500/30 rounded-full mix-blend-soft-light filter blur-3xl opacity-50"
          style={{ 
            transform: `translate(${-parallaxOffset * 0.15}px, ${-parallaxOffset * 0.1}px)`,
            animation: 'float 10s ease-in-out infinite 1s'
          }}
        />
        <div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-soft-light filter blur-3xl opacity-60"
          style={{ 
            transform: `translate(${parallaxOffset * 0.05}px, ${-parallaxOffset * 0.15}px)`,
            animation: 'float 12s ease-in-out infinite 2s'
          }}
        />
        
        {/* Animated grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        
        {/* Sparkles */}
        <div className="absolute top-1/4 right-1/4 animate-ping">
          <Sparkles className="w-5 h-5 text-yellow-300" />
        </div>
        <div className="absolute bottom-1/3 left-1/4 animate-ping delay-1000">
          <Sparkles className="w-4 h-4 text-blue-300" />
        </div>
        <div className="absolute top-2/3 right-1/3 animate-ping delay-2000">
          <Sparkles className="w-3 h-3 text-purple-300" />
        </div>
      </div>

      {/* Navbar */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-black/30 backdrop-blur-xl shadow-2xl border-b border-white/10' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"></div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent relative">
                CareerAlign
              </h1>
            </div>
          </div>
          <nav className="space-x-8 hidden md:flex">
            <a href="#features" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Features</a>
            <a href="#demo" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Demo</a>
            <a href="#workflow" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">How It Works</a>
            <a href="#contact" className="hover:text-blue-300 transition-all duration-300 hover:scale-105">Contact</a>
          </nav>
          <button className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-6 py-2 bg-black/70 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-center">
              <span className="text-blue-100 group-hover:text-white transition-colors duration-200">Login</span>
              <ArrowRight className="w-4 h-4 ml-2 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Intro Content */}
          <div 
            className="transform transition-all duration-1000 ease-out z-10"
            style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Zap className="w-5 h-5 text-yellow-400 mr-2 animate-pulse" />
              <span className="text-blue-300">AI-Powered Career Platform</span>
              <div className="ml-2 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Career Path
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 opacity-90">
              Discover your perfect career match, bridge skill gaps with AI-powered learning, and land your dream job.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <div className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg leading-none flex items-center">
                  <span className="text-white group-hover:text-gray-100 transition-colors duration-200">Get Started Free</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </button>
              
              <button className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative px-8 py-4 bg-black/70 ring-1 ring-white/10 rounded-lg leading-none flex items-center">
                  <span className="text-blue-100 group-hover:text-white transition-colors duration-200">Watch Demo</span>
                  <ChevronRight className="w-5 h-5 ml-2 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </button>
            </div>
            
            <div className="flex items-center mt-10 space-x-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-slate-900 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                ))}
              </div>
              <div className="text-gray-300">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-2" />
                  <span>4.9/5 from 2k+ users</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Resume Builder with Typewriter Effect */}
          <div className="relative">
            <div className="bg-black/20 backdrop-blur-2xl rounded-3xl shadow-2xl p-6 border border-white/10 transform hover:scale-[1.02] transition-transform duration-500 relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-75 blur"></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm font-medium text-white">ATS Resume Builder</span>
                  </div>
                  <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                </div>
                
                <div className="bg-slate-900/60 p-5 rounded-xl h-96 overflow-hidden font-mono border border-white/5">
                  <div className="text-xs md:text-sm whitespace-pre-line leading-relaxed text-gray-200">
                    {resumeText}
                    <span className="inline-block w-2 h-4 bg-blue-500 ml-1 animate-pulse"></span>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-400">Building ATS-friendly resume...</span>
                  <div className="flex space-x-1">
                    <span className="text-xs text-gray-400">AI Powered</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 animate-float">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <FileText className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 animate-float delay-2000">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '98%', label: 'Success Rate' },
              { value: '50k+', label: 'Users Helped' },
              { value: '2.5x', label: 'Faster Hiring' },
              { value: '4.9/5', label: 'User Rating' }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.features ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-blue-300">Why Choose CareerAlign</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">Powerful Features</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Everything you need to transform your career journey with AI-powered precision</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: FileText, title: "Resume Analysis", description: "AI scans your resume & gives personalized insights.", color: "blue" },
              { icon: Sparkles, title: "Skill Gap Detection", description: "Identify missing skills and bridge the gap effectively.", color: "purple" },
              { icon: GraduationCap, title: "Learning Path", description: "Get curated learning resources to boost your profile.", color: "green" },
              { icon: Briefcase, title: "Job Opportunities", description: "Discover job listings that match your skills & goals.", color: "pink" }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`group p-8 text-center rounded-3xl bg-black/20 backdrop-blur-md border border-white/10 hover:border-${feature.color}-500/30 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden ${
                  activeFeature === index ? `ring-2 ring-${feature.color}-500/50` : ''
                }`}
                onMouseEnter={() => setActiveFeature(index)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className={`relative z-10 w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-${feature.color}-500 to-${feature.color}-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-${feature.color}-500/20 group-hover:scale-110 transition-all duration-300`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-3 relative z-10">{feature.title}</h4>
                <p className="text-gray-400 relative z-10">{feature.description}</p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="text-sm text-blue-400 flex items-center justify-center mx-auto">
                    Learn more <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="py-20 px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.demo ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Zap className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-blue-300">Interactive Demo</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">See CareerAlign in Action</h3>
            <p className="text-xl text-gray-300">Watch how AI transforms your career journey in real-time</p>
          </div>

          {/* Demo Container */}
          <div 
            ref={demoRef}
            className="bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 relative overflow-hidden border border-white/10"
          >
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-75 blur"></div>
            
            <div className="relative z-10">
              {/* Demo Steps Indicator */}
              <div className="flex justify-center mb-8">
                <div className="flex space-x-4 bg-black/30 rounded-full p-2 backdrop-blur-md">
                  {[0, 1, 2, 3, 4].map((step) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        demoStep === step ? 'bg-blue-400 scale-125' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Demo Content */}
              <div className="min-h-96 flex items-center justify-center">
                {/* Step 0: Upload Resume */}
                {demoStep === 0 && (
                  <div className="text-center animate-fadeIn">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 border-2 border-dashed border-blue-400/50 rounded-2xl mx-auto flex items-center justify-center bg-blue-500/10 hover:bg-blue-500/20 transition-all duration-300 cursor-pointer backdrop-blur-sm">
                        <Upload className="w-12 h-12 text-blue-400 animate-bounce" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Upload Your Resume</h4>
                    <p className="text-gray-400">Drop your resume or select from files</p>
                  </div>
                )}

                {/* Step 1: AI Scanning */}
                {demoStep === 1 && (
                  <div className="text-center animate-fadeIn">
                    <div className="relative mb-6">
                      <div className="w-32 h-32 border-2 border-purple-400/50 rounded-2xl mx-auto flex items-center justify-center bg-purple-500/10 backdrop-blur-sm">
                        <div className="relative">
                          <FileText className="w-16 h-16 text-purple-400" />
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-scan"></div>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-center">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-100"></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce delay-200"></div>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">AI Analysis in Progress</h4>
                    <p className="text-gray-400">Scanning skills, experience, and qualifications</p>
                  </div>
                )}

                {/* Step 2: Skill Gap Detection */}
                {demoStep === 2 && (
                  <div className="text-center animate-fadeIn">
                    <div className="mb-6">
                      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                          <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">JavaScript</p>
                        </div>
                        <div className="bg-green-500/10 p-4 rounded-xl border border-green-500/20 backdrop-blur-sm">
                          <CheckCircle className="w-6 h-6 text-green-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">React</p>
                        </div>
                        <div className="bg-red-500/10 p-4 rounded-xl border-2 border-red-500/30 backdrop-blur-sm animate-pulse">
                          <Target className="w-6 h-6 text-red-400 mx-auto mb-2" />
                          <p className="text-sm font-medium text-white">Node.js</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Skill Gaps Detected</h4>
                    <p className="text-gray-400">Found 3 missing skills for your target role</p>
                  </div>
                )}

                {/* Step 3: Learning Path */}
                {demoStep === 3 && (
                  <div className="text-center animate-fadeIn">
                    <div className="mb-6">
                      <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-32 h-32 rounded-2xl mx-auto flex items-center justify-center shadow-lg">
                        <BookOpen className="w-16 h-16 text-white animate-pulse" />
                      </div>
                      <div className="mt-4 max-w-sm mx-auto">
                        <div className="bg-blue-500/10 p-3 rounded-lg mb-2 flex items-center backdrop-blur-sm border border-blue-500/20">
                          <div className="w-8 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
                          <span className="text-sm text-white">Node.js Fundamentals</span>
                        </div>
                        <div className="bg-blue-500/10 p-3 rounded-lg mb-2 flex items-center backdrop-blur-sm border border-blue-500/20">
                          <div className="w-6 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-sm text-white">Express.js Tutorial</span>
                        </div>
                        <div className="bg-blue-500/10 p-3 rounded-lg flex items-center backdrop-blur-sm border border-blue-500/20">
                          <div className="w-4 h-2 bg-blue-300 rounded-full mr-3"></div>
                          <span className="text-sm text-white">MongoDB Basics</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Personalized Learning Path</h4>
                    <p className="text-gray-400">Custom curriculum designed for your goals</p>
                  </div>
                )}

                {/* Step 4: Job Matches */}
                {demoStep === 4 && (
                  <div className="text-center animate-fadeIn">
                    <div className="mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
                        <div className="bg-gradient-to-r from-green-500/40 to-blue-600/40 p-4 rounded-xl text-white transform hover:scale-105 transition-transform backdrop-blur-sm border border-green-500/20">
                          <Briefcase className="w-8 h-8 mx-auto mb-2" />
                          <p className="font-semibold">Frontend Developer</p>
                          <p className="text-sm opacity-90">95% Match</p>
                        </div>
                        <div className="bg-gradient-to-r from-purple-500/40 to-pink-600/40 p-4 rounded-xl text-white transform hover:scale-105 transition-transform backdrop-blur-sm border border-purple-500/20">
                          <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                          <p className="font-semibold">Full Stack Engineer</p>
                          <p className="text-sm opacity-90">87% Match</p>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-2xl font-semibold mb-2">Perfect Job Matches</h4>
                    <p className="text-gray-400">Found 12 opportunities aligned with your profile</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div 
            className={`text-center mb-16 transition-all duration-1000 transform ${
              isVisible.workflow ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Target className="w-5 h-5 text-yellow-400 mr-2" />
              <span className="text-blue-300">Simple Process</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">How It Works</h3>
            <p className="text-xl text-gray-300">Simple steps to career success</p>
          </div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {[
              { icon: Upload, title: "Upload Resume", description: "Share your current resume securely" },
              { icon: Search, title: "AI Analysis", description: "Advanced algorithms analyze your profile" },
              { icon: Target, title: "Gap Detection", description: "Identify skills needed for your goals" },
              { icon: BookOpen, title: "Learning Path", description: "Get personalized course recommendations" },
              { icon: Briefcase, title: "Job Matches", description: "Find opportunities that fit perfectly" }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center max-w-xs group">
                <div className="relative mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/20 transform group-hover:scale-110 transition-all duration-300">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-md text-sm font-bold text-blue-400 border border-blue-500/30">
                    {index + 1}
                  </div>
                  {index < 4 && (
                    <div className="hidden lg:block absolute top-10 left-20 w-32 h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">{step.title}</h4>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
              <Heart className="w-5 h-5 text-pink-400 mr-2" />
              <span className="text-blue-300">Success Stories</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">What Our Users Say</h3>
            <p className="text-xl text-gray-300">Join thousands of professionals who transformed their careers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Software Engineer", text: "CareerAlign helped me identify the exact skills I was missing and provided a clear path to learn them. Landed my dream job in 3 months!", avatar: "/avatar1.jpg" },
              { name: "Michael Chen", role: "Product Manager", text: "The resume analysis was incredibly accurate. I went from getting no callbacks to multiple interviews per week after implementing the suggestions.", avatar: "/avatar2.jpg" },
              { name: "Jessica Williams", role: "UX Designer", text: "The personalized learning recommendations saved me countless hours. I was able to focus on exactly what mattered for my career goals.", avatar: "/avatar3.jpg" }
            ].map((testimonial, index) => (
              <div 
                key={index}
                className="bg-black/20 backdrop-blur-md rounded-3xl p-6 border border-white/10 hover:border-blue-500/30 transition-all duration-500 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mr-4"></div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-3xl p-12 border border-white/10 backdrop-blur-md relative overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-75 blur"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h3>
              <p className="text-xl mb-8 text-gray-300">Join thousands of professionals who found their perfect career path</p>
              <div className="flex gap-4 justify-center flex-wrap">
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-8 py-4 bg-white text-slate-900 rounded-lg leading-none flex items-center font-semibold">
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
                <button className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative px-8 py-4 bg-black/70 ring-1 ring-white/10 rounded-lg leading-none flex items-center">
                    <span className="text-blue-100 group-hover:text-white transition-colors duration-200">Schedule Demo</span>
                    <ChevronRight className="w-5 h-5 ml-2 text-blue-300 group-hover:translate-x-1 transition-transform duration-200" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-16 bg-black/40 backdrop-blur-xl border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                CareerAlign
              </h4>
              <p className="text-gray-400">AI-powered career alignment for the modern professional.</p>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-300 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-blue-300 transition-colors">About</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white mb-4">Contact</h5>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>hello@careeralign.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CareerAlign. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-2000 { animation-delay: 2s; }
      `}</style>
    </div>
  );
}