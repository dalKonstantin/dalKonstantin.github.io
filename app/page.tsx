import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Send, Code, Database, Terminal, ExternalLink } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-foreground mb-6 text-balance">Konstantin Dal</h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Computer Science Student & Systems Programmer
          </p>
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto text-pretty">
            Passionate about low-level programming, system architecture, and building efficient solutions with C++ and
            Go.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <a href="https://github.com/dalKonstantin" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View GitHub
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://t.me/dalKonstantin" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Contact on Telegram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                I'm a computer science student at The Bonch-Bruevich Saint Petersburg State University of
                Telecommunications, specializing in systems programming and software architecture.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                My focus is on building high-performance applications using modern C++ and Go, with a particular
                interest in concurrent systems and network programming.
              </p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  Current Focus
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-foreground/80">
                  <li>• Systems Programming with C++</li>
                  <li>• Backend Development with Go</li>
                  <li>• Network Programming & Protocols</li>
                  <li>• Performance Optimization</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="h-6 w-6 text-primary" />
                  C++
                </CardTitle>
                <CardDescription>Systems & Application Programming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Modern C++</Badge>
                    <Badge variant="secondary">STL</Badge>
                    <Badge variant="secondary">Multithreading</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Experience with modern C++ features, template programming, and performance-critical applications.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-6 w-6 text-primary" />
                  Go
                </CardTitle>
                <CardDescription>Backend & Network Programming</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Goroutines</Badge>
                    <Badge variant="secondary">Web APIs</Badge>
                    <Badge variant="secondary">Microservices</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Building scalable backend services, REST APIs, and concurrent applications with Go.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-xl">
                The Bonch-Bruevich Saint Petersburg State University of Telecommunications
              </CardTitle>
              <CardDescription className="text-base">
                Federal State Budget-Financed Educational Institution of Higher Education
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80">Computer Science & Telecommunications Engineering</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Interested in collaborating or discussing programming? Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline">
              <a href="https://github.com/dalKonstantin" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub Profile
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg">
              <a href="https://t.me/dalKonstantin" target="_blank" rel="noopener noreferrer">
                <Send className="mr-2 h-5 w-5" />
                Telegram Chat
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-muted/50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground">© 2024 Konstantin Dal. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  )
}
