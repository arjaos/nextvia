import type { Metadata } from "next";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site";
import { cn } from "cn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Enterprise networks, telecom and ISP engineering, infrastructure operations, and operational software from Nextvia.",
};

export default function ServicesPage() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
        Services
      </p>
      <h1 className="font-heading mt-3 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
        Work we will put our name on.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
        Nextvia is a delivery practice, not a catalog. If a problem needs a
        network, a circuit, a rack, and a piece of software, we treat that as
        one job.
      </p>

      <div className="mt-12 grid gap-5">
        {services.map((service, index) => (
          <article
            id={service.slug}
            key={service.slug}
            className="scroll-mt-24 rounded-2xl border border-white/8 bg-card/70 p-6 sm:p-8"
          >
            <p className="font-mono text-xs text-primary">0{index + 1}</p>
            <h2 className="font-heading mt-2 text-2xl font-semibold">
              {service.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">
              {service.summary}
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <li
                  key={point}
                  className="rounded-lg border border-white/8 bg-background/50 px-4 py-3 text-sm leading-6"
                >
                  {point}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <Card className="mt-10 bg-primary/8 ring-primary/20">
        <CardHeader>
          <CardTitle className="font-heading text-2xl">
            Not sure which service fits?
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Send the topology, the pain, and the constraint. We will tell
            you whether this is a Nextvia job before anyone writes a proposal.
          </p>
          <Link
            href="/contact"
            className={cn(buttonVariants({ size: "lg" }), "h-11 justify-center px-5")}
          >
            Describe the job
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
