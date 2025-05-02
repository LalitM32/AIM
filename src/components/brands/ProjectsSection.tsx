import React, { useState } from 'react';
import { ArrowRight, Brain, Cpu, Globe } from 'lucide-react';
import { projects } from '../../data/brands';
import ProjectCard from './ProjectCard';
import { cn } from '../../lib/utils';

type ProjectCategory = 'All' | 'AI Automation' | 'SaaS' | 'Web Development';

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const categories: { value: ProjectCategory; icon: React.ReactNode; label: string }[] = [
    { value: 'All', icon: <Cpu className="w-4 h-4" />, label: 'All Projects' },
    { value: 'AI Automation', icon: <Brain className="w-4 h-4" />, label: 'AI Automation' },
    { value: 'SaaS', icon: <ArrowRight className="w-4 h-4" />, label: 'SaaS' },
    { value: 'Web Development', icon: <Globe className="w-4 h-4" />, label: 'Web Development' }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?q=80&w=1932&auto=format&fit=crop')] 
                      bg-cover bg-center opacity-5" />
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl mb-6">Our Innovative Projects</h2>
          <p className="text-cream/80 max-w-2xl mx-auto">
            Transforming businesses through cutting-edge AI automations, powerful SaaS solutions, 
            and expertly crafted web experiences.
          </p>
        </div>

        <div className="flex justify-center mb-10 overflow-x-auto pb-2">
          <div className="inline-flex bg-deep-black/30 rounded-full p-1.5 border border-cream/10">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeCategory === category.value 
                    ? "bg-cream text-deep-black" 
                    : "text-cream/70 hover:text-cream/90"
                )}
                aria-label={`Filter by ${category.label}`}
              >
                {category.icon}
                <span className="whitespace-nowrap">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id}
              name={project.name}
              description={project.shortDescription}
              image={project.image}
              category={project.category}
              technologies={project.technologies}
              demoUrl={project.demoUrl}
              caseStudyUrl={project.caseStudyUrl}
            />
          ))}
        </div>
        
        {/* Add empty state when no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="bg-deep-black/30 border border-cream/10 rounded-xl p-8 text-center">
            <p className="text-cream/70">No projects found in this category. Please try another filter.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <a 
            href="/all-projects" 
            className="inline-flex items-center gap-2 text-cream bg-cream/10 hover:bg-cream/20 px-6 py-3 rounded-full transition-all duration-300 font-medium"
            aria-label="View all projects"
          >
            View All Projects
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
} 