import React from 'react';
import { Mail } from 'lucide-react';

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_500px_at_50%_0%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-3xl rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
        <h3 className="text-2xl font-semibold md:text-3xl">Start building your AI persona today</h3>
        <p className="mt-2 text-white/70">Join the waitlist to get early access and browser extensions.</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget;
            const data = new FormData(form);
            const email = data.get('email');
            alert(`Thanks! We'll reach out at ${email}`);
            form.reset();
          }}
          className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
        >
          <div className="flex w-full items-center gap-2 rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-left sm:w-auto">
            <Mail className="h-5 w-5 text-white/60" />
            <input
              type="email"
              name="email"
              required
              placeholder="you@company.com"
              className="w-full bg-transparent p-2 text-sm text-white placeholder-white/40 outline-none sm:w-80"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
          >
            Join waitlist
          </button>
        </form>
        <p className="mt-3 text-xs text-white/50">We never sell your data. Unsubscribe anytime.</p>
      </div>
    </section>
  );
}
