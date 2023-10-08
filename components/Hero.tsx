import Button from './Button'
import SectionContainer from './SectionContainer'

export default function HeroSection() {
  const subtitle = 'Welcome to'
  const title = 'Pliny'
  const description =
    'A Next.js starter kit for Pliny, a content management system for the Jamstack.'
  const cta = {
    title: 'Get Started',
  }

  return (
    <SectionContainer id="hero" className="flex flex-col justify-end min-h-screen gap-0 xs:mt-0">
      <span className="font-mono text-sm md:text-base text-accent">{subtitle}</span>

      <div className="max-w-5xl text-4xl font-bold tracking-tighter md:text-7xl">
        <h1 className="leading-[1.2]">{title}</h1>
      </div>

      <p className="max-w-xl text-base md:text-lg">{description}</p>

      <Button className="mb-[25vh]" as="a">
        blkdkd
      </Button>
    </SectionContainer>
  )
}
