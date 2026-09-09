import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Reach ${siteConfig.legalName} in ${siteConfig.city} for network, telecom, and software work.`,
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
          Contact
        </p>
        <h1 className="font-heading mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          Tell us what has to stay up.
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          Send a short brief. Include the current topology if you have one,
          the constraint that is hurting, and when you need it resolved.
        </p>
        <div className="mt-8 space-y-4 rounded-2xl border border-white/8 bg-card/60 p-6 text-sm leading-6">
          <p>
            <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Email
            </span>
            <a className="mt-1 inline-block hover:text-primary" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </p>
          <p>
            <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Office
            </span>
            {siteConfig.address}
          </p>
          <p>
            <span className="block text-xs tracking-[0.14em] text-muted-foreground uppercase">
              Company
            </span>
            {siteConfig.legalName} · NUI {siteConfig.nui}
          </p>
        </div>
      </div>
      <div className="rounded-2xl border border-white/8 bg-card/70 p-6 sm:p-8">
        <h2 className="font-heading text-xl font-semibold">Project brief</h2>
        <p className="mt-2 mb-6 text-sm text-muted-foreground">
          Required: name, email, and a short description. Company is optional.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
