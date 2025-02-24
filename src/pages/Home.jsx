import Vector from "../assets/Vector.png";
import chemistry from "../assets/chemistry.png";

const Home = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-[#E5FF80] to-[#C2FF44] min-h-[67vh] flex items-center px-6 md:px-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 items-center w-full max-w-7xl mx-auto relative z-10">
          {/* Left Content */}
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Master In-Demand Skills with <br /> Expert-Led Courses
            </h1>
            <p className="text-lg text-black mt-4">
              “Master new skills with expert-led courses and hands-on learning.”
            </p>
            <p className="text-lg font-bold text-black mt-6">
              Start your journey today!
            </p>
          </div>

          {/* Right Circular Card */}
          <div className="relative flex justify-center md:justify-center ml-10">
            <div className="bg-gradient-to-br from-[#E5FF80] to-[#C2FF44] p-10 rounded-full shadow-2xl w-[320px] h-[320px] flex flex-col items-center justify-center relative z-10 border-4 border-white transform hover:scale-105 transition-transform duration-300">
              <h2 className="text-2xl font-extrabold text-black text-center">
                Enhance Skills
              </h2>
              <p className="text-gray-700 text-center text-sm mt-2">
                Learning made Easy
              </p>
              <button className="mt-6 bg-black text-white px-6 py-2 rounded-full text-lg font-bold hover:opacity-80 transition">
                Browse
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 w-[340px] h-[340px] bg-[#C2FF44] rounded-full -z-10 opacity-50"></div>
          </div>
        </div>

        {/* Floating Bubbles */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white opacity-50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-20 w-20 h-20 bg-white opacity-40 rounded-full animate-bounce delay-200"></div>
        <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-white opacity-30 rounded-full animate-bounce delay-500"></div>

        {/* New Bouncing Bubble in the Middle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white opacity-30 rounded-full animate-bounce delay-700"></div>
      </section>

      {/* Second Section */}
      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 px-6 md:px-16 relative overflow-hidden">
        <div className="grid md:grid-cols-2 items-center w-full max-w-7xl mx-auto relative z-10">
          <div className="max-w-lg">
            <div>
              <span className="text-white rounded-md">
                <img src={Vector} alt="vector" className="w-auto h-9" />
              </span>
            </div>
            <h2 className="text-3xl font-extrabold text-black">
              Why you should <br /> choose SkillZy?
            </h2>
            <p className="text-gray-700 text-lg mt-4">
              “With 35 years of experience, we’re dedicated to digital excellence.”
            </p>
            <button className="mt-6 bg-[#C2FF44] text-black px-6 py-2 rounded-full text-lg font-bold flex items-center hover:opacity-80 transition">
              About us →
            </button>
          </div>
          <div className="flex justify-center relative">
            <img src={chemistry} alt="Why Choose SkillZy" className="max-w-xs md:max-w-sm relative z-10" />
            <div className="absolute top-5 left-5 w-28 h-28 bg-[#E5FF80] opacity-50 rounded-full -z-10"></div>
            <div className="absolute bottom-5 right-5 w-24 h-24 bg-[#C2FF44] opacity-40 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Third Section (Available Courses) */}
      <section className="bg-gradient-to-r from-[#E5FF80] to-[#C2FF44] py-16 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-extrabold text-black mb-10">Available Courses!</h2>

        {/* Course Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Array(8).fill(0).map((_, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-200 h-32 rounded-md flex items-center justify-center">
                <img src={chemistry} alt="Course Image" className="w-12 h-12 opacity-50" />
              </div>
              <div className="mt-4 text-left">
                <h3 className="text-sm font-semibold text-black">Text</h3>
                <p className="text-sm font-bold text-black"> $0</p>
                <p className="text-sm text-gray-500">Body text.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <button className="mt-10 bg-black text-white px-8 py-2 rounded-full text-lg font-bold hover:opacity-80 transition">
          Explore &gt;
        </button>
      </section>

      {/* Fourth Section (Personalized Courses) */}
      <section className="bg-black text-white py-16 px-6 md:px-16 text-center">
        <h2 className="text-4xl font-extrabold mb-4">
          How will your courses be personalized?
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Your skill will be centered on personalized courses based on your strengths and preferences.
        </p>

        {/* Start Test Button */}
        <button className="mt-6 bg-[#C2FF44] text-black px-6 py-2 rounded-full text-lg font-bold hover:opacity-80 transition">
          ⏹ Start test
        </button>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto mt-10">
          {/* Card 1 */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg text-center">
            <div className="flex justify-center">
              <span className="bg-[#C2FF44] text-black px-4 py-2 rounded-md text-lg font-bold">A+</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Skill Assessment</h3>
            <p className="text-gray-400 text-sm mt-2">
              You will be taking tests to figure out where your skill preferences you want to pursue.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg text-center">
            <div className="flex justify-center">
              <span className="bg-[#C2FF44] text-black px-4 py-2 rounded-md text-lg font-bold">✖</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Skill Gap Analysis</h3>
            <p className="text-gray-400 text-sm mt-2">
              The second test will figure out how you perform in your skill and see if there is a gap to cover.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#1E1E1E] p-6 rounded-lg text-center">
            <div className="flex justify-center">
              <span className="bg-[#C2FF44] text-black px-4 py-2 rounded-md text-lg font-bold">🖼</span>
            </div>
            <h3 className="text-lg font-bold mt-4">Courses Delivery</h3>
            <p className="text-gray-400 text-sm mt-2">
              Then we will recommend courses that might suit you to close your skill gaps efficiently.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;



