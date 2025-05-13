
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  return (
    <div className="page-transition min-h-[calc(100vh-4rem)]">
      <div className="section-container flex flex-col justify-center min-h-[calc(100vh-12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Kobulov Azizbek
            </h1>
            <h2 className="text-2xl sm:text-3xl text-primary font-semibold">
              Backend NodeJS Developer
            </h2>
            <p className="text-muted-foreground text-lg">
              Experienced backend developer specialized in NodeJS with a strong focus on building robust
              and scalable applications. Based in Tashkent, Uzbekistan.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link to="/contact">
                  Contact Me
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/experience">View Experience</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {["NodeJS", "JavaScript", "TypeScript", "PostgreSQL", "REST API"].map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative h-80 w-80 rounded-full overflow-hidden border-4 border-primary/20">
              <img
                src="/lovable-uploads/c466c900-cfdb-4b15-9b73-568a1691d628.png"
                alt="Kobulov Azizbek"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
