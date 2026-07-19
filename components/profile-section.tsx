import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GithubIcon,
  LinkedinIcon,
  DownloadIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from "lucide-react";

export function ProfileSection() {
  return (
    <section className="flex flex-col gap-6 md:sticky md:top-10 md:self-start">
      <div className="relative h-36 w-36 overflow-hidden rounded-full ring-1 ring-border">
        <Image
          src="/images/real_aba.jpeg"
          alt="Amir Mahdi Zarei Nejad"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Frontend Engineer
          </p>
          <h1 className="max-w-sm text-4xl font-semibold leading-tight md:text-5xl">
            Amir Mahdi Zarei Nejad
          </h1>
          <p className="text-base font-medium text-muted-foreground">
            React • Next.js • TypeScript • Go
          </p>
        </div>

        <p className="max-w-md text-sm leading-7 text-muted-foreground">
          Frontend Engineer specializing in React and Next.js. Shipped 50+
          production features across web and mobile applications with focus on
          performance, scalable architecture, and AI-assisted development
          workflows.
        </p>
      </div>

      <div className="space-y-3 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4 text-foreground" />
          Karaj, Iran
        </p>
        <Link
          href="tel:+989364447435"
          className="flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <PhoneIcon className="h-4 w-4 text-foreground" />
          +98 936 444 7435
        </Link>
        <Link
          href="mailto:thisisamirabaris@gmail.com"
          className="flex items-center gap-2 transition-colors hover:text-foreground"
        >
          <MailIcon className="h-4 w-4 text-foreground" />
          thisisamirabaris@gmail.com
        </Link>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button asChild variant="outline" size="icon" aria-label="GitHub">
          <Link
            href="https://github.com/AmirAbaris"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
          <Link
            href="https://www.linkedin.com/in/amir-mahdi-zarei-nejad-40005526a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild>
          <Link
            href="https://7lg03ct7vc.ufs.sh/f/PyyzXFE2HKsLt027FaMwcRqn2V7OJHKCg1Mpf3yX0jr6Ysib"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DownloadIcon className="h-4 w-4" />
            Resume
          </Link>
        </Button>
      </div>
    </section>
  );
}
