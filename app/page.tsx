import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Button>
        Toggle Theme
      </Button>
      <Button className="text-xl text-white">
        <Link href={"/dashboard"}>
          dashboard
        </Link>
      </Button>
    </div>
  );
}
