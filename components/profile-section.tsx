import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile-data";

export function ProfileSection() {
  return (
    <section className="flex flex-col gap-6 md:sticky md:top-20 md:self-start">
      <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-1 ring-border md:h-28 md:w-28">
        <Image
          src="/images/real_aba.jpeg"
          alt={profile.name}
          fill
          sizes="112px"
          className="object-cover"
          priority
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-brand">
            {profile.noun}
          </p>
          <h1 className="max-w-sm font-display text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.03em] md:text-[3.25rem]">
            {profile.name}
          </h1>
          <p className="text-sm font-medium text-muted-foreground">
            {profile.stackLine}
          </p>
        </div>

        <p className="max-w-md text-[15px] leading-7 text-muted-foreground">
          {profile.summary}
        </p>
      </div>

      <p className="flex items-center gap-2 text-sm text-muted-foreground">
        <MapPinIcon className="h-4 w-4 shrink-0" />
        {profile.location}
      </p>

      <div className="flex flex-wrap items-center gap-2">
        <Button asChild>
          <Link href={`mailto:${profile.email}`}>
            <MailIcon className="h-4 w-4" />
            Get in touch
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Résumé
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" aria-label="GitHub">
          <Link
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon className="h-4 w-4" />
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" aria-label="LinkedIn">
          <Link
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
