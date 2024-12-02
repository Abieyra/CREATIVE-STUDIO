import Link from 'next/link';
// import styles from "../about/about.module.css";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">ABOUT US</h1>
      <section className="bg-yellow-100 p-8">
        <p className="text-2xl font-bold text-center mb-4">
          Welcome to <strong>My Creative Studio!</strong>
        </p>
        <p className="text-center mb-8">
          At My Creative Studio, we bring your visions to life with our expert video editing and graphic designing services. Whether you’re looking to create stunning visuals for your brand, captivating videos for your audience, or unique designs for your personal projects, we’ve got you covered. We are dedicated to delivering top-notch quality in every project we undertake. We stay updated with the latest trends and technologies to provide you with cutting-edge solutions. Our team consists of experienced professionals who are passionate about their craft.
        </p>
      </section>
      <section className="bg-yellow-100 p-8 mt-4">
        <p className="text-2xl font-bold text-center mb-4">
          <strong>Our Mission</strong>
        </p>
        <p className="text-center mb-8">
          Our mission is to provide exceptional creative services that exceed your expectations. We are committed to delivering high-quality work, personalized service, and innovative solutions that help you achieve your goals. At My Creative Studio, your vision is our inspiration. We look forward to working with you and bringing your ideas to life!
        </p>
      </section>

      
    </div>
  );
};

export default AboutPage;
