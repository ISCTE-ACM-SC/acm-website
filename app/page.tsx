import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { BlogSection } from "@/components/blog-section"
import { LanguagesSection } from "@/components/languages-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"
import { WavyBackground } from "@/components/wavy-background"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <WavyBackground />
      <Header />
      <main className="relative z-10 mt-16 sm:mt-20 md:mt-24 px-4 sm:px-6 pb-16 max-w-7xl mx-auto">
        <div className="page-container space-y-20 px-6 py-12">
          <HeroSection />
          <BlogSection />
          <LanguagesSection />
          <ProjectsSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
