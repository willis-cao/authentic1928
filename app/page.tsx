import Navbar from "@/app/components/Navigation";

export default function Home() {
  return (
    <div className="max-w-2xl w-full">
      <div className="w-full">
        <div className="min-h-screen">
          {/* Header */}
          <div className="flex flex-row justify-between items-start mb-16">
            <div className="leading-none">
              <h1 className="custom-text-28 text-mygold leading-none">Willis Cao</h1>
            </div>
            <Navbar />
          </div>

          {/* Work Experience Section */}
          <section className="mb-14">
            <h2 className="section-title text-myred mb-6">Work Experience</h2>

            <div className="mb-8">
              <p className="text-lg text-mywhite">
                Software Engineer Intern - Mobile at{" "}
                <a href="https://cambioearth.com" target="_blank" rel="noopener noreferrer" className="text-mywhite underline decoration-mygold decoration-2 underline-offset-4 hover:text-mygold">
                  Cambio Earth
                </a>
              </p>
              <p className="text-mygray text-sm mt-1">C#, .NET MAUI, React, TypeScript | Sep 2023 – Aug 2024</p>
            </div>

            <div className="mb-8">
              <p className="text-lg text-mywhite">
                Clinical Research Coordinator at{" "}
                <a href="https://providenceresearch.ca" target="_blank" rel="noopener noreferrer" className="text-mywhite underline decoration-mygold decoration-2 underline-offset-4 hover:text-mygold">
                  PHCRI
                </a>
              </p>
              <p className="text-mygray text-sm mt-1">Sep 2020 – Aug 2021</p>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-14">
            <h2 className="section-title text-mygold mb-6">Projects</h2>

            <div className="mb-7">
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-medium text-mywhite">VoiceOver Links (Accessibility Extension for Firefox)</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://addons.mozilla.org/en-US/firefox/addon/voiceover-links/" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    Live
                  </a>
                  <a href="https://github.com/willis-cao/voiceover-links" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-mygray text-sm mt-1">JavaScript</p>
            </div>

            <div className="mb-7">
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-medium text-mywhite">AI Voice Phishing Demo</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://ai-scam-calls-demo.vercel.app" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    Live
                  </a>
                  <a href="https://github.com/willis-cao/ai-scam-calls-demo" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-mygray text-sm mt-1">React, TypeScript, Google Gemini API, ElevenLabs API</p>
            </div>

            <div className="mb-7">
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-medium text-mywhite">GO IVs (Pokémon GO Competitive Assistant)</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://go-ivs.vercel.app" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    Live
                  </a>
                  <a href="https://github.com/willis-cao/go-ivs" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-mygray text-sm mt-1">React, TypeScript, PokéAPI</p>
            </div>
          </section>

          {/* Hackathons Section */}
          <section className="mb-14">
            <h2 className="section-title text-mynavy mb-6">Hackathons</h2>

            <div className="mb-7">
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-medium text-mywhite">UBC Royale Social RPG</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://devpost.com/software/ubc-royale" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    DevPost
                  </a>
                </div>
              </div>
              <p className="text-mygray text-sm mt-1">Creativity Prize @ nwPlus HackCamp</p>
            </div>
          </section>

          {/* Research Section */}
          <section className="mb-14">
            <h2 className="section-title text-myred mb-6">Research</h2>

            <div className="mb-7">
              <div className="flex justify-between items-baseline gap-4">
                <p className="text-lg font-medium text-mywhite">Investigating the potential existence of a novel hippocampal feedback system between deep subiculum neurons and the dentate gyrus</p>
                <div className="flex gap-3 text-sm">
                  <a href="https://drive.google.com/file/d/17ilgZ30ChuPACHaBWfGu5jkCY3ZMc9QY/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                    Drive
                  </a>
                </div>
              </div>
              <p className="text-mygray text-sm mt-1">
                <a href="https://cembrowskilab.com" target="_blank" rel="noopener noreferrer" className="text-mygray hover:text-mygold">
                  Cembrowski Lab
                </a>
                {" "}| 2021 – 2022
              </p>
            </div>
          </section>

          {/* Awards Section */}
          <section className="mb-14">
            <h2 className="section-title text-mygold mb-6">Awards</h2>

            <div className="mb-8">
              <p className="text-lg text-mywhite">Physiology Prize for the Top Graduating Essay</p>
              <p className="text-mygray text-sm mt-1">Faculty of Medicine, University of British Columbia | 2022</p>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-14">
            <h2 className="section-title text-mynavy mb-6">Education</h2>

            <div className="mb-8">
              <p className="text-lg font-medium text-mywhite">Bachelor of Computer Science</p>
              <p className="text-mygray mt-1">University of British Columbia | 2022 – 2025</p>
            </div>

            <div className="mb-8">
              <p className="text-lg font-medium text-mywhite">Bachelor of Science in Cellular, Anatomical, & Physiological Sciences (Honors)</p>
              <p className="text-mygray mt-1">University of British Columbia | 2017 – 2022</p>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="mb-14">
            <h2 className="section-title text-mywhite mb-6">About</h2>

            <div className="space-y-5 text-base leading-relaxed">
              <p>
                Coming soon...
              </p>
            </div>
          </section>

          {/* Footer Links */}
          <footer className="pt-8 pb-12 border-t border-mygold/30">
            <div className="flex flex-row justify-between items-center">
              <div className="flex flex-row gap-6 text-base">
                <a href="https://github.com/willis-cao" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                  GitHub
                </a>
                <a href="https://linkedin.com/in/willis-cao" target="_blank" rel="noopener noreferrer" className="text-mywhite hover:text-mygold underline underline-offset-2">
                  LinkedIn
                </a>
                <a href="mailto:willis.cao@outlook.com" className="text-mywhite hover:text-mygold underline underline-offset-2">
                  Email
                </a>
              </div>
              <p className="subtitle-text">(Authentic / 1928)</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
