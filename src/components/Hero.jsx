import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Shield, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(800px_500px_at_10%_10%,rgba(56,189,248,0.25),transparent_60%),radial-gradient(600px_400px_at_90%_20%,rgba(168,85,247,0.18),transparent_60%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-10 px-6 py-20 md:flex-row md:items-center md:gap-12 lg:px-8">
        <div className="z-10 max-w-xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Shield className="h-3.5 w-3.5 text-cyan-300" />
            <span>Privacy-first by design</span>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Build your AI persona.
            <br />
            Deploy it anywhere.
          </h1>
          <p className="text-base text-white/70 md:text-lg">
            me.ai lets you craft a secure, customizable digital identity and embed it into your favorite AI models and tools. Own your voice, protect your data, and scale your presence.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-black transition hover:bg-cyan-400"
            >
              <Rocket className="h-5 w-5" />
              Get Started Free
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:border-white/25"
            >
              <User className="h-5 w-5" />
              See how it works
            </a>
          </div>
          <p className="text-xs text-white/50">
            Works with Chrome and Firefox extensions. No credit card required.
          </p>
        </div>

        <div className="relative h-[420px] w-full flex-1 md:h-[540px]">
          <Spline
            scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
        </div>
      </div>
    </section>
  );
}
