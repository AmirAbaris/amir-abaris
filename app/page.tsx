import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon, TwitterIcon, DownloadIcon } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center py-12 md:py-0 p-8">
      <div className="container max-w-6xl flex justify-center flex-col md:flex-row gap-12 items-center md:items-start">
        {/* Left Side - Profile and Contact */}
        <div className="md:w-1/2 flex flex-col items-center space-y-6 md:sticky md:top-8">
          <div className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-primary/20">
            <Image
              src="/images/aba.jpeg"
              alt="Profile Picture"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Amir Mahdi Zarei nejad</h1>
            <p className="text-muted-foreground">Frontend Developer</p>
          </div>
          <div className="space-y-2 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Email: </span>
              <a
                href="mailto:thisisamirabaris@gmail.com"
                className="hover:text-primary transition-colors"
              >
                thisisamirabaris@gmail.com
              </a>
            </p>
            <div className="flex gap-2 justify-center pt-4">
              <Link
                href="https://github.com/AmirAbaris"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <GithubIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <LinkedinIcon className="h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://x.com/abaris_aa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="icon">
                  <TwitterIcon className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <Link
              href="https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLDWMNqHSSnPKatCdflj2gQrXVmGoOFIw3b140"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 bg-primary hover:bg-primary/90 px-3 py-1.5 rounded-md text-xs font-medium transition-colors text-white"
            >
              <DownloadIcon className="h-3.5 w-3.5" />
              Download Resume
            </Link>
          </div>
        </div>

        {/* Right Side - Timeline */}
        <div className="relative md:w-1/2">
          <div className="absolute left-4 md:left-0 h-[calc(100%-2rem)] w-px bg-border top-3" />

          {/* Experience Section */}
          <div className="relative pl-8 md:pl-8 pb-16">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground font-medium">Frontend Developer</h3>
                <p className="text-sm">Codinoob • 4 months</p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">Frontend Developer</h3>
                <p className="text-sm">Nilasoft • 3 months</p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">Frontend Development Intern</h3>
                <p className="text-sm">Nilasoft • 6 months</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="relative pl-8 md:pl-8 pb-16">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <a
                  href="https://roommatehub.vercel.app/fa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">RoommateHub</h3>
                  <p className="text-sm">A platform for finding compatible roommates in your desired city. Built with Next.js, TypeScript, and Tailwind CSS.</p>
                </a>
              </div>
              <div>
                <a
                  href="https://chakavaktravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">Chakavak Travel</h3>
                  <p className="text-sm">A comprehensive travel agency website offering tours and hotel bookings worldwide. Built with modern web technologies.</p>
                </a>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="relative pl-8 md:pl-8">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">HTML5</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">CSS</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">SCSS</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Tailwind</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">JavaScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">TypeScript</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Redux</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">React Query</span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
