const page = () => {
  return (
    <>
      <section className="max-w-3xl mx-auto px-6 py-16">
        <h3 className="bg-linear-to-r font-bold text-3xl  from-purple-500 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h3>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          <p>
            I&apos;m a{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              self-taught full-stack developer
            </span>{" "}
            based in Gouda, Netherlands, with a background that&apos;s a little
            different from most devs you&apos;ll meet. Before writing code, I
            spent years working in healthcare as a care assistant and taught
            high school psychology and social studies — work that taught me how
            to break down complex ideas and stay patient while people learn.
          </p>
          <p>
            I made the switch into tech through the{" "}
            <span className="font-semibold text-gray-900 dark:text-white">
              Evangadi Tech bootcamp
            </span>
            , where I trained in the MERN stack, and I&apos;ve since built my
            skills further with Next.js and TypeScript. I enjoy building real,
            working projects rather than just following tutorials — from a
            church community app with role-based access, to a Q&amp;A platform
            for a Bible study group.
          </p>
          <p className="border-l-4 border-purple-400 pl-4 italic text-gray-400 dark:-gray-200">
            Right now I&apos;m focused on landing my first role in tech, with an
            eye toward growing into AI engineering and cloud development. I
            bring the same care and clarity from my past careers into how I
            write code and work with teams.
          </p>
        </div>
      </section>
    </>
  );
};

export default page;
