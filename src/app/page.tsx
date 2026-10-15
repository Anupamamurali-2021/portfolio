"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main className="min-h-screen bg-[#F7F1E7] text-[#1E1917]">
      <nav className="fixed top-0 z-50 w-full border-b border-[#E7D8C7]/70 bg-[#F7F1E7]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">

            {/* Name and role */}
            <div className="flex flex-col">
              <a
                href="#"
                className="text-lg font-black tracking-tight text-[#1E1917]"
              >
                ANUPAMA.MURALI
              </a>

              <span className="mt-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D96C2F]">
                Software Developer
              </span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden items-center gap-4 text-sm font-semibold text-[#665C56] md:flex">
            <a
              href="#about"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              About Me
            </a>

            <a
              href="#skills"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              Skills
            </a>

            <a
              href="#experience"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              Experience
            </a>

            <a
              href="#education"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              Education
            </a>

            <a
              href="#projects"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              My Projects
            </a>

            <a
              href="#certifications"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              Certifications
            </a>

            <a
              href="#contact"
              className="rounded-full px-3 py-2 transition duration-300 hover:bg-[#D96C2F] hover:text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#CDBAA8] text-xl text-[#1E1917] md:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="border-t border-[#E7D8C7] bg-[#F7F1E7] px-6 py-6 md:hidden">
            <div className="flex flex-col gap-5 font-semibold text-[#665C56]">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About Me
              </a>

              <a href="#skills" onClick={() => setMenuOpen(false)}>
                Skills
              </a>

              <a href="#experience" onClick={() => setMenuOpen(false)}>
                Experience
              </a>

              <a href="#education" onClick={() => setMenuOpen(false)}>
                Education
              </a>

              <a href="#projects" onClick={() => setMenuOpen(false)}>
                My Projects
              </a>

              <a href="#certifications" onClick={() => setMenuOpen(false)}>
                Certifications
              </a>

              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact Me
              </a>

              <a
                href="/ANUPAMA_MURALI_RESUME.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit rounded-full bg-[#1E1917] px-5 py-2 text-sm text-white"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20">
        {/* Decorative background shapes */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-28 top-24 h-72 w-72 rounded-full bg-[#EADCCB]" />
          <div className="absolute -left-24 bottom-16 h-56 w-56 rounded-full border-[35px] border-[#D96C2F]/15" />

          <div className="absolute right-[10%] top-[30%] hidden h-28 w-28 rotate-12 rounded-3xl bg-[#D96C2F]/10 lg:block" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl translate-y-16">
          {/* Small introduction */}
          <div className="mb-10 flex flex-col gap-2">
          </div>

          {/* Main portfolio title */}
          <div className="relative">
            <h1 className="select-none text-[18vw] font-black leading-[0.78] tracking-[-0.08em] text-[#1E1917] sm:text-[15vw] lg:text-[12rem]">
              PORTFOLIO
            </h1>

            <p className="absolute left-[14%] top-1/2 -translate-y-1/2 rotate-[-5deg] whitespace-nowrap font-serif text-3xl font-medium italic text-[#D96C2F] sm:text-5xl lg:text-7xl">
              Anupama Murali
            </p>
          </div>

          {/* Bottom content */}
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left text */}
            <div>
              <h2 className="max-w-xl text-4xl font-bold leading-tight tracking-tight text-[#1E1917] sm:text-5xl">
                Turning ideas into practical{" "}
                <span className="text-[#D96C2F]">
                  web experiences.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-[#665C56]">
                I&apos;m a software developer focused on building modern,
                user-friendly web applications while continuously growing through
                real-world development experience.
              </p>
            </div>

            {/* Right image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative z-10 h-[340px] w-full max-w-[560px] overflow-hidden rounded-[2.5rem]">
                <img
                  src="/developer-workspace2.png"
                  alt="Software development workspace"
                  className="h-full w-full object-cover object-right"
                />
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#8A7E75]">
            <span className="h-px w-12 bg-[#8A7E75]" />
            Scroll to explore
          </div>
        </div>
      </section>
      <section
        id="about"
        className="relative overflow-hidden bg-[#F1E4D4] px-6 py-28"
      >
        {/* Decorative elements */}
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-[40%] bg-[#D96C2F]" />

        <div className="absolute right-10 top-10 hidden space-y-2 lg:block">
          <div className="h-[2px] w-24 bg-[#D96C2F]/40" />
          <div className="h-[2px] w-20 bg-[#D96C2F]/40" />
          <div className="h-[2px] w-16 bg-[#D96C2F]/40" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.4fr] lg:items-center">

          <div className="relative flex flex-col items-center lg:items-start lg:ml-20">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1E1917] shadow-xl">
              <img
                src="/anupama2.jpg"
                alt="Anupama Murali"
                className="h-[250px] w-[200px] object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1E1917]/80 to-transparent px-5 pb-5 pt-16 lg:ml-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#F7F1E7]">
                  Software Developer
                </p>
              </div>
            </div>
            <a
              href="/ANUPAMA_MURALI_RESUME.pdf"
              target="_blank"
              className="mt-5 inline-flex items-center rounded-full bg-[#D96C2F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#B94F35] lg:ml-5"
            >
              View Resume
            </a>

            <div className="absolute -right-4 top-8 hidden h-24 w-24 rounded-full border-[3px] border-[#D96C2F]/40 sm:block" />
          </div>

          {/* About content */}
          <div className="lg:-ml-30">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#B94F35]">
              Get to know me
            </p>

            <h2 className="mb-8 text-5xl font-black tracking-tight text-[#D96C2F] sm:text-6xl">
              About Me
            </h2>

            <div className="max-w-3xl space-y-6 text-lg leading-8 text-[#574D47]">
              <p>
                Hello! I&apos;m <strong className="text-[#1E1917]">Anupama Murali</strong>,
                a software developer with a strong interest in building practical
                and user-friendly web applications.
              </p>

              <p>
                I work with technologies such as{" "}
                <strong className="text-[#1E1917]">
                  Python, Django, React, Next.js, JavaScript, and MySQL
                </strong>.
                I&apos;m currently gaining hands-on industry experience as a
                Software Developer Intern at Kochi Digital.
              </p>

              <p>
                I enjoy understanding how applications work, solving development
                problems, improving existing features, and continuously learning
                technologies that help me grow as a software engineer.
              </p>
            </div>

            {/* Quick details */}
            <div className="mt-10 grid gap-4 sm:grid-cols-3">

              <div className="rounded-2xl bg-[#F7F1E7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B94F35]">
                  Based In
                </p>
                <p className="mt-2 font-semibold text-[#1E1917]">
                  Kerala, India
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F1E7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B94F35]">
                  Current Role
                </p>
                <p className="mt-2 font-semibold text-[#1E1917]">
                  Developer Intern
                </p>
              </div>

              <div className="rounded-2xl bg-[#F7F1E7] p-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B94F35]">
                  Focus
                </p>
                <p className="mt-2 font-semibold text-[#1E1917]">
                  Full-Stack Web
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="relative overflow-hidden px-6 py-28">
        {/* Decorative background */}
        <div className="absolute right-0 top-0 h-40 w-40 rounded-bl-[6rem] bg-[#D96C2F]/10" />

        <div className="mx-auto max-w-7xl">
          <div className="mb-14">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#B94F35]">
              What I Work With
            </p>

            <h2 className="text-5xl font-black tracking-tight text-[#1E1917] sm:text-6xl lg:text-7xl">
              MY <span className="text-[#D96C2F]">SKILLS</span>
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* Programming */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#D96C2F] p-7 text-white transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                01
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                Core
              </p>

              <h3 className="mb-6 text-2xl font-bold">
                Programming Languages
              </h3>

              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "Java", "C", "C++", "PHP"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#E9A170] p-7 transition duration-300 hover:-translate-y-2">

              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                02
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Interface
              </p>

              <h3 className="mb-6 text-2xl font-bold text-white">
                Frontend
              </h3>

              <div className="mt-8 flex flex-wrap gap-2">
                {["HTML", "CSS", "React", "Next.js"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#F3CFB7] p-7 transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                03
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black">
                Server Side
              </p>

              <h3 className="mb-6 text-2xl font-bold text-black">
                Backend
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {["Django", "Django REST Framework", "REST APIs"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[#BFA995] px-4 py-2 text-sm text-[#574D47]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Database */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#D96C2F] p-7 text-white transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                04
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white/80">
                Data
              </p>
              <h3 className="mb-6 text-2xl font-bold text-white">
                Database
              </h3>

              <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white">
                MySQL
              </span>
            </div>

            {/* Version Control */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#E9A170] p-7 transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                05
              </span>

              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-white">
                Collaboration
              </p>

              <h3 className="mb-6 text-2xl font-bold text-white">
                Version Control
              </h3>
              <div className="mt-8 flex flex-wrap gap-2">
                {["Git", "GitHub"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/30 px-4 py-2 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#F3CFB7] p-7 transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-black/10">
                06
              </span>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-black">
                Workflow
              </p>

              <h3 className="mb-6 text-2xl font-bold text-black">
                Tools
              </h3>

              <div className="mt-8 flex flex-wrap gap-3">
                {["VS Code", "Postman"].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-black/20 px-4 py-2 text-sm text-black/90"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
      <section
        id="experience"
        className="relative overflow-hidden bg-[#1E1917] px-6 py-24 text-white sm:px-10 lg:px-16"
      >
        {/* Decorative background */}
        <div className="absolute -right-24 top-16 h-72 w-72 rounded-full border border-[#D96C2F]/20" />
        <div className="absolute right-10 top-28 h-44 w-44 rounded-full border border-[#D96C2F]/10" />

        <div className="relative mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D96C2F]">
              My Journey
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              EXPERIENCE
            </h2>

            <div className="mt-6 h-[3px] w-20 bg-[#D96C2F]" />
          </div>

          {/* Experience layout */}
          <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:items-start">

            {/* Date side */}
            <div className="relative">
              <p className="text-5xl font-black leading-none text-[#D96C2F]">
                2026
              </p>

              <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-white">
                June — Present
              </p>

              <div className="mt-8 hidden h-32 w-[2px] bg-[#D96C2F]/50 lg:block" />
            </div>

            {/* Cut-corner experience panel */}
            <div
              className="relative overflow-hidden bg-[#2A2421] px-8 py-10 sm:px-10 lg:px-14 lg:py-12
        [clip-path:polygon(0_0,94%_0,100%_18%,100%_100%,6%_100%,0_82%)]"
            >
              {/* Orange top accent */}
              <div className="absolute left-0 top-0 h-[5px] w-40 bg-[#D96C2F]" />

              {/* Large faded number */}
              <span className="absolute right-10 top-5 text-8xl font-black text-white/[0.04]">
                01
              </span>

              <p className="relative text-xs font-bold uppercase tracking-[0.28em] text-[#D96C2F]">
                Kochi Digital
              </p>

              <h3 className="relative mt-4 text-3xl font-black text-white sm:text-4xl">
                Software Developer Intern
              </h3>

              <p className="relative mt-3 text-sm font-medium text-white/50">
                Kochi, Kerala, India
              </p>

              {/* Experience points */}
              <div className="relative mt-10 max-w-3xl space-y-6">

                <div className="grid grid-cols-[35px_1fr] gap-4">
                  <span className="font-black text-[#D96C2F]">
                    01
                  </span>

                  <p className="leading-7 text-white/70">
                    Developed and enhanced web application features using Django,
                    React, and Next.js.
                  </p>
                </div>

                <div className="grid grid-cols-[35px_1fr] gap-4">
                  <span className="font-black text-[#D96C2F]">
                    02
                  </span>

                  <p className="leading-7 text-white/70">
                    Integrated REST APIs and implemented frontend UI.
                  </p>
                </div>

                <div className="grid grid-cols-[35px_1fr] gap-4">
                  <span className="font-black text-[#D96C2F]">
                    03
                  </span>

                  <p className="leading-7 text-white/70">
                    Worked with Git and GitHub using feature branches, commits,
                    pull requests, and code reviews.
                  </p>
                </div>

                <div className="grid grid-cols-[35px_1fr] gap-4">
                  <span className="font-black text-[#D96C2F]">
                    04
                  </span>

                  <p className="leading-7 text-white/70">
                    Debugged and maintained application features in an Agile
                    development environment.
                  </p>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="relative mt-10 border-l-2 border-[#D96C2F] pl-5">
                <p className="max-w-2xl text-xs leading-6 text-white/40">
                  Company source code, internal screenshots, and confidential
                  implementation details are not publicly shared.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="education"
        className="relative overflow-hidden bg-[#F7F1E7] px-6 py-24 sm:px-10 lg:px-16"
      >
        {/* Decorative background elements */}
        <div className="absolute -left-24 top-24 h-64 w-64 rounded-full border border-[#D96C2F]/10" />
        <div className="absolute -left-10 top-36 h-40 w-40 rounded-full border border-[#D96C2F]/10" />

        <div className="relative mx-auto max-w-7xl">
          {/* Section heading */}
          <div className="mb-20">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#D96C2F]">
              Academic Journey
            </p>

            <h2 className="mt-4 text-5xl font-black tracking-tight text-[#1E1917] sm:text-6xl lg:text-7xl">
              EDUCATION
            </h2>

            <div className="mt-6 h-[3px] w-20 bg-[#D96C2F]" />
          </div>

          {/* Education timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[21px] top-4 hidden h-[calc(100%-20px)] w-[2px] bg-[#D96C2F]/25 md:block" />

            <div className="space-y-16">
              {/* MCA */}
              <div className="relative grid gap-6 md:grid-cols-[60px_180px_1fr] md:items-start">
                {/* Timeline number */}
                <div className="relative hidden md:flex">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D96C2F] text-sm font-black text-white">
                    01
                  </div>
                </div>

                {/* Year */}
                <div>
                  <p className="text-xl font-black text-[#D96C2F]">
                    2024 — 2026
                  </p>
                </div>

                {/* Details */}
                <div className="relative border-t border-[#D96C2F]/30 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
                  <span className="absolute -top-8 right-0 text-7xl font-black text-[#D96C2F]/8 md:top-[-20px]">
                    01
                  </span>

                  <h3 className="relative text-3xl font-black text-[#1E1917]">
                    Master of Computer Applications (MCA)
                  </h3>

                  <p className="mt-3 text-lg font-bold text-[#5F5651]">
                    Sree Narayana Gurukulam College of Engineering, Kolenchery
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#80736B]">
                    APJ Abdul Kalam Technological University
                  </p>

                  <p className="mt-4 inline-block border-b-2 border-[#D96C2F] pb-1 text-sm font-bold text-[#1E1917]">
                    CGPA: 8.7 / 10
                  </p>
                </div>
              </div>

              {/* BCA */}
              <div className="relative grid gap-6 md:grid-cols-[60px_180px_1fr] md:items-start">
                <div className="relative hidden md:flex">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D96C2F] text-sm font-black text-white">
                    02
                  </div>
                </div>

                <div>
                  <p className="text-xl font-black text-[#D96C2F]">
                    2021 — 2024
                  </p>
                </div>

                <div className="relative border-t border-[#D96C2F]/30 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
                  <span className="absolute -top-8 right-0 text-7xl font-black text-[#D96C2F]/8 md:top-[-20px]">
                    02
                  </span>

                  <h3 className="relative text-3xl font-black text-[#1E1917]">
                    Bachelor of Computer Applications (BCA)
                  </h3>

                  <p className="mt-3 text-lg font-bold text-[#5F5651]">
                    Swamy Saswathikananda College, Poothotta
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#80736B]">
                    Mahatma Gandhi University
                  </p>

                  <p className="mt-4 inline-block border-b-2 border-[#D96C2F] pb-1 text-sm font-bold text-[#1E1917]">
                    CGPA: 8.29 / 10
                  </p>
                </div>
              </div>

              {/* Higher Secondary */}
              <div className="relative grid gap-6 md:grid-cols-[60px_180px_1fr] md:items-start">
                <div className="relative hidden md:flex">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D96C2F] text-sm font-black text-white">
                    03
                  </div>
                </div>

                <div>
                  <p className="text-xl font-black text-[#D96C2F]">
                    2019 — 2021
                  </p>
                </div>

                <div className="relative border-t border-[#D96C2F]/30 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
                  <span className="absolute -top-8 right-0 text-7xl font-black text-[#D96C2F]/8 md:top-[-20px]">
                    03
                  </span>

                  <h3 className="relative text-3xl font-black text-[#1E1917]">
                    Higher Secondary
                  </h3>

                  <p className="mt-3 text-lg font-bold text-[#5F5651]">
                    Kshethra Pravesana Memorial Higher Secondary School, Poothotta
                  </p>

                  <p className="mt-2 text-sm leading-6 text-[#80736B]">
                    Biology Science
                  </p>

                  <p className="mt-4 inline-block border-b-2 border-[#D96C2F] pb-1 text-sm font-bold text-[#1E1917]">
                    98%
                  </p>
                </div>
              </div>

              {/* SSLC */}
              <div className="relative grid gap-6 md:grid-cols-[60px_180px_1fr] md:items-start">
                <div className="relative hidden md:flex">
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full bg-[#D96C2F] text-sm font-black text-white">
                    04
                  </div>
                </div>

                <div>
                  <p className="text-xl font-black text-[#D96C2F]">
                    2018 — 2019
                  </p>
                </div>

                <div className="relative border-t border-[#D96C2F]/30 pt-6 md:border-t-0 md:border-l md:pl-10 md:pt-0">
                  <span className="absolute -top-8 right-0 text-7xl font-black text-[#D96C2F]/8 md:top-[-20px]">
                    04
                  </span>

                  <h3 className="relative text-3xl font-black text-[#1E1917]">
                    SSLC
                  </h3>

                  <p className="mt-3 text-lg font-bold text-[#5F5651]">
                    Kshethra Pravesana Memorial Vocational Higher Secondary School,
                    Poothotta
                  </p>

                  <p className="mt-4 inline-block border-b-2 border-[#D96C2F] pb-1 text-sm font-bold text-[#1E1917]">
                    95%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="projects"
        className="relative overflow-hidden bg-[#F1E4D4] px-6 py-28"
      >
        {/* Decorative shapes */}
        <div className="absolute -left-32 top-28 h-72 w-72 rounded-full border-[45px] border-[#D96C2F]/10" />

        <div className="absolute -right-16 bottom-20 h-48 w-48 rotate-12 rounded-[3rem] bg-[#D96C2F]/10" />

        <div className="relative mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#B94F35]">
              What I&apos;ve Built
            </p>

            <h2 className="text-5xl font-black tracking-tight text-[#1E1917] sm:text-6xl lg:text-7xl">
              MY <span className="text-[#D96C2F]">PROJECTS</span>
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#665C56]">
              A collection of academic and personal projects where I applied my
              programming, web development, and database skills.
            </p>
          </div>

          <div className="space-y-8">

            {/* Project 01 */}
            <div className="group grid overflow-hidden rounded-[2.5rem] bg-[#1E1917] text-white lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative flex min-h-[330px] items-center justify-center bg-[#D96C2F] p-10">
                <span className="absolute left-7 top-6 text-sm font-bold uppercase tracking-[0.25em] text-white/70">
                  Project 01
                </span>

                <div className="text-center">
                  <p className="text-7xl font-black tracking-[-0.08em] sm:text-8xl">
                    CAR
                  </p>

                  <p className="mt-1 font-serif text-4xl italic text-[#FFE5D4]">
                    Rental
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#D96C2F]">
                  Web Application
                </p>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  Car Rental System
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-white/65">
                  Developed a web-based car rental management system for vehicle
                  booking and reservation management. Implemented customer
                  registration, vehicle search, booking, and reservation
                  functionalities.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["PHP", "HTML", "CSS", "JavaScript", "MySQL"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Project 02 */}
            <div className="group grid overflow-hidden rounded-[2.5rem] border border-[#D7C2AE] bg-[#F7F1E7] lg:grid-cols-[1.25fr_0.75fr]">
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#B94F35]">
                  Web Application
                </p>

                <h3 className="text-3xl font-bold text-[#1E1917] sm:text-4xl">
                  Vaccina8
                </h3>

                <p className="mt-2 text-lg font-medium text-[#D96C2F]">
                  Infant Vaccination Booking System
                </p>

                <p className="mt-5 max-w-2xl leading-8 text-[#665C56]">
                  Developed a web application for scheduling and managing infant
                  vaccination appointments. Implemented infant profile management,
                  vaccination history tracking, appointment scheduling, and reminder
                  functionality.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Python", "Django", "HTML", "CSS", "SQLite"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[#D8C4B2] bg-[#F1E4D4] px-4 py-2 text-sm font-medium text-[#574D47]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex min-h-[330px] items-center justify-center bg-[#EADCCB] p-10">
                <span className="absolute right-7 top-6 text-sm font-bold uppercase tracking-[0.25em] text-[#B94F35]">
                  Project 02
                </span>

                <div className="relative text-center">
                  <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-[#D96C2F]">
                    <span className="text-6xl font-black text-white">
                      V8
                    </span>
                  </div>

                  <p className="mt-5 font-serif text-3xl italic text-[#B94F35]">
                    Vaccination Care
                  </p>
                </div>
              </div>
            </div>

            {/* Project 03 */}
            <div className="group grid overflow-hidden rounded-[2.5rem] bg-[#B94F35] text-white lg:grid-cols-[0.75fr_1.25fr]">
              <div className="relative flex min-h-[330px] items-center justify-center bg-[#EADCCB] p-10">
                <span className="absolute left-7 top-6 text-sm font-bold uppercase tracking-[0.25em] text-[#B94F35]">
                  Project 03
                </span>

                <div className="text-center">
                  <p className="text-7xl font-black tracking-[-0.08em] text-[#1E1917]">
                    AM
                  </p>

                  <p className="mt-2 font-serif text-3xl italic text-[#D96C2F]">
                    Portfolio
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#F6D5C7]">
                  Personal Project
                </p>

                <h3 className="text-3xl font-bold sm:text-4xl">
                  Personal Portfolio Website
                </h3>

                <p className="mt-5 max-w-2xl leading-8 text-white/75">
                  A responsive developer portfolio designed to showcase my
                  experience, technical skills, education, projects,
                  certifications, resume, and professional profiles.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Next.js", "React", "TypeScript", "Tailwind CSS"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section
        id="certifications"
        className="relative overflow-hidden bg-[#F7F1E7] px-6 py-28"
      >
        {/* Decorative elements */}
        <div className="absolute -right-24 top-20 h-64 w-64 rounded-full bg-[#D96C2F]/10" />
        <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-[3rem] bg-[#EADCCB]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-16">
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#B94F35]">
              Learning & Recognition
            </p>

            <h2 className="text-5xl font-black tracking-tight text-[#1E1917] sm:text-6xl lg:text-7xl">
              CERTIFICATIONS &
              <span className="text-[#D96C2F]"> ACHIEVEMENTS</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* NPTEL */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#1E1917] p-8 text-white transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-white/5">
                01
              </span>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#D96C2F]">
                Certification
              </p>

              <h3 className="text-2xl font-bold">
                NPTEL Elite Certificate
              </h3>

              <p className="mt-4 leading-7 text-white/65">
                Database Management System
              </p>

              <p className="mt-2 font-semibold text-[#D96C2F]">
                IIT Kharagpur
              </p>
            </div>

            {/* AI & ML */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#D96C2F] p-8 text-white transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-white/10">
                02
              </span>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#FFE1CF]">
                Internship Certificate
              </p>

              <h3 className="text-2xl font-bold">
                Python AI & ML Internship
              </h3>

              <p className="mt-4 leading-7 text-white/80">
                Completed internship training in Python, Artificial Intelligence,
                and Machine Learning.
              </p>

              <p className="mt-2 font-semibold text-[#FFE1CF]">
                Right Soft Options, Kochi
              </p>
            </div>

            {/* C++ */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#EADCCB] p-8 transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-[#1E1917]/5">
                03
              </span>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B94F35]">
                Programming
              </p>

              <h3 className="text-2xl font-bold text-[#1E1917]">
                C++ Programming Certification
              </h3>

              <p className="mt-4 leading-7 text-[#665C56]">
                Certification in C++ programming and core programming concepts.
              </p>

              <p className="mt-2 font-semibold text-[#B94F35]">
                Coders House
              </p>
            </div>

            {/* Academic */}
            <div className="group relative overflow-hidden rounded-[2rem] bg-[#B94F35] p-8 text-white transition duration-300 hover:-translate-y-2 md:col-span-2 lg:col-span-2">
              <span className="absolute right-8 top-0 text-[8rem] font-black text-white/5">
                8.7
              </span>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#F6D6C7]">
                Academic Achievement
              </p>

              <h3 className="text-3xl font-bold">
                MCA — CGPA 8.7 / 10
              </h3>

              <p className="mt-4 max-w-xl leading-7 text-white/75">
                Master of Computer Applications from Sree Narayana Gurukulam
                College of Engineering, under APJ Abdul Kalam Technological
                University.
              </p>
            </div>

            {/* Merit Award */}
            <div className="group relative overflow-hidden rounded-[2rem] border border-[#D8C5B3] bg-white/40 p-8 transition duration-300 hover:-translate-y-2">
              <span className="absolute right-5 top-3 text-7xl font-black text-[#1E1917]/5">
                04
              </span>

              <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#B94F35]">
                Achievement
              </p>

              <h3 className="text-2xl font-bold text-[#1E1917]">
                Merit Award
              </h3>

              <p className="mt-4 leading-7 text-[#665C56]">
                Received Merit Award for Platinum Club Membership.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section
        id="contact"
        className="relative overflow-hidden bg-[#1E1917] px-6 py-28 text-white"
      >
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-[#D96C2F]/15" />
        <div className="absolute -left-24 bottom-10 h-56 w-56 rounded-[4rem] bg-[#D96C2F]/10" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-[#D96C2F]">
                Let&apos;s Talk
              </p>

              <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                HAVE A ROLE,
                <br />
                IDEA OR
                <span className="text-[#D96C2F]"> OPPORTUNITY?</span>
              </h2>

              <p className="mt-6 max-w-xl text-lg leading-8 text-white/65">
                I&apos;m open to software development opportunities, professional
                connections, and conversations about interesting web development
                projects.
              </p>
            </div>

            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a
                  href="https://github.com/Anupamamurali-2021"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D96C2F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#B94F35]"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/anupama-murali-5087a6309"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D96C2F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#B94F35]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=anupamamurali71@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D96C2F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#B94F35]"
                >
                  Email Me
                </a>
                <a
                  href="/ANUPAMA_MURALI_RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#D96C2F] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#B94F35]"
                >
                  View Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative flex min-h-[70vh] items-center overflow-hidden bg-[#F7F1E7] px-6 py-28">
        <div className="absolute -left-28 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#D96C2F]/10" />

        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-tl-[8rem] bg-[#EADCCB]" />

        <div className="relative mx-auto w-full max-w-7xl text-center">
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.35em] text-[#B94F35]">
            End of Portfolio
          </p>

          <h2 className="text-[18vw] font-black leading-[0.8] tracking-[-0.08em] text-[#1E1917] sm:text-[14vw] lg:text-[10rem]">
            THANK YOU
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#665C56]">
            Thank you for taking the time to explore my portfolio.
            I&apos;m excited to continue learning, building, and growing as a
            software developer.
          </p>

          <a
            href="#"
            className="mt-10 inline-block rounded-full bg-[#D96C2F] px-7 py-3 font-medium text-white transition hover:-translate-y-1 hover:bg-[#B94F35]"
          >
            Back to Top
          </a>
        </div>
      </section>

      <footer className="border-t border-gray-200 px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>© 2026 Anupama Murali. All rights reserved.</p>

          <p>Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
