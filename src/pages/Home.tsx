import { About } from '../components/About/About';
import { Advantages } from '../components/Advantages/Advantages';
import { Footer } from '../components/Footer/Footer';
import { Gallery } from '../components/Gallery/Gallery';
import { Hero } from '../components/Hero/Hero';
import { Location } from '../components/Location/Location';
import { Navbar } from '../components/Navbar/Navbar';
import { ScheduleForm } from '../components/ScheduleForm/ScheduleForm';
import { SectionDivider } from '../components/SectionDivider';
import { Services } from '../components/Services/Services';
import { BackToTop } from '../components/BackToTop/BackToTop';
import { WhatsAppButton } from '../components/WhatsAppButton/WhatsAppButton';

export function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <SectionDivider />
        <Gallery />
        <About />
        <SectionDivider />
        <Advantages />
        <ScheduleForm />
        <SectionDivider />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
}
