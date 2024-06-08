function AboutUs() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
      <p className="text-lg text-gray-600 mb-4">
        Welcome to TieTheKnot, your trusted partner in finding the perfect
        match. We are dedicated to helping individuals find meaningful
        connections and build lasting relationships.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
        Our Mission
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        Our mission is to provide a safe, secure, and user-friendly platform for
        people to connect and find their ideal partners. We believe in love,
        trust, and building strong communities.
      </p>
      <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
        Our Values
      </h2>
      <ul className="list-disc list-inside text-lg text-gray-600 mb-4">
        <li>
          Integrity: We uphold the highest standards of integrity in all of our
          actions.
        </li>
        <li>
          Commitment: We are committed to providing excellent service to our
          users.
        </li>
        <li>
          Respect: We respect our users' privacy and strive to protect their
          personal information.
        </li>
        <li>
          Innovation: We continuously seek new and innovative ways to improve
          our platform.
        </li>
      </ul>
      <h2 className="text-2xl font-semibold text-gray-700 mt-8 mb-4">
        Contact Us
      </h2>
      <p className="text-lg text-gray-600 mb-4">
        If you have any questions, feedback, or need assistance, please don't
        hesitate to contact us at{" "}
        <a
          href="mailto:support@yourapplication.com"
          className="text-blue-500 hover:underline"
        >
          support@yourapplication.com
        </a>
        .
      </p>
    </div>
  );
}

export default AboutUs;
