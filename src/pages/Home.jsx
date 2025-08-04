import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <section className="home-section md:px-40 px-4 md:flex md:justify-around md:gap-5 md:mt-10 mt-3">
      <div className="container mx-auto text-center py-20 px-4">
        <h1 className="md:text-4xl text-xl font-bold mb-4">Hi, I'm Irtaza Ahmad 👋</h1>
        <p className="text-lg text-gray-700 mb-6">
          I'm a passionate <span className="font-semibold text-black">Computer Science student</span> with a strong interest in web development, software engineering, and data science.
        </p>
        <p className="text-md text-gray-600 mb-6">
          I build responsive web applications using the <span className="font-semibold text-black">MERN stack</span> (MongoDB, Express.js, React, Node.js) and have hands-on experience in developing full-stack projects, custom APIs, and user-friendly interfaces.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-800 transition duration-300"
        >
          View My Projects
        </Link>
      </div>
      <div>
        <img src="./irtaza.jpg" alt="profile_picture" height='550px' width='550px' className="rounded-2xl"/>
      </div>
    </section>
    
  );
}
