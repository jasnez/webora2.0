import { SITE, CTA } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-display font-bold text-6xl md:text-8xl text-primary">
        404
      </h1>
      <p className="mt-4 text-xl text-text-secondary">
        Stranica nije pronađena
      </p>
      <p className="mt-2 text-text-secondary max-w-md">
        Stranica koju tražite ne postoji ili je premještena.
      </p>
      <div className="mt-10">
        <Button href="/" variant="primary" size="lg">
          {CTA.backHome}
        </Button>
      </div>
      <p className="mt-12 text-sm text-text-secondary">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </div>
  );
}
