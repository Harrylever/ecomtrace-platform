import HeadSection from "./components/head-section"
import LogDisplayContainer from "./components/log-display-container"
import LandingLayout from "./layout"

export default function LandingPage() {
  return (
    <LandingLayout>
      <section className="relative">
        <HeadSection />
        <LogDisplayContainer />
      </section>
    </LandingLayout>
  )
}
