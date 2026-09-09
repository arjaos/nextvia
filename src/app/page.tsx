import Link from "next/link";
import {
  ArrowRight,
  Cable,
  Radio,
  Server,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { NetworkBackdrop } from "@/components/network-backdrop";
import { services, siteConfig } from "@/lib/site";
import { cn } from "cn";

const capabilities = [
  "Campus & data-center networks",
  "ISP backbone & access",
  "5G campus",
  "Routing & switching",
  "Security posture",
  "Hosting & custom software",
];

const steps = [
  {
    title: "Assess",
    body: "Map what is live, what is failing, and what the business actually needs from the network.",
  },
  {
    title: "Design",
    body: "Produce a topology, a bill of materials, and an operating model you can defend in a change window.",
  },
  {
    title: "Deploy",
    body: "Cut over with rollback paths, measured tests, and documentation that survives the project.",
  },
  {
    title: "Operate",
    body: "Stay close through the first incidents, then leave you with a system your team can run.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <NetworkBackdrop />
        <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
          <div className="max-w-3xl">
            <Badge variant="outline" className="h-7 border-primary/40 bg-primary/10 px-3 text-primary">
              {siteConfig.city} · founded {siteConfig.foundedYear}
            </Badge>
            <h1 className="font-heading mt-5 max-w-[16ch] text-4xl leading-[1.05] font-semibold tracking-tight sm:text-6xl">
              {siteConfig.tagline}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "h-11 justify-center px-5")}
              >
                Talk to Nextvia
                <ArrowRight data-icon="inline-end" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 justify-center px-5"
                )}
              >
                See services
              </Link>
            </div>
          </div>
          <ul className="flex max-w-4xl flex-wrap gap-2">
            {capabilities.map((item) => (
              <li
                key={item}
                className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-xs text-foreground/85"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
              What we take on
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
              Four practices. One operating standard.
            </h2>
          </div>
          <Link href="/services" className="text-sm text-primary hover:underline">
            Full service list
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.slug} className="bg-card/80 ring-white/8">
              <CardHeader>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm leading-6 text-muted-foreground">
                  {service.summary}
                </p>
                <p className="text-sm text-foreground/90">{service.points[0]}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,transparent,oklch(0.2_0.03_250_/_0.35),transparent)]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
              How work moves
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
              No mystery phase. No leftover network.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Nextvia is built for owners who have already been burned by a
              vendor that disappeared after go-live. We stay through the
              first real traffic, then hand over a system you can operate.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-xl border border-white/8 bg-background/60 p-5"
              >
                <p className="font-mono text-xs text-primary">
                  0{index + 1}
                </p>
                <h3 className="mt-2 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Built for operators
        </p>
        <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
          Engineering you can put on a change ticket.
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Cable,
              title: "Networks that route",
              body: "Campus, WAN, and backbone work with named protocols, not slide-deck architecture.",
            },
            {
              icon: Radio,
              title: "Telecom that carries load",
              body: "ISP and campus-mobile systems designed around traffic, not a brochure SKU.",
            },
            {
              icon: Server,
              title: "Infrastructure that stays up",
              body: "Virtualization, monitoring, and facilities treated as one system.",
            },
            {
              icon: Workflow,
              title: "Software on the same stack",
              body: "Portals and internal tools that sit on the infrastructure we already understand.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/8 bg-card/50 p-5"
            >
              <item.icon className="size-5 text-primary" />
              <h3 className="mt-3 font-heading text-base font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,oklch(0.22_0.04_250),oklch(0.18_0.05_175_/_0.55))] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 text-primary">
              <ShieldCheck className="size-4" />
              <span className="text-xs font-medium tracking-[0.16em] uppercase">
                Ready when you are
              </span>
            </div>
            <h2 className="font-heading mt-3 text-3xl font-semibold tracking-tight">
              Bring us the network you cannot leave half-finished.
            </h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Tell us what is live today. We will tell you what should change,
              what should not, and what it takes to get there.
            </p>
          </div>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-11 shrink-0 justify-center px-5")}
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
