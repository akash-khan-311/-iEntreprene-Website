import BlurText from "@/components/ui/BlurText";



export default function Home() {
  return (
    <>
    <h1 className="text-4xl">Akash Khan</h1>
    <BlurText text="Hi , This is Akash Khan From Bangladesh"
    delay={200}
    animateBy="words"
    direction="top"
    className="text-5xl font-semibold"
    
    />
    
    </>
  );
}
