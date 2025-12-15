import Layout from "@/components/layout";
import { Separator } from "@/components/ui/separator";

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-20 max-w-4xl">
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl md:text-6xl text-primary mb-6">關於本教</h1>
          <p className="font-mono text-muted-foreground text-lg">Group 6 | 研究與開發部門</p>
        </div>

        <div className="space-y-16">
          {/* Section 1 */}
          <section className="prose prose-invert prose-lg max-w-none">
            <h2 className="font-display text-3xl text-foreground border-l-4 border-primary pl-4 mb-6">摘要與動機</h2>
            <p className="text-muted-foreground font-body leading-loose">
              本企劃旨在透過多角度的研究與展示方式，深入探討中世紀天主教會所推行的「贖罪券」制度之起源與運作方式。
              我們以輕鬆簡要的方式利用贖罪券的特性，加上現代社會人人普遍的焦慮，製作有關贖罪為題的相關製作，
              成為現代人們新的寄託心靈的工具。
            </p>
            <p className="text-muted-foreground font-body leading-loose mt-4">
              在現代社會中，部分宗教組織過度依賴捐獻，甚至以「金錢換取庇佑」的方式維繫信仰實踐。
              此現象與中世紀教會販售贖罪券的歷史極為相似。因此，本企劃透過建構一個具「贖罪券再販售」
              特色的虛構宗教模型，以戲仿與反諷方式揭露部分現代宗教的不合理捐獻行為。
            </p>
          </section>

          <Separator className="bg-primary/20" />

          {/* Section 2 */}
          <section>
            <h2 className="font-display text-3xl text-foreground border-l-4 border-primary pl-4 mb-8">研究目的</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="bg-card p-6 border border-border/50 rounded-sm">
                <span className="text-6xl font-display text-primary/20 absolute -mt-4 -ml-2">01</span>
                <h3 className="font-bold text-xl mb-4 relative z-10">起源與關聯</h3>
                <p className="text-muted-foreground font-body">
                  探討贖罪券的起源與發展，結合Z世代的學業、工作壓力，進而產生共鳴。
                </p>
              </div>
              <div className="bg-card p-6 border border-border/50 rounded-sm">
                <span className="text-6xl font-display text-primary/20 absolute -mt-4 -ml-2">02</span>
                <h3 className="font-bold text-xl mb-4 relative z-10">反思信仰</h3>
                <p className="text-muted-foreground font-body">
                  通過了解中世紀天主教販賣的赦罪憑證，反思信仰到底給我們帶來了什麼。
                </p>
              </div>
              <div className="bg-card p-6 border border-border/50 rounded-sm">
                <span className="text-6xl font-display text-primary/20 absolute -mt-4 -ml-2">03</span>
                <h3 className="font-bold text-xl mb-4 relative z-10">反諷創作</h3>
                <p className="text-muted-foreground font-body">
                  創立新興邪教，重新販售贖罪券，達到反諷某些宗教的不合理捐獻行為。
                </p>
              </div>
            </div>
          </section>

          <Separator className="bg-primary/20" />

          {/* Section 3 */}
          <section className="bg-card/50 p-8 rounded-lg border border-primary/10">
            <h2 className="font-display text-3xl text-primary mb-6 text-center">組員名單</h2>
            <div className="flex flex-wrap justify-center gap-4 text-center font-mono text-muted-foreground">
              <span className="bg-background px-4 py-2 rounded border border-border">黃柏浩</span>
              <span className="bg-background px-4 py-2 rounded border border-border">鄭芓韓</span>
              <span className="bg-background px-4 py-2 rounded border border-border">吳慈琇</span>
              <span className="bg-background px-4 py-2 rounded border border-border">柳俊名</span>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
