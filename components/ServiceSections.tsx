import React from 'react';
import { Heart, MessageCircle, Send, MoreHorizontal } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  ask: string;
  fix: string;
  win: string;
}

interface FeedItem {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
}

const CaseStudyBox: React.FC<CaseStudyProps> = ({ title, ask, fix, win }) => (
  <div className="mt-6 p-4 md:p-6 bg-black/60 rounded-xl border border-white/10 font-mono text-xs md:text-sm relative overflow-hidden group/box hover:border-gadget-accent/30 transition-colors">
    <div className="absolute top-0 left-0 w-full h-1 bg-gadget-accent/30"></div>
    <div className="mb-2 md:mb-4 flex items-center gap-2">
      <div className="w-2 h-2 bg-gadget-accent animate-pulse"></div>
      <h4 className="font-bold text-gadget-accent uppercase tracking-widest text-[10px] md:text-xs">REAL WORLD: {title}</h4>
    </div>
    <div className="space-y-1 md:space-y-2 text-gray-400">
      <p><span className="text-white font-bold uppercase mr-2">The Ask:</span> {ask}</p>
      <p><span className="text-white font-bold uppercase mr-2">The Fix:</span> {fix}</p>
      <p><span className="text-white font-bold uppercase mr-2">The Win:</span> {win}</p>
    </div>
  </div>
);

const PhoneFeed: React.FC<{ items: FeedItem[] }> = ({ items }) => {
  return (
    <div className="relative mx-auto w-[280px] h-[500px] md:w-[320px] md:h-[600px] bg-black rounded-[2.5rem] border-[6px] border-[#2a2d33] shadow-2xl overflow-hidden ring-1 ring-white/10 transform transition-transform duration-700 hover:scale-[1.02] hover:-rotate-1">
      {/* Notch */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#2a2d33] rounded-b-xl z-30 flex justify-center items-center">
         <div className="w-12 h-1 bg-black/50 rounded-full"></div>
      </div>

      {/* Feed Container */}
      <div className="w-full h-full overflow-y-scroll snap-y snap-mandatory no-scrollbar scroll-smooth">
        {items.map((item) => (
          <div key={item.id} className="relative w-full h-full snap-start bg-[#0f1113] flex flex-col shrink-0">
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 p-4 pt-8 z-20 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
               <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gadget-accent/20 border border-gadget-accent flex items-center justify-center">
                    <div className="w-4 h-4 bg-gadget-accent rounded-full"></div>
                  </div>
                  <span className="text-xs font-bold text-white drop-shadow-md">posaidon_ai</span>
               </div>
               <MoreHorizontal size={20} className="text-white" />
            </div>

            {/* Media */}
            <div className="relative w-full h-full">
              <img src={item.imageUrl} alt="Feed Item" className="w-full h-full object-cover" />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
            </div>

            {/* Interaction Sidebar (Right) */}
            <div className="absolute bottom-24 right-4 flex flex-col gap-6 items-center z-20">
               <div className="flex flex-col items-center gap-1">
                 <Heart className="text-white hover:text-red-500 hover:fill-red-500 transition-colors cursor-pointer" size={26} />
                 <span className="text-[10px] font-bold text-white">{item.likes}</span>
               </div>
               <div className="flex flex-col items-center gap-1">
                 <MessageCircle className="text-white hover:text-gadget-accent transition-colors cursor-pointer" size={26} />
                 <span className="text-[10px] font-bold text-white">42</span>
               </div>
               <Send className="text-white hover:text-gadget-accent transition-colors cursor-pointer" size={26} />
            </div>

            {/* Caption Area (Bottom) */}
            <div className="absolute bottom-0 left-0 right-0 p-5 pb-8 z-20">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-0.5 rounded bg-white/10 backdrop-blur-md border border-white/10 text-[10px] text-white font-mono">
                  AI_GENERATED
                </span>
              </div>
              <p className="text-sm text-white/90 font-light leading-snug pr-12">
                <span className="font-bold mr-2">posaidon_ai</span>
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/20 rounded-full z-30"></div>
    </div>
  );
};

const ServiceSection = ({ id, number, title, subtitle, description, caseStudy, feedItems, isEven }: any) => {
  return (
    <section id={id} className="h-screen w-full snap-start snap-always flex items-center justify-center relative z-10 overflow-hidden py-12 md:py-0">
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-8 lg:gap-20 h-full`}>
          
          {/* Text Side */}
          <div className="flex-1 w-full text-center lg:text-left flex flex-col justify-center">
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-2 md:mb-4 opacity-50">
               <span className="font-mono text-gadget-accent text-lg">/{number}</span>
               <div className="h-px w-12 bg-white/20"></div>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-2 md:mb-4">
              {title}
            </h3>
            <p className="text-sm md:text-lg font-mono font-bold text-gadget-accent uppercase tracking-widest mb-4 md:mb-6">
              {subtitle}
            </p>

            <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-6 max-w-xl mx-auto lg:mx-0">
              {description}
            </p>

            <CaseStudyBox {...caseStudy} />
          </div>

          {/* Visual Side: Phone Feed - Hidden on very small height screens if needed, but optimized to fit */}
          <div className="flex-none relative group hidden md:block lg:block">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[650px] bg-gadget-accent/5 blur-[50px] rounded-full pointer-events-none group-hover:bg-gadget-accent/10 transition-colors duration-700"></div>
            
            <PhoneFeed items={feedItems} />
          </div>

        </div>
      </div>
    </section>
  );
};

export const Services: React.FC = () => {
  const services = [
    {
      id: "service-content",
      number: "01",
      title: "Content",
      subtitle: "Scroll-Stopping Visuals",
      description: "We skip the travel, the permits, and the casting calls. Using generative video and inpainting, we create campaign-ready assets that look expensive but cost less.",
      caseStudy: {
        title: "The Impossible Location Shoot",
        ask: "A luxury brand needed a global campaign in Tokyo, NYC, and Berlin.",
        fix: "We virtually placed the product into hyper-realistic environments.",
        win: "Campaign launched in 4 days vs. 2 months."
      },
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop", caption: "Virtual production in Tokyo. No flights booked. 🇯🇵✨ #AIProduction #FutureOfFilm", likes: "2.4k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", caption: "Neo-Tokyo vibes generated in 30 mins. 🕹️", likes: "1.8k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1614726365723-49faaa5bf3c6?q=80&w=1000&auto=format&fit=crop", caption: "Product placement in a zero-g environment. 🚀", likes: "3.1k" },
      ]
    },
    {
      id: "service-avatars",
      number: "02",
      title: "Avatars",
      subtitle: "Clone Yourself (Literally)",
      description: "Your leadership team is your best asset, but they can't be in ten meetings at once. We build photorealistic digital twins and voice clones for personalized updates.",
      caseStudy: {
        title: "The Multilingual CEO",
        ask: "A CEO needed to send personalized updates to clients in the US, Germany, and the Middle East.",
        fix: "AI translated and lip-synced the video into English, German, and Arabic.",
        win: "One 5-minute session fueled a whole quarter of content."
      },
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", caption: "Just finished 40 meetings in 5 minutes. My digital twin is working overtime. 🤖💼 #AIClone", likes: "5.2k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", caption: "Speaking German, Japanese, and French fluidly. I only speak English. 🌍", likes: "4.1k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop", caption: "Training video generated from text. No camera crew needed. 📹", likes: "1.9k" },
      ]
    },
    {
      id: "service-seo",
      number: "03",
      title: "SEO / GEO",
      subtitle: "Own the Answer",
      description: "Old SEO is dying. Users are asking AI for answers. We structure your data so 'Answer Engines' cite you as the authority, not your competitors.",
      caseStudy: {
        title: "The Answer Engine Authority",
        ask: "A niche agency wasn't showing up in AI search summaries.",
        fix: "Rebuilt content hierarchy to be 'machine-readable' and entity-rich.",
        win: "Moved from Page 2 to #1 cited source in AI answers."
      },
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1558494949-efc52728101c?q=80&w=1000&auto=format&fit=crop", caption: "Structuring data for the Neural Web. Are you visible to the AIs? 🧠🌐 #SEO2.0", likes: "892" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", caption: "Graph databases are the new keywords. Connecting the dots. 🔗", likes: "1.2k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", caption: "Global entity recognition confirmed. 🌎", likes: "2.5k" },
      ]
    },
    {
      id: "service-custom",
      number: "04",
      title: "Custom",
      subtitle: "Kill the Bottlenecks",
      description: "Every business has that one manual task that eats up the budget. We build custom AI pipelines (ComfyUI workflows) to automate your specific creative drudgery.",
      caseStudy: {
        title: "The E-Commerce Asset Pipeline",
        ask: "An e-comm brand needed lifestyle shots for 5,000+ SKUs.",
        fix: "Built a custom pipeline to auto-composite products into on-brand scenes.",
        win: "Catalog update finished in hours, not weeks."
      },
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", caption: "ComfyUI node graph executing 5000 images per hour. Efficiency is beautiful. ⚙️⚡ #Automation", likes: "3.3k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", caption: "Python scripts doing the heavy lifting. 🐍", likes: "2.1k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", caption: "Server racks humming. Your creative team is sleeping, the AI is working. 🌙", likes: "1.5k" },
      ]
    }
  ];

  return (
    <>
      {services.map((service, index) => (
        <ServiceSection key={service.id} {...service} isEven={index % 2 !== 0} />
      ))}
    </>
  );
};