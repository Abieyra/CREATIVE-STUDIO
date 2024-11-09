import Link from 'next/link';

const VideoEditing = () => {
  return (
    <div className="container mx-auto p-6">
      <section className="bg-blue-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-purple-700">
          Welcome to <strong>Video Editing Page!</strong>
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg text-green-700">
          <li>
            <strong>Professional Editing:</strong> Transform raw footage into polished, engaging videos.
          </li>
          <li>
            <strong>Motion Graphics:</strong> Add dynamic animations and effects to make your videos stand out.
          </li>
          <li>
            <strong>Color Grading:</strong> Enhance the visual appeal with expert color correction and grading.
          </li>
          <li>
            <strong>Sound Design:</strong> Perfect the audio with high-quality sound effects and background music.
          </li>
        </ul>
      </section>
      <section className="bg-yellow-100 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-red-600">
          Our Services
        </h2>
        <p className="text-center text-blue-700 mb-8">
          We offer a comprehensive range of video editing services to meet all your creative needs. From professional editing to sound design, our team is dedicated to delivering high-quality videos that make an impact.
        </p>
        <div className="flex justify-center space-x-4">
          <Link href="/services/video-editing">
            <a className="text-white bg-purple-500 hover:bg-purple-700 transition duration-300 ease-in-out rounded-lg p-2">
              Learn More
            </a>
          </Link>
          <Link href="/contact">
            <a className="text-white bg-green-500 hover:bg-green-700 transition duration-300 ease-in-out rounded-lg p-2">
              Contact Us
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default VideoEditing;
