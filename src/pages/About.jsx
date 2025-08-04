
export default function About() {
  return (
    <section className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">About Me</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Learn more about my background, skills, and goals.
          </p>
        </div>

        {/* Bio Section */}
        <div className="text-lg leading-relaxed">
          <p className="mb-4">
            Hi! I'm <strong>Irtaza Ahmad</strong>, a passionate Computer Science student at Pak-AIMS with a GPA of <strong>3.82</strong>. I love turning complex problems into clean, efficient solutions.
          </p>
          <p className="mb-4">
            I'm currently focused on full-stack development, building projects using the <strong>MERN stack</strong> (MongoDB, Express.js, React, Node.js). I enjoy crafting seamless user experiences and writing scalable, maintainable backend logic.
          </p>
          <p>
            Outside of coding, I enjoy learning about data science, practicing problem-solving in C++ and JavaScript, and exploring new tech trends. I'm always eager to grow and contribute to meaningful projects.
          </p>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Technical Skills</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
            <li>JavaScript (ES6+), HTML5, CSS3</li>
            <li>React, Node.js, Express.js</li>
            <li>MongoDB, MySQL</li>
            <li>REST APIs, JSON, Fetch/Axios</li>
            <li>Git & GitHub</li>
            <li>Basic Data Science (Python, NumPy, Pandas, Matplotlib)</li>
            <li>C++ for DSA & Problem Solving</li>
          </ul>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Education</h3>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Bachelor of Science in Computer Science</strong><br />
            Pak-AIMS University, Lahore<br />
            GPA: 3.82
          </p>
        </div>

        {/* Goals Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Career Goals</h3>
          <p className="text-gray-700 dark:text-gray-300">
            I'm aiming to join a tech-focused organization as a full-stack or frontend developer, where I can apply my skills, learn from experienced developers, and build user-centric applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}
