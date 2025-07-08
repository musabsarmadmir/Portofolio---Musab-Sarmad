"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Download, Moon, Sun, Volume2, VolumeX } from "lucide-react"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true)
  const [soundEnabled, setSoundEnabled] = useState(false)
  const [terminalOpen, setTerminalOpen] = useState(false)

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "~") {
        setTerminalOpen(!terminalOpen)
      }
      if (e.key === "Escape") {
        setTerminalOpen(false)
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [terminalOpen])

  const playSound = () => {
    if (soundEnabled) {
      // Simulate retro sound effect
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
      const oscillator = audioContext.createOscillator()
      const gainNode = audioContext.createGain()

      oscillator.connect(gainNode)
      gainNode.connect(audioContext.destination)

      oscillator.frequency.setValueAtTime(800, audioContext.currentTime)
      oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1)

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime)
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1)

      oscillator.start(audioContext.currentTime)
      oscillator.stop(audioContext.currentTime + 0.1)
    }
  }

  const projects = [
    {
      name: "QuantFlow",
      description: "Algorithmic trading platform with statistical arbitrage strategies",
      tech: ["Python", "FastAPI", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
    {
      name: "Suno",
      description: "Voice-based therapy companion for Urdu speakers using AI",
      tech: ["React", "Node.js", "OpenAI"],
      github: "#",
      demo: "#",
    },
    {
      name: "RAGRAIFY",
      description: "RAG-based study assistant SaaS for enhanced learning",
      tech: ["Next.js", "LangChain", "Pinecone"],
      github: "#",
      demo: "#",
    },
    {
      name: "Resume Analyzer",
      description: "NLP-powered resume scoring application built with PyQt",
      tech: ["Python", "PyQt", "spaCy"],
      github: "#",
      demo: "#",
    },
    {
      name: "Quote Generator",
      description: "Modern quote generator built with Next.js and ShadCN",
      tech: ["Next.js", "ShadCN", "TailwindCSS"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark" : ""}`}>
      <div className="bg-background text-foreground font-mono">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-green-500/30">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="text-green-400 font-bold text-xl pixel-text">{"<MS />"}</div>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSoundEnabled(!soundEnabled)}
                className="pixel-button"
              >
                {soundEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="pixel-button">
                {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 pt-20">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-8 relative">
                <img
                  src="/images/profile.jpeg"
                  alt="Musab Sarmad"
                  className="w-full h-full object-cover rounded-full border-4 border-green-500 shadow-lg"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 pixel-text glitch-text">Musab Sarmad</h1>
            <h2 className="text-xl md:text-2xl text-green-400 mb-6 pixel-text">Developer & Builder</h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              "Engineering systems that think, scale, and adapt."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                className="pixel-button bg-green-500 hover:bg-green-600"
                onClick={() => {
                  playSound()
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                View Projects
              </Button>
              <Button
                variant="outline"
                className="pixel-button border-green-500 text-green-400 hover:bg-green-500/10 bg-transparent"
                onClick={() => {
                  playSound()
                  document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Download Resume
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-8 text-center pixel-text text-green-400">{"> About"}</h2>
            <Card className="pixel-card bg-card/50 border-green-500/30">
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-4">
                  I'm a developer passionate about building intelligent systems that solve real-world problems. My
                  expertise spans AI/ML, algorithmic trading, and full-stack development.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  Currently focused on creating scalable products that leverage cutting-edge technology to deliver
                  meaningful user experiences and business value.
                </p>
                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open source, or
                  working on the next big idea that could change how we interact with technology.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 bg-muted/20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center pixel-text text-green-400">{"> Featured Projects"}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  className="pixel-card bg-card/50 border-green-500/30 hover:border-green-400 transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <div className="w-full h-32 bg-gradient-to-br from-green-400/20 to-blue-500/20 pixel-thumbnail mb-4 flex items-center justify-center">
                        <div className="text-green-400 text-2xl font-bold pixel-text">
                          {project.name.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2 pixel-text text-green-400">{project.name}</h3>
                    <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="pixel-badge text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="pixel-button-sm border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                        onClick={playSound}
                      >
                        <Github className="h-3 w-3 mr-1" />
                        Code
                      </Button>
                      <Button size="sm" className="pixel-button-sm bg-green-500 hover:bg-green-600" onClick={playSound}>
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resume Section */}
        <section id="resume" className="py-20 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 pixel-text text-green-400">{"> Resume"}</h2>
            <Card className="pixel-card bg-card/50 border-green-500/30">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">Musab Sarmad Mir</h3>
                  <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mb-4">
                    <span>+92 3400433023</span>
                    <span>musabsarmadmir@gmail.com</span>
                  </div>
                  <Button className="pixel-button bg-green-500 hover:bg-green-600" onClick={playSound}>
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="text-left space-y-8">
                  {/* Education Section */}
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Education</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Bachelor of Science, Computer Science (Fintech)</h4>
                        <p className="text-green-400 text-sm font-medium">FAST-NUCES</p>
                        <p className="text-muted-foreground text-sm">August 2023 - May 2027</p>
                        <p className="text-sm mt-1">
                          <span className="font-medium">Relevant Coursework:</span> Data Structures & Algorithms,
                          Object-Oriented Programming, Database Systems
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Experience Section */}
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Experience</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold">Research Intern</h4>
                        <p className="text-green-400 text-sm font-medium">Bayyinah | Nouman Ali Khan</p>
                        <p className="text-muted-foreground text-sm">July 2025 – Present</p>
                        <p className="text-sm">Conducting research and analysis for educational content development</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Web Development Intern</h4>
                        <p className="text-green-400 text-sm font-medium">Nexium</p>
                        <p className="text-muted-foreground text-sm">June 2025 – Present</p>
                        <p className="text-sm">Developing modern web applications and user interfaces</p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Software Engineer Fellow</h4>
                        <p className="text-green-400 text-sm font-medium">Headstarter AI</p>
                        <p className="text-muted-foreground text-sm">July 2024 – September 2024</p>
                        <p className="text-sm">
                          Built AI-powered applications and participated in intensive software engineering program
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold">Game Developer</h4>
                        <p className="text-green-400 text-sm font-medium">M‑Labs</p>
                        <p className="text-muted-foreground text-sm">June 2024 – August 2024</p>
                        <p className="text-sm">Developed interactive games and implemented game mechanics</p>
                      </div>
                    </div>
                  </div>

                  {/* Skills Section */}
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "JavaScript",
                        "Python",
                        "React",
                        "Next.js",
                        "Node.js",
                        "PostgreSQL",
                        "AI/ML",
                        "Game Development",
                        "Research",
                        "Web Development",
                      ].map((skill) => (
                        <Badge key={skill} variant="secondary" className="pixel-badge">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-muted/20">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold mb-8 pixel-text text-green-400">{"> Contact"}</h2>
            <Card className="pixel-card bg-card/50 border-green-500/30">
              <CardContent className="p-8">
                <p className="text-lg mb-8">Let's build something amazing together</p>
                <div className="flex justify-center gap-6">
                  <Button
                    variant="outline"
                    size="lg"
                    className="pixel-button border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                    onClick={playSound}
                  >
                    <Github className="h-5 w-5 mr-2" />
                    GitHub
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="pixel-button border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                    onClick={playSound}
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="pixel-button border-green-500/50 text-green-400 hover:bg-green-500/10 bg-transparent"
                    onClick={playSound}
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Terminal Overlay */}
        {terminalOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-2xl h-96 bg-black border-green-500">
              <CardContent className="p-4 h-full">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-green-400 font-bold">Terminal</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setTerminalOpen(false)}
                    className="text-green-400 hover:bg-green-500/10"
                  >
                    ✕
                  </Button>
                </div>
                <div className="font-mono text-sm text-green-400 space-y-2">
                  <div>{"> whoami"}</div>
                  <div>Musab Sarmad Mir - CS Student & Developer</div>
                  <div>{"> cat education.txt"}</div>
                  <div>FAST-NUCES | Computer Science (Fintech) | 2023-2027</div>
                  <div>{"> ls experience"}</div>
                  <div>HeadStarterAI MindStorm-Studios</div>
                  <div>{"> cat motto.txt"}</div>
                  <div>"Engineering systems that think, scale, and adapt."</div>
                  <div>
                    {"> _"}
                    <span className="animate-pulse">█</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-green-500/30">
          <div className="container mx-auto text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Musab Sarmad. Built with Next.js & TailwindCSS. Press ~ for terminal.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
