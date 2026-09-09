import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nextvia L.L.C. is a Pristina-based practice for enterprise networks, telecom, and operational software.",
};

const facts = [
  { label: "Legal name", value: siteConfig.legalName },
  { label: "Registered", value: `${siteConfig.city}, ${siteConfig.country}` },
  { label: "Founded", value: String(siteConfig.foundedYear) },
  { label: "Managing director", value: siteConfig.managingDirector },
  { label: "Business register", value: `NUI ${siteConfig.nui}` },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
        About
      </p>
      <h1 className="font-heading mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        A network company that still writes configs.
      </h1>
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5 text-base leading-7 text-muted-foreground">
          <p>
            {siteConfig.legalName} was registered in {siteConfig.city} in{" "}
            {siteConfig.foundedYear} to put serious infrastructure work under
            one roof: enterprise and campus networks, telecom and ISP
            engineering, infrastructure operations, and the software those
            systems need to stay useful.
          </p>
          <p>
            The practice is led by engineers who have spent a decade on
            production networks — campus backbones, ISP access, hospitality
            and enterprise estates, and the first 5G campus deployment in
            Kosovo. That is the standard we hold new work to: named protocols,
            measured cutovers, and documentation that survives the project.
          </p>
          <p>
            We are not a staffing mill and we are not a hardware catalog. If
            the job is a live network, a circuit, a rack, or a platform that
            has to stay up, it belongs here.
          </p>
        </div>
        <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-xl border border-white/8 bg-card/70 p-4"
            >
              <dt className="text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {fact.label}
              </dt>
              <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <section className="mt-16 rounded-2xl border border-white/8 bg-card/50 p-8">
        <h2 className="font-heading text-2xl font-semibold">How we work</h2>
        <ul className="mt-5 grid gap-4 sm:grid-cols-3">
          <li>
            <h3 className="font-medium">Production first</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Designs start from traffic, failure domains, and who is on
              call — not from a vendor matrix.
            </p>
          </li>
          <li>
            <h3 className="font-medium">Handover is the product</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              Diagrams, addressing, credentials, and runbooks are part of
              delivery, not an optional extra.
            </p>
          </li>
          <li>
            <h3 className="font-medium">Stay through first blood</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              We remain close until the network has seen real load and the
              first incidents have a known owner.
            </p>
          </li>
        </ul>
        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "mt-8 inline-flex h-11 px-5")}
        >
          Work with us
        </Link>
      </section>
    </div>
  );
}
