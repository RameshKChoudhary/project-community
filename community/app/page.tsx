import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  return (
    <div>
      <Badge variant="outline">Join thousands of developers sharing their projects</Badge>
      <h1>Share what you&apos;ve Built , Discover what&apos;s Launching</h1>
      <p>
        Discover and share the latest in tech, design, and more. Join our
        community of makers and innovators.
      </p>
      <Button variant="outline">Share Your Project</Button>
      <Button variant="outline">Explore Projects</Button>
    </div>
  );
}
