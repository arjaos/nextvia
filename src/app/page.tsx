import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { NetworkBackdrop } from "@/components/network-backdrop";
import { connections, services, siteConfig } from "@/lib/site";
import { cn } from "cn";

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
            <Badge
              variant="outline"
              className="h-7 border-primary/40 bg-[#0F0E34]/40 px-3 text-primary"
            >
              progress · movement · looking ahead
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
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 justify-center px-5"
                )}
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
          <ul className="grid max-w-3xl gap-3 sm:grid-cols-3">
            {connections.map((item) => (
              <li
                key={item.front}
                className="rounded-xl border border-white/10 bg-[#0F0E34]/45 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-sm font-medium text-white">{item.front}</p>
                <p className="text-xs text-primary">{item.back}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
              Why two shapes
            </p>
            <h2 className="font-heading mt-2 max-w-xl text-3xl font-semibold tracking-tight">
              Because Nextvia sits between different technologies and brings them
              together.
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
                <CardTitle className="font-heading text-xl">
                  {service.title}
                </CardTitle>
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

      <section className="border-y border-white/8 bg-[linear-gradient(180deg,transparent,oklch(0.28_0.08_250_/_0.28),transparent)]">
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
              How work moves
            </p>
            <h2 className="font-heading mt-2 text-3xl font-semibold tracking-tight">
              No mystery phase. No leftover network.
            </h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              The mark is two blocks forming an N — connection, not
              decoration. Delivery follows the same idea: we sit between
              what you have and what has to stay up.
            </p>
          </div>
          <ol className="grid gap-4 sm:grid-cols-2">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-xl border border-white/8 bg-background/60 p-5"
              >
                <p className="font-mono text-xs text-primary">0{index + 1}</p>
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

      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 rounded-2xl border border-primary/25 bg-[linear-gradient(135deg,#0F0E34,#1c3a7a_58%,#8FDDFF33)] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
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
            className={cn(
              buttonVariants({ size: "lg" }),
              "h-11 shrink-0 justify-center px-5"
            )}
          >
            Start a project
          </Link>
        </div>
      </section>
    </>
  );
}
