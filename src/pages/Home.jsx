import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import FeatureCard from "../components/common/FeatureCard";
import {
  ChipIcon,
  PowerIcon,
  GlobeIcon,
  CheckCircleIcon,
  ICON_STROKE_WIDTH,
} from "../components/common/icons";
import { COLORS } from "../utils/constants";

// Sub-component for Hero Section
const Hero = ({ setCurrentPage }) => (
  <section className="pt-24 pb-40 bg-almods-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-6 leading-none tracking-tight text-almods-primary">
        Voltage Redefined. <br />{" "}
        <span className="text-almods-accent text-shadow-lg">
          Absolute Stability.
        </span>
      </h1>
      <p className="text-xl sm:text-2xl mb-12 text-almods-neutral max-w-4xl mx-auto font-light">
        Safeguarding your systems with **Almods Digital Precision
        Stabilizers**—where performance meets uncompromised reliability.
      </p>
      <button
        onClick={() => setCurrentPage("products")}
        className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold rounded-full shadow-lg text-almods-background bg-almods-accent hover-bg-accent-light transition duration-300 transform hover-scale-102 tracking-wider shadow-almods-accent/50"
      >
        Explore Power Series
        <svg
          className="ml-3 w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeWidth={ICON_STROKE_WIDTH}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          ></path>
        </svg>
      </button>
    </div>
  </section>
);

// Sub-component for Features Section
const FeaturesSection = () => (
  <section className="py-24 bg-almods-secondary-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle>Core Technology Integration</SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <FeatureCard
          icon={
            <img
              src="/images/image_slim.png"
              alt="Digital DSP Control"
              className="w-12 h-12 object-contain"
            />
          }
          title="Digital DSP Control"
          description="Utilizing advanced Digital Signal Processing to correct voltage fluctuations instantaneously, ensuring zero lag."
        />

        <FeatureCard
          icon={
            <img
              src="/images/Almods-Servo-Voltage-Stabilizer-Air-Cooled-5KVA-–-30KVAServo-Voltage-Stablizer-Air-Cooled-5KVA-–-30KVA-3.png"
              alt="Digital DSP Control"
              className="w-12 h-12 object-contain"
            />}
          title="Thermal Management"
          description="Integrated smart cooling systems prevent overheating, maintaining peak performance in extreme temperatures."
        />
        <FeatureCard
          icon={<GlobeIcon />}
          title="Remote Telemetry"
          description="Optional IoT modules for remote monitoring and diagnostics of voltage logs and performance data in real-time."
        />
      </div>
    </div>
  </section>
);

// Sub-component for Quality Section
const QualitySection = () => (
  <section className="py-24 bg-almods-bg">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <SectionTitle>The Almods Advantage</SectionTitle>

      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-gray-700">
          <img
            src="https://placehold.co/800x550/1f1f1f/00eaff?text=Advanced+Testing+Facility"
            alt="Image of electronics factory floor or quality control check"
            className="w-full h-auto object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src =
                "https://placehold.co/800x550/1f1f1f/00eaff?text=Testing+Facility";
            }}
          />
        </div>

        <div className="space-y-10">
          <div className="flex items-start space-x-4">
            <CheckCircleIcon className="w-8 h-8 text-almods-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-almods-primary">
                Aerospace-Grade Components
              </h4>
              <p className="text-gray-400 mt-1">
                Sourced from certified suppliers, guaranteeing internal
                component stability under continuous heavy load.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircleIcon className="w-8 h-8 text-almods-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-almods-primary">
                AI-Enhanced Diagnostics
              </h4>
              <p className="text-gray-400 mt-1">
                Predictive failure detection monitors component health,
                minimizing unexpected downtime and maximizing lifespan.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <CheckCircleIcon className="w-8 h-8 text-almods-accent flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl font-bold text-almods-primary">
                Global Compliance Certified
              </h4>
              <p className="text-gray-400 mt-1">
                Meets all major international safety and quality standards (UL,
                CE, ISO) for global integration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const HomePage = ({ setCurrentPage }) => (
  <React.Fragment>
    <Hero setCurrentPage={setCurrentPage} />
    <FeaturesSection />
    <QualitySection />
  </React.Fragment>
);

export default HomePage;
