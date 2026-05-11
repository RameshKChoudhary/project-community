import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/dist/client/link";
import { ArrowRightIcon, EyeIcon, RocketIcon, SparkleIcon, UsersIcon } from "lucide-react";
import StatsCard from "./stats-card";

const LiveBadge = () => {
  return (
    <Badge
      variant="outline"
      className="px-4 py-2 mb-8 text-sm backdrop-blur-sm"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
      </span>
      <span className="text-muted-foreground">
        Join thousands of developers sharing their projects
      </span>
    </Badge>
  );
};

const statsData=[
  {
    icon: RocketIcon, value: "2.5k+", label: "Projects Shared"
  },
  {
    icon: UsersIcon, value: "10k+", label: "Active Creators",
    hasBorder: true
  },
  {
    icon: EyeIcon, value: "50k+", label: "Monthly Visitors"
  }
]

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-background via-background to-muted/20 ">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center lg:py-24 py-12 text-center">
          <LiveBadge />
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 max-w-5xl">
            Share what you&apos;ve Built , Discover what&apos;s Launching
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
            Discover and share the latest in tech, design, and more. Join our
            community of makers and innovators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
            // asChild 
            size="lg" className="text-base px-8 shadow-lg">
              <Link href="/submit">
                <SparkleIcon className="size-5" />
                Share Your Project
              </Link>
            </Button>
            <Button
              // asChild will check later if we need to forward ref to Link component
              size="lg"
              className="text-base px-8 shadow-lg"
              variant="secondary"
            >
              <Link href="/explore">
                Explore Projects
                <ArrowRightIcon className="size-5" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 grid-8 sm:gap-12 max-w-2xl w-full">
          {statsData.map((stat, index) => (
            <StatsCard key={stat.label}{...stat} />
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
