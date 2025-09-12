import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DownloadIcon,
} from "lucide-react";
import { Link as LinkIcon } from "lucide-react";

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
              <Link
                href="mailto:thisisamirabaris@gmail.com"
                className="hover:text-primary transition-colors"
              >
                thisisamirabaris@gmail.com
              </Link>
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
              href="https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLIoxM7d2lAcbgoHdfxD0sEzCyvk2QeX1a67FB"
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
        <div className="relative md:w-1/2 md:py-6">
          <div className="absolute left-4 md:left-0 h-[calc(100%-2rem)] w-px bg-border top-3 md:my-6" />

          {/* Experience Section */}
          <div className="relative pl-8 md:pl-8 pb-16">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Experience</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-foreground font-medium">
                  Frontend Developer | Next.js & React Native (Expo)
                </h3>
                <p className="text-sm">
                  Freelance | Self-Employed • {new Date().getMonth() - 6} months
                </p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">
                  Frontend Developer
                </h3>
                <p className="text-sm">Codinoob • 6 months</p>
              </div>
              <div>
                <h3 className="text-foreground font-medium">
                  Frontend Developer
                </h3>
                <p className="text-sm">Nilasoft • 1 year 1 months</p>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div className="relative pl-8 md:pl-8 pb-16">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Projects</h2>
            <div className="space-y-6 text-muted-foreground">
              <div>
                <Link
                  href="https://connect-black.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex gap-2 items-center hover:underline hover:text-primary transition-colors">
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                      Connecty
                    </h3>
                    <LinkIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm">
                    In a cafe or a group, you don&rsquo;t know who&rsquo;s in
                    what mood?
                    <br />
                    With <strong>Connecty</strong>, everyone sets their own
                    vibe. You understand who&rsquo;s social, who&rsquo;s solo,
                    who&rsquo;s not in the mood at all.
                    <br />
                    Everything is real &mdash; without being awkward.
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  href="https://didamet.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex gap-2 items-center hover:underline hover:text-primary transition-colors">
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                      Didamet
                    </h3>
                    <LinkIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm">
                    No more guessing games. Know instantly when your friends are
                    at the café. Simple, private, and battery-friendly.
                  </p>
                </Link>
              </div>
              <div>
                <Link
                  href="https://chakavaktravel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex gap-2 items-center hover:underline hover:text-primary transition-colors">
                    <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                      Chakavak Travel
                    </h3>
                    <LinkIcon className="h-4 w-4" />
                  </div>
                  <p className="text-sm">
                    A comprehensive travel agency website offering tours and
                    hotel bookings. Built with modern web technologies.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="relative pl-8 md:pl-8">
            <div className="absolute left-4 md:left-0 w-3 h-3 -translate-x-1/2 rounded-full bg-primary top-2" />
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                HTML5
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                SCSS
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Tailwind
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Redux
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                React Query
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                Next.js
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
