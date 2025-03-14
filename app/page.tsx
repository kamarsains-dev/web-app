import Welcome from "./(marketing)/welcome/welcome"
import FirstSection from "./(marketing)/firstsection/firstsection"
import SecondSection from "./(marketing)/secondsection/secondsection"
import TertiarySection from "./(marketing)/tertiarysection/tertiarysection"
import FooterSection from "./(marketing)/footersection/footersection"
import CtaSection from "./(marketing)/ctasection/ctasection"


export default function Home() {
  return (
    <div className="">
      <Welcome/>
      <FirstSection/>
      <SecondSection/>
      <TertiarySection/>
      <CtaSection/>
      <FooterSection/>
    </div>
  )
}
