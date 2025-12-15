import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/golden_glowing_indulgence_ticket_in_dark_void_with_digital_glitches.png";
import { Link } from "wouter";
import { Scroll, ShieldCheck, Zap } from "lucide-react";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="JJS Cult Hero Cover" 
            className="w-full h-full object-cover opacity-60 mix-blend-overlay" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/40 to-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--background)_100%)] opacity-80" />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
            className="flex flex-col items-center gap-6"
          >
            <span className="font-mono text-primary text-sm md:text-base tracking-[0.5em] uppercase border border-primary/30 px-6 py-2 rounded-full bg-background/80 backdrop-blur-md shadow-[0_0_15px_rgba(255,215,0,0.1)]">
              Digital Absolution System
            </span>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold text-foreground leading-none tracking-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.8)]">
              赦 就 教
            </h1>
            <span className="text-3xl md:text-5xl lg:text-6xl text-primary/80 italic font-light font-display tracking-widest block drop-shadow-lg">
                JJS Cult Inc.
            </span>
            <p className="max-w-2xl text-lg md:text-xl text-muted-foreground font-body leading-relaxed my-8 drop-shadow-md">
              在這個充滿焦慮的時代，我們提供最直接的救贖。<br/>
              無需告解，無需苦修，只需點擊。<br/>
              <span className="text-primary/60">中世紀的智慧，現代人的解藥。</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-mono tracking-wider text-lg px-8 py-6 h-auto rounded-none border border-primary shadow-[0_0_20px_rgba(255,215,0,0.2)] hover:shadow-[0_0_30px_rgba(255,215,0,0.4)] transition-all">
                <Link href="/shop">
                  購買贖罪券 (Buy Indulgence)
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm border-primary/50 text-primary hover:bg-primary/10 font-mono tracking-wider text-lg px-8 py-6 h-auto rounded-none hover:border-primary transition-all">
                <Link href="/about">
                  了解更多 (Learn More)
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-card border-y border-border/20 relative">
         <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
             <div>
               <h2 className="font-display text-4xl text-primary mb-6">現代贖罪，即刻生效</h2>
               <p className="text-muted-foreground text-lg leading-loose mb-6 font-body">
                 贖罪券制度是中世紀歐洲宗教史上最具爭議性的現象之一。然而，在現代社會，我們面臨著新的「罪」：
                 拖延症、社群焦慮、卡債、已讀不回。
               </p>
               <p className="text-muted-foreground text-lg leading-loose font-body">
                 本企劃旨在透過戲仿與反諷，重新檢視「金錢換取心安」的機制。
                 我們不是邪教（大概），我們只是提供您心靈的慰藉。
               </p>
             </div>
             <div className="grid grid-cols-1 gap-6">
                {[
                  { icon: Scroll, title: "歷史重構", desc: "源自馬丁路德時期的古老智慧，結合現代科技。" },
                  { icon: ShieldCheck, title: "心靈保障", desc: "購買即赦免。不管是學業還是職場，通通原諒。" },
                  { icon: Zap, title: "快速便捷", desc: "比告解室更快，比心理諮商更便宜（誤）。" }
                ].map((item, i) => (
                  <Card key={i} className="bg-background/50 border-primary/20 hover:border-primary/50 transition-colors group">
                    <CardContent className="flex items-start gap-4 p-6">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                        <item.icon className="w-6 h-6 text-primary shrink-0" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground font-mono text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
             </div>
           </div>
         </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 text-center container mx-auto px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 -z-10" />
        <h2 className="font-display text-5xl md:text-6xl mb-8">還在等什麼？</h2>
        <p className="font-mono text-primary text-xl mb-12">您的焦慮，我們買單。</p>
        <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-display text-2xl px-12 py-8 h-auto rounded-sm shadow-[0_0_30px_rgba(220,38,38,0.3)] hover:shadow-[0_0_50px_rgba(220,38,38,0.5)] transition-all hover:scale-105 duration-300">
          <Link href="/shop">
            立即贖罪
          </Link>
        </Button>
      </section>
    </Layout>
  );
}
