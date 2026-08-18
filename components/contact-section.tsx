import Link from "next/link";
import { ArrowUpRightIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/profile-data";

/**
 * The end of the content is the highest-intent moment on the page, so it
 * restates the ask instead of dead-ending on the skills grid.
 */
export function ContactSection() {
  return (
    <section id="contact" className="space-y-5">
      <div>
        <p className="font-mono text-[0.6875rem] uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h2 className="mt-2 font-display text-[1.75rem] font-semibold tracking-[-0.02em]">
          Let&apos;s build something
        </h2>
      </div>

      <div className="space-y-5 rounded-xl border border-border bg-muted/30 p-6">
        {profile.availability.open ? (
          <p className="font-mono text-[0.6875rem] uppercase tracking-[0.12em] text-brand">
            {profile.availability.label}
          </p>
        ) : null}

        <p className="max-w-md text-[15px] leading-7 text-muted-foreground">
          The fastest way to reach me is email, and I reply to everything.
          Happy to talk through a role, a contract, or a problem you&apos;re stuck
          on.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          <Button asChild size="lg">
            <Link href={`mailto:${profile.email}`}>
              <MailIcon className="h-4 w-4" />
              {profile.email}
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link
              href={profile.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              Résumé
              <ArrowUpRightIcon className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="flex items-center gap-4 border-t border-border pt-4 text-sm">
          <Link
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </Link>
          <Link
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-brand"
          >
            <LinkedinIcon className="h-4 w-4" />
            LinkedIn
          </Link>
        </div>
      </div>

      <footer className="pt-2 text-xs text-muted-foreground">
        <p>
          Built with Next.js and Tailwind CSS · {profile.location} ·{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </section>
  );
}
