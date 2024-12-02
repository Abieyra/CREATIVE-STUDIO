

const ServicePage = () => {
    return (
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Services</h1>
  
        <section className="bg-yellow-100 p-8 mb-8 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-center mb-4 text-red-600">Graphic Design</p>
          <p className="text-center mb-8 text-green-700">
            We offer professional graphic design services to bring your ideas to life. From logos to marketing materials we create stunning visuals that represent your brand.
          </p>
          <a href="/services/graphic-design" className="text-blue-500 hover:text-blue-700 hover:underline block text-center transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg p-2">
            THIS IS A GRAPHIC PAGE
          </a>
        </section>
  
        <section className="bg-blue-100 p-8 rounded-lg shadow-lg">
          <p className="text-2xl font-bold text-center mb-4 text-indigo-600">Video Editing</p>
          <p className="text-center mb-8 text-pink-600">
            Our video editing services help you create engaging and professional videos. Whether its for social media marketing or personal projects we ensure high-quality results.
          </p>
          <a href="/services/video-editing" className="text-blue-500 hover:text-blue-700 hover:underline block text-center transition duration-300 ease-in-out border-2 border-blue-500 rounded-lg p-2">
            THIS IS A VIDEO EDITING PAGE
          </a>
        </section>
      </div>
    );
  };
  
  export default ServicePage;
  