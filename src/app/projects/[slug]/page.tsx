import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjects } from "@/data/projects";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import "./casestudy.css";

export async function generateStaticParams() {
  const projects = getAllProjects();
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="case-study-page">
      <nav className="case-study-nav container">
        <Link href="/projects" className="back-link">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        {project.externalLink && (
          <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="live-link-btn-top">
            Visit Live Site <ArrowUpRight size={16} />
          </a>
        )}
      </nav>

      <header className="case-study-header container">
        <h1>{project.title}</h1>
        <p className="case-study-intro">{project.intro}</p>
        
        <div className="case-study-metadata">
          <div className="meta-col">
            <span className="meta-label">Role</span>
            <span className="meta-value">{project.metadata.role}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">Status</span>
            <span className="meta-value">{project.metadata.status}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">Timeline</span>
            <span className="meta-value">{project.metadata.timeline}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">Type</span>
            <span className="meta-value">{project.metadata.type}</span>
          </div>
          <div className="meta-col">
            <span className="meta-label">Tools</span>
            <span className="meta-value">{project.metadata.tools}</span>
          </div>
        </div>
      </header>

      <section className="case-study-hero container">
        <div className="case-study-hero-img">
          <Image 
            src={project.heroImage} 
            alt={project.title} 
            fill 
            className="cover"
          />
        </div>
      </section>

      <section className="case-study-overview container">
        <div className="overview-col">
          <h3>Problems</h3>
          <p>{project.overview.problems}</p>
        </div>
        <div className="overview-col">
          <h3>Solution</h3>
          <p>{project.overview.solution}</p>
        </div>
        <div className="overview-col">
          <h3>Results</h3>
          <p>{project.overview.results}</p>
        </div>
      </section>

      <div className="case-study-content container">
        {project.process.map((section, index) => (
          <section key={index} className="process-section">
            {section.heading && <h2>{section.heading}</h2>}
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
            {section.image && (
              <div className="process-image">
                <Image src={section.image} alt={section.heading || "Process image"} fill className="cover" />
              </div>
            )}
          </section>
        ))}
      </div>

      <section className="case-study-cta container">
        <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="live-link-btn">
          Visit Live Site <ArrowUpRight size={18} />
        </a>
      </section>
    </main>
  );
}
