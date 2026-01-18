import React from 'react';
import { Heart, MessageCircle, Send, MoreHorizontal } from 'lucide-react';

interface FeedItem {
  id: number;
  imageUrl: string;
  caption: string;
  likes: string;
}

const CapabilitiesTags: React.FC<{ tags: string[] }> = ({ tags }) => (
  <div className="mt-8">
    <div className="flex items-center gap-2 mb-4 opacity-70">
       <div className="w-1.5 h-1.5 bg-gadget-accent rounded-full animate-pulse"></div>
       <h4 className="font-mono text-[10px] font-bold text-gadget-label uppercase tracking-[0.2em]">System_Capabilities</h4>
    </div>
    <div className="flex flex-wrap gap-3">
      {tags.map((tag, i) => (
        <span key={i} className="px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 text-[10px] md:text-xs font-mono text-gray-300 uppercase tracking-wide hover:text-gadget-accent hover:border-gadget-accent/40 hover:bg-gadget-accent/5 transition-all cursor-default">
          {tag}
        </span>
      ))}
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

const ServiceSection = ({ id, number, title, subtitle, subHeadline, description, tags, feedItems, isEven }: any) => {
  return (
    <section id={id} className="h-screen w-full snap-start snap-always flex items-center justify-center relative z-10 overflow-hidden py-12 md:py-0 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
        <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center justify-center gap-8 lg:gap-20 h-full`}>
          
          {/* Text Side */}
          <div className="flex-1 w-full text-center lg:text-left flex flex-col justify-center">
            <div className="flex items-center gap-4 justify-center lg:justify-start mb-2 md:mb-4 opacity-50">
               <span className="font-mono text-gadget-accent text-lg">/{number}</span>
               <div className="h-px w-12 bg-white/20"></div>
            </div>
            
            <h3 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tight mb-2 md:mb-3">
              {title}
            </h3>
            <p className="text-sm md:text-lg font-mono font-bold text-gadget-accent uppercase tracking-widest mb-2">
              {subtitle}
            </p>
            <p className="text-white md:text-xl font-medium mb-6 italic opacity-90">
              {subHeadline}
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base mb-2 max-w-xl mx-auto lg:mx-0 font-light">
              {description}
            </p>

            <CapabilitiesTags tags={tags} />
          </div>

          {/* Visual Side: Phone Feed */}
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
      subtitle: "Hybrid Creative Engine",
      subHeadline: "The efficiency of AI. The soul of a human.",
      description: "Pure AI feels robotic. Pure human is too slow. We use a Hybrid AI Approach that combines generative speed with human strategy. From viral video concepts to high-converting ad creatives, we build assets designed to drive organic traffic and lower your cost-per-lead.",
      tags: [
        "Viral Image & Video Generation",
        "AI Advertising Campaigns",
        "Checklists & Guides",
        "Format Optimization"
      ],
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1000&auto=format&fit=crop", caption: "Hybrid workflow in action. Human strategy x AI execution. 🧠⚡ #CreativeEngine", likes: "2.4k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop", caption: "Campaign assets generated and optimized in record time. 🚀", likes: "1.8k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1614726365723-49faaa5bf3c6?q=80&w=1000&auto=format&fit=crop", caption: "Visuals that stop the scroll. Built for conversion.", likes: "3.1k" },
      ]
    },
    {
      id: "service-avatars",
      number: "02",
      title: "Avatars",
      subtitle: "Identity Scaling",
      subHeadline: "Personal connection, automated.",
      description: "Whether it’s duplicating your CEO for global communication or creating AI UGC Avatars for social proof, we remove the camera from the equation. We build digital personas that maintain consistency, allowing you to produce endless video content without endless filming days.",
      tags: [
        "AI UGC Avatars",
        "Multilingual Lip-Sync",
        "Executive Digital Twins",
        "Instant Video Production"
      ],
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", caption: "My digital twin handling the weekly update. 100% automated. 🤖✨ #IdentityScaling", likes: "5.2k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop", caption: "Fluent in 5 languages instantly. Breaking barriers. 🌍", likes: "4.1k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop", caption: "Consistent brand voice, zero studio time.", likes: "1.9k" },
      ]
    },
    {
      id: "service-seo",
      number: "03",
      title: "SEO / GEO",
      subtitle: "Generative Authority",
      subHeadline: "Rank in Search. Be Cited by AI.",
      description: "We don't just chase Google rankings; we optimize for the \"Answer Engines\" (ChatGPT, Gemini, Perplexity). By implementing NLP (Natural Language Processing) and NER (Named Entity Recognition), we ensure your brand is understood by algorithms as the authoritative source in your niche.",
      tags: [
        "Generative Engine Optimization (GEO)",
        "Niche Analysis & Citations",
        "Statistical Data Enrichment",
        "Long-Tail Keyword Strategy"
      ],
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1558494949-efc52728101c?q=80&w=1000&auto=format&fit=crop", caption: "Optimizing for the Answer Engines. Are you being cited? 🧠🌐 #GEO", likes: "892" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000&auto=format&fit=crop", caption: "Structured data that algorithms love. 🔗", likes: "1.2k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop", caption: "Dominate the new search landscape. 🌎", likes: "2.5k" },
      ]
    },
    {
      id: "service-custom",
      number: "04",
      title: "Custom",
      subtitle: "Revenue Architecture",
      subHeadline: "Systems that lower costs and increase repeats.",
      description: "Traffic is useless if it doesn't convert. We redefine your CRM with AI to automate repeat sales and optimize your Conversion Rate (CRO). From direct lead generation focused on CPA (Cost Per Action) to custom workflows, we build the backend systems that turn attention into revenue.",
      tags: [
        "CRM AI Automation",
        "CPA/CPL Marketing",
        "Conversion Rate Optimization",
        "Direct Lead Generation"
      ],
      feedItems: [
        { id: 1, imageUrl: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop", caption: "Automated workflows driving revenue while you sleep. ⚙️⚡ #RevenueArch", likes: "3.3k" },
        { id: 2, imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1000&auto=format&fit=crop", caption: "Optimization protocols active. Efficiency increased by 300%. 📈", likes: "2.1k" },
        { id: 3, imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop", caption: "Turning traffic into loyal customers automatically.", likes: "1.5k" },
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