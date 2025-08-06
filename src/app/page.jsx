import '../styles/globals.css';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/Herosection';


export default function Home() {
  return (
    <div className="relative">
      <Navbar />
        <HeroBanner />

    </div>
  );
}
