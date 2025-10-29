import React from 'react';
import { User, Code2, Shield, Puzzle } from 'lucide-react';

const features = [
  {
    icon: User,
    title: 'Persona Builder',
    desc: 'Craft tone, knowledge, guardrails, and goals. Train with files, links, or Q&A.'
  },
  {
    icon: Code2,
    title: 'Embed Anywhere',
    desc: 'Export to leading AI models and tools with a single click. Drop-in widgets and SDKs.'
  },
  {
    icon: Shield,
    title: 'Privacy & Control',
    desc: 'Encrypted storage, granular permissions, audit logs, and revocable API tokens.'
  },
  {
    icon: Puzzle,
    title: 'Browser Extensions',
    desc: 'Chrome and Firefox extensions inject your persona into chats and workflows.'
  }
];

export default function Features() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_20%_10%,rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-semibold md:text-4xl">Everything you need to scale your digital identity</h2>
          <p className="mt-3 text-white/70">Design, deploy, and govern your AI personas from one secure platform.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/20">
              <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                <Icon className="h-6 w-6 text-cyan-300" />
              </div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition duration-300 group-hover:bg-cyan-500/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
