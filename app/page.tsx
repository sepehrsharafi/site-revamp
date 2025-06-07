import HeroSection from "./ui/hero-section";
import StatItem from "./ui/stat-item";
import OurSolutionItem from "./ui/our-solution-item";
import OurSolutionSubItem from "./ui/our-solution-subItem";
import WhyChooseUsItem from "./ui/why-choose-us-item";
import UnleashYourPotentialItem from "@/app/ui/unleash-your-potential-item";

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
        <div className="grid xl:grid-cols-2 gap-10 my-10 xl:mx-20 2xl:mx-48">
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
      <section className="container flex flex-col gap-14 mx-auto p-4 my-20">
        <div className="text-center flex flex-col gap-8">
          <span className="text-indigo-950 font-[650] text-3xl 2xl:text-4xl">
            We Turn Broken Websites Into Conversion Machines
          </span>
          <div className="flex flex-col gap-3.5 text-black text-xl xl:text-2xl 2xl:text-3xl  2xl:leading-10 font-medium">
            <p>
              Whether your site is outdated, poorly built, or just not doing its
              job—we fix what’s broken and unlock your business’s online
              potential.
            </p>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center justify-center gap-16 xl:flex-row  w-fit">
          <div className="flex flex-col gap-8">
            <OurSolutionItem
              title="Manual Process → Automate Repetitive Tasks"
              icon="our-solution-1.png"
              subIcon="our-solution-1-corner.png"
              description="Save time by automating bookings, follow-ups, and forms—so your site works even when you're not online."
              claim="faster workflow"
              percentage={89}
            />
            <OurSolutionItem
              title="We connect the tools you already use."
              icon="our-solution-2.png"
              subIcon="our-solution-2-corner.png"
              description="We integrate your calendars, payments, emails, and social platforms for a smooth, professional experience."
              claim="better integration"
              percentage={60}
            />
            <OurSolutionItem
              title="We help you do more—with less."
              icon="our-solution-2.png"
              subIcon="our-solution-2-corner.png"
              description="Get more from your website—faster load times, cleaner UX, and smart design that converts without wasting time or money."
              claim="cost reduction"
              percentage={45}
            />
          </div>
          <div className="flex flex-col gap-5 xl:w-[55%] my-auto p-5.5 xl:p-7 2xl:p-9 border-[1.5px] border-[#EBEBEB] rounded-[28px]">
            <div className="flex flex-col gap-2">
              <h3 className="text-[#221D4F] text-3xl xl:text-[28px] 2xl:text-3xl font-semibold xl:font-[650]">
                Our Solution
              </h3>
              <p className="text-[22px] xl:text-[19px] 2xl:text-[21px] font-medium xl:font-[450]">
                A comprehensive platform that streamlines your operations,
                integrates your systems, and optimizes your resources.
              </p>
            </div>
            <div className="grid xl:grid-cols-2 gap-4">
              <OurSolutionSubItem
                title="“Site doesn’t work on phones”"
                description="We design mobile-first so your customers find you anywhere."
              />
              <OurSolutionSubItem
                title="“Customers bounce quickly”"
                description="We create fast, clean, engaging designs to hold attention."
              />
              <OurSolutionSubItem
                title="“No one’s calling or buying”"
                description="We implement clear calls-to-action that convert."
              />
              <OurSolutionSubItem
                title="“My site looks old”"
                description="We modernize your brand with sleek, timeless design."
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col gap-16 container mx-auto p-4 my-20">
        <div className="text-center flex flex-col gap-8">
          <span className="text-indigo-950 font-[650] text-3xl 2xl:text-4xl">
            Why Choose Us
          </span>
          <div className="flex flex-col gap-3.5 text-black text-xl xl:text-2xl 2xl:text-3xl  2xl:leading-10 font-medium">
            <p>
              We Know What Small Businesses Need—Because We Build for You, Not
              for Ourselves.
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 gap-7">
          <WhyChooseUsItem
            title="Straightforward Consulting"
            description="No tech talk, just honest guidance that works"
            icon="/why-choose-us-1.png"
          />
          <WhyChooseUsItem
            title="Mobile Optimization"
            description="We make sure your site works perfectly on phones"
            icon="/why-choose-us-2.png"
          />
          <WhyChooseUsItem
            title="Blazing Fast Performance"
            description="Customers don’t wait. We make sure your site doesn’t either"
            icon="/why-choose-us-3.png"
          />
          <WhyChooseUsItem
            title="Clear Calls-to-Action"
            description="Turn traffic into calls, appointments, and sales"
            icon="/why-choose-us-4.png"
          />
          <WhyChooseUsItem
            title="Custom Design for You"
            description="We don’t use templates unless you ask us to"
            icon="/why-choose-us-5.png"
          />
          <WhyChooseUsItem
            title="Ongoing Support"
            description="We’re here if you need updates, fixes, or new features later"
            icon="/why-choose-us-6.png"
          />
        </div>
      </section>
      <section className="flex flex-col gap-16 container mx-auto p-4 my-20">
        <div className="text-center flex flex-col gap-8">
          <span className="text-indigo-950 font-[650] text-3xl 2xl:text-4xl">
            Unleash Your Potential
          </span>
          <div className="flex flex-col gap-3.5 text-black text-xl xl:text-2xl 2xl:text-3xl  2xl:leading-10 font-medium">
            <p>
              We understand your pain points and provide innovative solutions
              that drive real results
            </p>
          </div>
        </div>
        <div className="grid xl:grid-cols-3 gap-6 xl:gap-7 2xl:gap-10">
          <UnleashYourPotentialItem
            title="Boost Conversions with a Modern Design"
            description="Attract more leads with a sleek, modern design. Our redesigns boost conversions by 30% with better visuals and navigation."
            icon="/unleash-your-potential-1.png"
            bgImage="/unleash-your-potential-bg-1.png"
            bgObjectStyle="contain"
          />
          <UnleashYourPotentialItem
            title="Drive More Traffic with Speed and SEO"
            description="Get found faster with optimized speed and SEO. We cut load times and improve rankings to draw more visitors."
            icon="/unleash-your-potential-2.png"
            bgImage="/unleash-your-potential-bg-2.png"
            bgObjectStyle="contain"
          />
          <UnleashYourPotentialItem
            title="Engage Customers with Mobile Optimization"
            description="Reach more customers with a mobile-friendly site. We ensure seamless performance on all devices, capturing 62% of mobile traffic."
            icon="/unleash-your-potential-3.png"
            bgImage="/unleash-your-potential-bg-3.png"
            bgObjectStyle="cover"
          />
        </div>
      </section>
    </main>
  );
}
