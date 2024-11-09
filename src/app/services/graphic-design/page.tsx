

const GraphicDesign = () => {
    return (
      <div className="container mx-auto p-6">
        <section className="bg-yellow-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
            Welcome to <strong>Graphic Designing Page!</strong>
          </h2>
          <ul className="list-disc list-inside space-y-4 text-lg text-blue-700">
            <li>
              <strong>Brand Identity:</strong> Create a cohesive and memorable brand identity with custom logos, business cards, and more.
            </li>
            <li>
              <strong>Marketing Materials:</strong> Design eye-catching flyers, brochures, and social media graphics.
            </li>
            <li>
              <strong>Web Graphics:</strong> Develop stunning visuals for websites, including banners, icons, and infographics.
            </li>
            <li>
              <strong>Illustrations:</strong> Craft unique illustrations tailored to your specific needs.
            </li>
          </ul>
        </section>
  
        <section className="bg-blue-100 p-8 rounded-lg shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-center mb-4 text-red-600">
            Our Services
          </h2>
          <p className="text-center text-green-700 mb-8">
            We offer a wide range of graphic design services to meet all your creative needs. From branding to web graphics, our team is dedicated to delivering high-quality designs that make an impact.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/services/graphic-design" className="text-white bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out rounded-lg p-2">
              Learn More
            </a>
            <a href="/contact" className="text-white bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out rounded-lg p-2">
              Contact Us
            </a>
          </div>
        </section>
      </div>
    );
  }
  
  export default GraphicDesign;