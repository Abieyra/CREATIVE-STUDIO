import Image from 'next/image';
import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="bg-purple-400 bg-opacity-75 p-6 rounded-lg">
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-white text-2xl font-bold mb-4">
          &apos; My Creative Studio &apos;
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded mx-auto"
            alt="header"
            width={600}
            height={400} // Adjust the height as needed
            src="/images/picture.jpg" // Ensure the correct path to your image
          />
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        At My Creative Studio, we bring your visions to life with our expert video editing and graphic designing services. Whether you’re looking to create stunning visuals for your brand, captivating videos for your audience, or unique designs for your personal projects, we’ve got you covered. We are a passionate team of creative professionals dedicated to bringing your visions to life through our expert services in graphic designing, video editing, and photography.
      </div><br></br>
      <div className="container mx-auto flex flex-col items-center ">
        <div className="text-white text-2xl font-bold mb-4">
          &apos;Graphic Designing&apos;
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        We believe that great design is the cornerstone of effective communication. Our talented graphic designers work closely with you to create stunning visuals that capture the essence of your brand. Whether you need eye-catching logos, engaging social media graphics, or professional marketing materials, we have the skills and creativity to make your ideas stand out.
      </div><br></br>
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-white text-2xl font-bold mb-4">
          &apos;Video Editing&apos;
        </div>
      </div>
      <div className="mt-4 text-lg text-center text-white">
        Our video editing team is here to transform your raw footage into captivating stories. We specialize in creating high-quality videos that resonate with your audience. From promotional videos and commercials to event highlights and personal projects, we ensure that every frame is polished to perfection.
      </div>
    </header>
  );
};

export default Header;
