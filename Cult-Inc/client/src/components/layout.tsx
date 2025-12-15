import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import logo from "@assets/generated_images/minimalist_gold_geometric_cult_logo_on_black.png";
import { Instagram, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navItems = [
    { name: "首頁 (Home)", path: "/" },
    { name: "關於本教 (About)", path: "/about" },
    { name: "贖罪商店 (Shop)", path: "/shop" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-body selection:bg-primary selection:text-primary-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="JJS Cult Logo" 
              className="h-10 w-10 object-contain group-hover:opacity-80 transition-opacity invert" 
            />
            <span className="font-display font-bold text-xl tracking-widest text-primary group-hover:text-primary/80 transition-colors">
              JJS CULT INC.
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path} className={`text-sm font-mono tracking-wider uppercase hover:text-primary transition-colors ${location === item.path ? "text-primary border-b border-primary" : "text-muted-foreground"}`}>
                {item.name}
              </Link>
            ))}
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-mono rounded-none">
              <a href="https://www.instagram.com/jjs_cult.inc/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-4 w-4" /> 追蹤 IG
              </a>
            </Button>
          </div>

          {/* Mobile Nav */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6 text-primary" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-card border-l border-primary/20 w-[300px] p-0">
               <div className="flex flex-col h-full p-6">
                 <div className="flex items-center justify-between mb-8">
                   <span className="font-display font-bold text-xl text-primary">MENU</span>
                 </div>
                 <div className="flex flex-col gap-6">
                   {navItems.map((item) => (
                     <Link 
                       key={item.path} 
                       href={item.path}
                       className={`text-lg font-mono tracking-wider uppercase hover:text-primary transition-colors ${location === item.path ? "text-primary pl-2 border-l-2 border-primary" : "text-muted-foreground"}`}
                       onClick={() => setIsOpen(false)}
                     >
                       {item.name}
                     </Link>
                   ))}
                   <a 
                     href="https://www.instagram.com/jjs_cult.inc/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center gap-2 text-lg font-mono tracking-wider text-muted-foreground hover:text-primary mt-4"
                   >
                     <Instagram className="h-5 w-5" /> 追蹤 IG
                   </a>
                 </div>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card py-12 mt-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="font-display font-bold text-lg text-primary tracking-widest">JJS CULT INC. | 赦就教</span>
            <p className="text-sm text-muted-foreground font-mono max-w-md text-center md:text-left">
              現代人的心靈寄託。贖罪券再販售計畫。<br/>
              © 2025 Group 6. All Wrongs Reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <a href="https://www.instagram.com/jjs_cult.inc/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
