
  
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-8 text-purple-700">Contact</h1>
      <section className="bg-yellow-100 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-4 text-red-600">(Get in Touch)</h2>
        <p className="text-center italic mb-8 text-green-700">
          If you have any questions or want to place any order or need assistance, feel free to reach out to us. We are here for your help.
        </p>
      </section>
      <section className="bg-blue-100 p-8 rounded-lg shadow-lg mt-8">
        <h2 className="text-2xl font-bold mb-2 text-indigo-600">(PHONE NUMBER)</h2>
        <h3 className="text-xl font-semibold text-pink-600">ABEERAH: +92 *************</h3>
      </section>
    
    </div>
  );
};

export default Contact;

  
