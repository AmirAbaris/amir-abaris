import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DownloadIcon,
} from "lucide-react";

export function ProfileSection() {
  return (
    <div className="md:w-1/2 flex flex-col items-center space-y-6 md:sticky md:top-8">
      <div className="relative w-48 h-48 rounded-full overflow-hidden ring-2 ring-primary/20">
        <Image
          src="/images/real_aba.jpeg"
          alt="Profile Picture"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="text-center space-y-3">
        <h1 className="text-2xl font-bold">Amir Mahdi Zarei nejad</h1>
        <p className="text-lg font-semibold text-primary">Frontend Developer</p>
        <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
          Specializing in React & Next.js. Shipped 30+ production features with
          proven performance gains. Expert in building responsive, user-focused
          interfaces.
        </p>
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
  );
}

