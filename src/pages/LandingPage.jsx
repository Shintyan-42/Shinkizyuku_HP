import Hero from '../sections/Hero'
import Concept from '../sections/Concept'
import Strengths from '../sections/Strengths'
import Comparison from '../sections/Comparison'
import Instructors from '../sections/Instructors'
import Pricing from '../sections/Pricing'
import CtaLine from '../sections/CtaLine'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <main>
        <Concept />
        <Strengths />
        <Comparison />
        <Instructors />
        <Pricing />
        <CtaLine />
      </main>
    </>
  )
}
