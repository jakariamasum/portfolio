import profileImage from "../assets/images/profile.jpg";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
            Hello! I’m Jakaria Masum, a passionate{" "}
            <strong className="text-[#4ECCA3] ">Full Stack Developer</strong>{" "}
            with over 6 months of experience building and optimizing scalable
            web applications. I specialize in crafting seamless user experiences
            and robust backend systems, using a diverse tech stack to bring
            innovative ideas to life. My journey in software development has
            been fueled by a strong dedication to learning and problem-solving.
            I enjoy working on end-to-end solutions, from designing intuitive
            front-end interfaces to architecting efficient and secure backends.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
