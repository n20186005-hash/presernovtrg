import Header from './Header';
import Hero from './Hero';
import WeatherSection from './WeatherSection';
import Intro from './Intro';
import NearbyLandmarks from './NearbyLandmarks';
import BasicInfo from './BasicInfo';
import HoursSection from './HoursSection';
import TicketsSection from './TicketsSection';
import VisitorServices from './VisitorServices';
import TransportSection from './TransportSection';
import TransportGuide from './TransportGuide';
import InfoSection from './InfoSection';
import HistoryTimeline from './HistoryTimeline';
import ScienceNotes from './ScienceNotes';
import SeasonStrategy from './SeasonStrategy';
import AudienceRoutes from './AudienceRoutes';
import ItineraryPlanner from './ItineraryPlanner';
import RouteSection from './RouteSection';
import PhotoSpotsSection from './PhotoSpotsSection';
import HotelsSection from './HotelsSection';
import Gallery from './Gallery';
import Reviews from './Reviews';
import FAQSection from './FAQSection';
import MapEmbed from './MapEmbed';
import Footer from './Footer';

/** Shared section order for every locale so all language versions stay in sync. */
export default function PageSections() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WeatherSection />
        <Intro />
        <NearbyLandmarks />
        <BasicInfo />
        <HoursSection />
        <TicketsSection />
        <VisitorServices />
        <TransportSection />
        <TransportGuide />
        <InfoSection />
        <HistoryTimeline />
        <ScienceNotes />
        <SeasonStrategy />
        <AudienceRoutes />
        <ItineraryPlanner />
        <RouteSection />
        <PhotoSpotsSection />
        <HotelsSection />
        <Gallery />
        <Reviews />
        <FAQSection />
        <MapEmbed />
      </main>
      <Footer />
    </>
  );
}
