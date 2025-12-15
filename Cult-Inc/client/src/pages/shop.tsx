import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const products = [
  {
    id: 1,
    title: "學業赦免券",
    subtitle: "Academic Pardon",
    price: "NT$ 500",
    description: "期末考炸裂？教授太機車？購買此券，心靈獲得平靜，雖然GPA不會變高，但你會覺得無所謂。",
    tags: ["學生必備", "All Pass(心靈)", "教授退散"],
    color: "border-blue-500/50"
  },
  {
    id: 2,
    title: "職場贖罪券",
    subtitle: "Corporate Absolution",
    price: "NT$ 999",
    description: "錯頻群組？遲到早退？老闆的咆哮如過眼雲煙。購買此券，恢復社畜的尊嚴。",
    tags: ["社畜救星", "水逆退散", "加薪(夢裡)"],
    color: "border-red-500/50"
  },
  {
    id: 3,
    title: "情感重置券",
    subtitle: "Relationship Clean Slate",
    price: "NT$ 1,314",
    description: "忘記紀念日？說錯話？這張券不能幫你挽回感情，但能讓你原諒自己是個渣男/女。",
    tags: ["單身狗", "海王海后", "原諒自己"],
    color: "border-pink-500/50"
  },
  {
    id: 4,
    title: "拖延症免罪金牌",
    subtitle: "Procrastination Pass",
    price: "NT$ 300",
    description: "明天再做？沒關係，神原諒你。這張金牌讓你安心地滑手機直到天亮。",
    tags: ["明日復明日", "懶癌末期", "躺平"],
    color: "border-yellow-500/50"
  },
  {
    id: 5,
    title: "暴食豁免權",
    subtitle: "Gluttony Immunity",
    price: "NT$ 666",
    description: "減肥是明天的事。吃了這頓大餐，你的罪惡感將被這張券吸收。卡路里不包含在內。",
    tags: ["吃貨", "宵夜", "減肥失敗"],
    color: "border-green-500/50"
  },
  {
    id: 6,
    title: "全能大赦免 (VIP)",
    subtitle: "Grand Absolution VIP",
    price: "NT$ 9,999",
    description: "包含以上所有罪行的赦免。成為本教的高級會員，享受至高無上的心靈平靜。",
    tags: ["尊爵不凡", "財富自由", "功德無量"],
    color: "border-primary"
  }
];

export default function Shop() {
  const { toast } = useToast();

  const handleBuy = (title: string) => {
    toast({
      title: "贖罪成功！ (Absolution Granted)",
      description: `您已購買「${title}」。您的罪孽已減輕 (您的荷包也是)。`,
      duration: 3000,
    });
  };

  return (
    <Layout>
       <div className="container mx-auto px-4 py-20">
         <div className="text-center mb-16">
           <h1 className="font-display text-5xl md:text-6xl text-primary mb-6">贖罪商店</h1>
           <p className="font-mono text-muted-foreground text-lg max-w-2xl mx-auto">
             Indulgence Shop<br/>
             請選擇您需要的贖罪券。所有收益將用於維持本教運作（以及我們的宵夜）。
           </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {products.map((product) => (
             <Card key={product.id} className={`bg-card/40 backdrop-blur-sm border-2 ${product.color} hover:bg-card/60 transition-all duration-300 hover:-translate-y-2 group`}>
               <CardHeader>
                 <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="font-display text-2xl mb-1">{product.title}</CardTitle>
                      <CardDescription className="font-mono text-xs uppercase tracking-wider">{product.subtitle}</CardDescription>
                    </div>
                    <span className="font-mono text-xl font-bold text-primary">{product.price}</span>
                 </div>
               </CardHeader>
               <CardContent>
                 <p className="text-muted-foreground font-body leading-relaxed mb-6 min-h-[80px]">
                   {product.description}
                 </p>
                 <div className="flex flex-wrap gap-2">
                   {product.tags.map(tag => (
                     <Badge key={tag} variant="secondary" className="font-mono text-xs bg-muted text-muted-foreground group-hover:bg-primary/20 group-hover:text-primary transition-colors">
                       #{tag}
                     </Badge>
                   ))}
                 </div>
               </CardContent>
               <CardFooter>
                 <Button className="w-full font-display text-lg tracking-widest bg-background hover:bg-primary hover:text-primary-foreground border border-input group-hover:border-primary transition-all" onClick={() => handleBuy(product.title)}>
                   購買救贖
                 </Button>
               </CardFooter>
             </Card>
           ))}
         </div>
       </div>
    </Layout>
  );
}
