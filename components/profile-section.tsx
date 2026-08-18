import Image from "next/image";
import Link from "next/link";
import { GithubIcon, LinkedinIcon, MailIcon, MapPinIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile-data";

export function ProfileSection() {
  return (
    <section className="flex flex-col gap-6 md:sticky md:top-20 md:self-start">
      <div className="flex items-center gap-4">
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

        {profile.availability.open ? (
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Available for work
          </p>
        ) : null}
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand">
            {profile.noun}
          </p>
          <h1 className="max-w-sm text-[2.125rem] font-semibold leading-[1.1] tracking-tight md:text-5xl">
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

      <div className="space-y-3 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <MapPinIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          {profile.location}
        </p>
        <Link
          href={`mailto:${profile.email}`}
          className="flex w-fit items-center gap-2 transition-colors hover:text-brand"
        >
          <MailIcon className="h-4 w-4 shrink-0 text-muted-foreground" />
          {profile.email}
        </Link>
      </div>

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
