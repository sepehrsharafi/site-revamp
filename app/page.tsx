import Image from "next/image";
import HeroSection from "./ui/hero-section";
import StatItem from "./ui/stat-item";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <section className="container mx-auto p-4 my-20">
        <div className="text-center flex flex-col gap-8">
          <span className="text-indigo-950 font-[650] text-3xl 2xl:text-4xl">
            Why It Matters
          </span>
          <div className="flex flex-col gap-3.5 text-black text-xl xl:text-2xl 2xl:text-3xl  2xl:leading-10 font-medium">
            <p>
              Is Your Website
              <span className="text-red-600 font-[550]"> Costing</span> You
              Business Without You Even Realizing It?
            </p>
            <p>
              A bad website is worse than no website. It damages trust, repels
              customers, and silently kills your leads. In today’s market,
              people judge your business in seconds. If your site isn’t fast,
              modern, and mobile-friendly—they’ll choose your competitor.
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-2 gap-10 my-10 xl:mx-20 2xl:mx-32">
          <StatItem
            title="70% of shoppers will abandon a purchase because of poor user experience."
            graph="/graph-1.png"
            source="https://www.google.com"
            sourceTitle="PR Newswire"
            description="Ties directly to lost revenue from confusing or clunky layouts."
          />
          <StatItem
            title="50%+ of visitors abandon a page if it takes longer than 3 seconds to load."
            graph="/graph-2.png"
            source="https://www.google.com"
            sourceTitle="Think With Google"
            description="Demonstrates lost leads by the half-second and the cost of slow performance."
          />
          <StatItem
            title="94% of users won’t trust a site that looks outdated or unprofessional."
            graph="/graph-3.png"
            source="https://www.google.com"
            sourceTitle="CLX"
            description="Shows that nearly every visitor is judging—and rejecting—your old design on sight."
          />
          <StatItem
            title="62% of all web traffic is mobile, but small business sites underperform on phones."
            graph="/graph-4.png"
            source="https://www.google.com"
            sourceTitle="DataReportal"
            description="Highlights missed customers on the device they use most."
          />
        </div>
      </section>
    </main>
  );
}
