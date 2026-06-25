import { Button } from "@/components/ui/button";
import Link from "next/link";
import  {ThemeChange} from "@/components/theme-buton"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-background relative">
      <div className="absolute top-6 right-6">
        <ThemeChange />
      </div>

      <div className="text-center max-w-2xl space-y-4 mb-8">
        <h1 className="text-4xl font-extrabold lg:text-5xl">
          Welcome to the Admin Portal
        </h1>
        <p className="text-xl text-muted-foreground">
          Please use the button below to access the management dashboard.
        </p>
      </div>

      <Button asChild size="lg" className="px-8">
        <Link href="/dashboard">
          Go to Dashboard
        </Link>
      </Button>
    </div>
  );
}
