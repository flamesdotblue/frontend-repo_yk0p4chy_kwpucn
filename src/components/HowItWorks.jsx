import React from 'react';
import { Bot, FileText, Share2 } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Define',
    desc: 'Describe your persona — expertise, style, boundaries — and upload knowledge sources.'
  },
  {
    icon: Bot,
    title: 'Train',
    desc: 'We compile a privacy-preserving profile and test it against curated prompts.'
  },
  {
    icon: Share2,
    title: 'Deploy',
    desc: 'Embed to apps, export to AI models, or activate via Chrome/Firefox extension.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how" className="relative w-full bg-gradient-to-b from-black to-[#06070a] py-20 text-white">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">How it works</h2>
          <p className="mt-3 text-white/70">From idea to embedded in minutes.</p>
        </div>
        <ol className="grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, idx) => (
            <li key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/20">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </span>
                <span className="text-sm text-white/60">Step {idx + 1}</span>
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
