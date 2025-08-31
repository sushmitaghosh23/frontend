import { FileText, Sparkles, GraduationCap, Briefcase } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 shadow-sm sticky top-0 bg-white z-50">
        <h1 className="text-2xl font-bold text-blue-600">CareerAlign</h1>
        <nav className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-blue-600">Features</a>
          <a href="#workflow" className="hover:text-blue-600">How It Works</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Login
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          AI-Powered <span className="text-blue-600">Career Alignment</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Upload your resume, detect skill gaps, learn what matters, and land jobs aligned with your career goals.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700">
          Get Started
        </button>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white px-8">
        <h3 className="text-3xl font-bold text-center mb-12">Platform Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="shadow-md p-6 text-center rounded-xl bg-gray-50">
            <FileText className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Resume Analysis</h4>
            <p className="text-gray-600">AI scans your resume & gives personalized insights.</p>
          </div>

          <div className="shadow-md p-6 text-center rounded-xl bg-gray-50">
            <Sparkles className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Skill Gap Detection</h4>
            <p className="text-gray-600">Identify missing skills and bridge the gap effectively.</p>
          </div>

          <div className="shadow-md p-6 text-center rounded-xl bg-gray-50">
            <GraduationCap className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Learning Path</h4>
            <p className="text-gray-600">Get curated learning resources to boost your profile.</p>
          </div>

          <div className="shadow-md p-6 text-center rounded-xl bg-gray-50">
            <Briefcase className="w-12 h-12 mx-auto text-blue-600 mb-4" />
            <h4 className="font-semibold mb-2">Job Opportunities</h4>
            <p className="text-gray-600">Discover job listings that match your skills & goals.</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section id="workflow" className="py-20 bg-gray-50 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-12">
          <div className="text-center max-w-xs">
            <FileText className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <p>Upload Resume</p>
          </div>
          <div className="text-center max-w-xs">
            <Sparkles className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <p>AI Analysis</p>
          </div>
          <div className="text-center max-w-xs">
            <GraduationCap className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <p>Learning Path</p>
          </div>
          <div className="text-center max-w-xs">
            <Briefcase className="w-10 h-10 text-blue-600 mx-auto mb-2" />
            <p>Job Matches</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-8 bg-white text-center text-gray-600 border-t">
        <p>© {new Date().getFullYear()} CareerAlign. All rights reserved.</p>
      </footer>
    </div>
  );
}
