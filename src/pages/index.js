import React, { useRef } from "react";

//components
import Seo from "../components/Seo";
import Layout from "../components/Layout";
import ContactCard from "../components/ContactCard";

//assets
import down from "../images/svg/down.svg";
import ImageCarousel from "../components/ImageCarousel";
import TrainingCard from "../components/TrainingCard";
import p1 from "../images/svg/ds.svg";
import p2 from "../images/svg/AI.svg";
import p3 from "../images/svg/ML.svg";
import p4 from "../images/svg/CS.svg";
import p5 from "../images/svg/WebDev.svg";
import p6 from "../images/svg/IOT.svg";
import p8 from "../images/svg/AutoCAD.svg";
import p10 from "../images/svg/DM.svg";
import p11 from "../images/svg/Finance.svg";
import p12 from "../images/svg/HR Management.svg";
import p13 from "../images/svg/DS.svg";
import contact1 from "../images/svg/location.svg";
import contact2 from "../images/svg/call.svg";
import contact3 from "../images/svg/email.svg";

export default function Home() {
  return (
    <Layout>
      {/* Seo added below */}
      <Seo
        title="The Learniverse | Home"
        description="At Learniverse, we're more than an online training platform—we're a dynamic community of educators, learners, and innovators passionate about transforming education for the better"
      />
      {/* Hero */}
      <section id="hero" className=" lg:h-[90vh] flex flex-col justify-between">
        <div className="flex flex-col py-2 lg:py-0 lg:mx-12 lg:mt-13 space-y-1">
          <h1 className=" text-lg lg:text-xl font-semibold lg:text-center">
            WELCOME TO THE UNIVERSE <br></br> OF LEARNING POTENTIAL MINDS.
          </h1>
          <p className="text-md lg:text-lg  text-primary lg:text-center">
            UNLOCKING BOUNDLESS KNOWLEDGE
          </p>
        </div>
        <div className="my-5 flex flex-col items-center">
          <p className="mb-2 text-primary font-semibold">GET STARTED</p>
          <img src={down} alt="down arrow" className="w-4" />
        </div>
      </section>

      {/* About Us? */}
      <section
        id="aboutus"
        className="bg-bg mx-2 lg:mx-12 py-5 shadow-xl rounded-large"
      >
        <div className="space-y-1 px-2 lg:px-5">
          <h2 className="lg:text-center text-md lg:text-lg font-bold underline">
            ABOUT US
          </h2>
          <p className="text-md text-text text-center font-medium">
            We're thrilled to have you here. Let's take a moment to introduce
            ourselves.
          </p>

          <p className="text-sm ">
            At Learniverse, we're more than an online training platform—we're a
            dynamic community of educators, learners, and innovators passionate
            about transforming education for the better. Founded on the belief
            that everyone deserves access to high-quality education, we're
            committed to empowering individuals from all walks of life to unlock
            their full potential and achieve their dreams.
          </p>
        </div>
        <div className="lg:mt-8">
          <h2 className="bg-white lg:text-center text-md lg:text-lg font-bold">
            OUR INDUSTRY EXPERTS
          </h2>
          <ImageCarousel />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="my-2 mx-2 lg:mx-12 lg:my-10">
        <h2 className="lg:text-center text-md lg:text-lg font-bold underline">
          POPULAR TRAINING PROGRAMS
        </h2>
        <div className="my-5 flex flex-col space-y-10">
          <TrainingCard
            src={p1}
            alt="DATA SCIENCE"
            title="DATA SCIENCE"
            content="Welcome to Learniverse's Data Science offerings, where curiosity
            meets computation to unravel the mysteries of data. Dive into our
            dynamic curriculum crafted by industry experts, designed to equip
            you with the essential skills and tools needed to thrive in the
            data-driven world. From foundational concepts to advanced
            techniques, explore the realm of data analysis, machine learning,
            and beyond. Whether you're a novice or a seasoned professional, our
            comprehensive courses cater to all levels of expertise. Join us on a
            transformative journey where you'll unlock the power of data and
            unleash your potential."
          />
          <TrainingCard
            src={p2}
            alt="ARTIFICIAL INTELLIGENCE"
            title="ARTIFICIAL INTELLIGENCE"
            content="At Learniverse, we harness cutting-edge AI technology to
            revolutionize learning, making it more personalized, engaging, and
            effective than ever before. Our platform combines advanced
            algorithms with curated content and expert guidance to create a
            tailored learning experience for every user. Whether you're a
            student, educator, or lifelong learner, Learniverse empowers you to
            unlock your full potential and achieve your goals. Join us on a
            journey of discovery, innovation, and limitless possibilities in the
            world of education."
          />
          <TrainingCard
            src={p3}
            alt="MACHINE LEARNING"
            title="MACHINE LEARNING"
            content="Welcome to Learniverse - where the possibilities of learning are
            limitless through the power of Machine Learning (ML). At
            Learniverse, we harness cutting-edge ML technology to personalize
            your educational experience like never before. Our platform adapts
            to your unique learning style, preferences, and pace, guiding you on
            a personalized learning journey tailored to your needs. Explore a
            vast array of courses, resources, and interactive tools meticulously
            curated by ML algorithms to optimize your learning outcomes. Join
            our vibrant community of learners and educators, and embark on a
            transformative educational adventure in the digital age. Let
            Learniverse and ML elevate your learning to new heights."
          />
          <TrainingCard
            src={p4}
            alt="CYBER SECURITY"
            title="CYBER SECURITY"
            content="Welcome to Learniverse's Cyber Security division, where we
            prioritize safeguarding your digital presence in an ever-evolving
            digital landscape. Our comprehensive suite of courses offers
            hands-on training and expert guidance to equip you with the
            knowledge and skills needed to defend against cyber threats
            effectively. Whether you're a novice looking to understand the
            basics or a seasoned professional aiming to stay ahead of the curve,
            Learniverse's Cyber Security program empowers learners at every
            level to navigate the complexities of cybersecurity with confidence.
            Join us in fortifying your digital world and protecting what matters
            most."
          />
          <TrainingCard
            src={p5}
            alt="WEB DEVELOPMENT"
            title="WEB DEVELOPMENT"
            content="Welcome to the Learniverse Web Development Program! 🖥️ Dive into
            the digital world with our comprehensive web development courses
            designed to equip you with the skills needed to thrive in today's
            tech-driven landscape. Whether you're a beginner or looking to
            advance your coding expertise, our expert-led curriculum covers
            everything from HTML and CSS basics to advanced JavaScript
            frameworks and beyond. Join us as we unlock the secrets of web
            development and empower you to create stunning, interactive websites
            and web applications. Start your journey with Learniverse today and
            turn your coding dreams into reality!"
          />
          <TrainingCard
            src={p6}
            alt="APP DEVELOPMENT"
            title="APP DEVELOPMENT"
            content="Embark on a transformative journey into the world of app development
            with Learniverse! Our comprehensive app development course equips
            you with the skills and knowledge needed to thrive in today's
            digital landscape. Whether you're a beginner or looking to advance
            your career, our expert instructors will guide you through hands-on
            projects, interactive lessons, and real-world applications. From
            understanding programming fundamentals to mastering the latest
            frameworks and technologies, our course covers it all. Dive deep
            into iOS, Android, or cross-platform development and unleash your
            creativity to build cutting-edge mobile applications. With
            Learniverse, you'll not only learn how to code but also gain
            valuable insights into user experience design, project management,
            and app monetization strategies. Join us and unlock the potential to
            turn your app ideas into reality. Start your journey to becoming a
            skilled app developer today!"
          />
          <TrainingCard
            src={p5}
            alt="FULL STACK JAVA"
            title="FULL STACK JAVA"
            content="Welcome to Learniverse's Full Stack Development course! 🚀 Dive into
            the dynamic world of web development and master the skills needed to
            build cutting-edge applications from start to finish. This
            comprehensive course covers both front-end and back-end development,
            equipping you with the expertise to create robust and interactive
            web solutions. Throughout the program, you'll learn essential
            programming languages such as HTML, CSS, JavaScript, and Python, as
            well as popular frameworks like React.js, Node.js, and Django. From
            designing user-friendly interfaces to implementing database
            management systems, our hands-on approach ensures you gain practical
            experience and confidence in each aspect of full stack development.
            Whether you're a beginner eager to explore the foundations of web
            development or an experienced developer looking to expand your skill
            set, our course offers a structured curriculum tailored to meet your
            learning goals. Join our community of learners, collaborate with
            industry experts, and unleash your potential to innovate in the
            digital landscape. Get ready to embark on an exciting journey
            towards becoming a proficient full stack developer with Learniverse!"
          />
          <TrainingCard
            src={p8}
            alt="AUTOCAD"
            title="AUTOCAD"
            content="Unlock the Power of Design with AutoCAD! Discover the essential
            skills and techniques to master the world's leading computer-aided
            design (CAD) software with Learniverse's AutoCAD course. Whether
            you're a beginner looking to delve into the exciting realm of design
            or a seasoned professional aiming to enhance your proficiency, our
            comprehensive course is tailored to meet your needs. Through a
            series of hands-on lessons, expertly crafted tutorials, and
            real-world projects, you'll learn how to navigate the AutoCAD
            interface with ease, create precise 2D and 3D drawings, annotate
            designs with dimensions and text, and optimize workflows for maximum
            efficiency. Our experienced instructors will guide you through every
            step of the process, providing personalized feedback and support to
            ensure your success. By the end of the course, you'll have the
            skills and confidence to tackle any design challenge and unleash
            your creativity with AutoCAD. Enroll now and take the first step
            towards a rewarding career in design with Learniverse!"
          />
          <TrainingCard
            src={p6}
            alt="IOT ROBOTICS"
            title="IOT ROBOTICS"
            content="Welcome to Learniverse's comprehensive Internet of Things (IoT)
            course, where innovation meets practicality! 🌐 Dive into the
            dynamic world of IoT and unlock the potential of interconnected
            devices, sensors, and data analytics. Our expert-led curriculum is
            meticulously crafted to equip you with the skills needed to design,
            build, and deploy IoT solutions across various industries.
            Throughout this course, you'll delve into key IoT concepts,
            including sensor technologies, data communication protocols, cloud
            computing, and cybersecurity. Through hands-on projects and
            real-world simulations, you'll gain proficiency in developing IoT
            applications and integrating them into existing systems. Whether
            you're a beginner exploring the possibilities of IoT or a seasoned
            professional looking to enhance your expertise, our course caters to
            learners of all levels. Join us in reshaping the future with IoT
            innovation, one connected device at a time!"
          />
          <TrainingCard
            src={p10}
            alt="DIGITAL MARKETING"
            title="DIGITAL MARKETING"
            content="Unlock the power of online marketing with Learniverse's Digital
            Marketing course! This comprehensive program covers essential topics
            such as SEO, social media strategies, content marketing, email
            campaigns, and analytics. Designed for beginners and seasoned
            professionals alike, our course equips you with the skills to drive
            traffic, boost engagement, and achieve measurable results. Join us
            and transform your digital presence today!"
          />
          <TrainingCard
            src={p11}
            alt="FINANCE"
            title="FINANCE"
            content=" Master the fundamentals of finance with our comprehensive Finance
            Course at Learniverse. Designed for beginners and professionals
            alike, this course covers essential topics such as financial
            analysis, investment strategies, budgeting, and risk management.
            Learn from industry experts through engaging content and practical
            exercises, and gain the skills you need to excel in the financial
            world. Start your journey to financial expertise today with
            Learniverse!"
          />
          <TrainingCard
            src={p12}
            alt="HR MANAGEMENT"
            title="HR MANAGEMENT"
            content="Master the essentials of HR management with Learniverse's
            comprehensive course. Designed for aspiring HR professionals and
            seasoned practitioners alike, this course covers recruitment,
            employee relations, performance management, and compliance with the
            latest industry standards. Gain the skills and knowledge needed to
            effectively manage and develop talent in today's dynamic workplace.
            Enroll now to elevate your HR expertise and drive organizational
            success."
          />
          <TrainingCard
            src={p13}
            alt="DATA STRUCTURES AND ALGORITHMS"
            title="DATA STRUCTURES AND ALGORITHMS"
            content="Master the essentials of data structures and algorithms with
            Learniverse's comprehensive course. Designed for both beginners and
            those looking to refresh their skills, this course covers
            fundamental concepts such as arrays, linked lists, stacks, queues,
            trees, and graphs. Learn efficient algorithms for sorting,
            searching, and problem-solving, and understand their real-world
            applications. Equip yourself with the knowledge and tools needed to
            excel in technical interviews and advance your career in software
            development."
          />
        </div>
      </section>

      {/* Contactu Us */}
      <section id="contactus" className="my-2 mx-2 lg:mx-12 lg:my-10">
        <h2 className="lg:text-center text-md lg:text-lg font-bold underline">
          HOW TO REACH US
        </h2>
        <p className="my-2 text-md text-text text-center font-medium">
          We strive to respond within 24 hours. Thank you for choosing
          Learniverse - where learning knows no bounds!
        </p>
        <div className="flex flex-col space-y-2">
          <ContactCard
            img={contact1}
            content="If you're in the neighborhood, feel free to swing by our office! Our address is: 6th Cross Rd, Hosapalaya, Muneshwara Nagar, Bengaluru, Karnataka 560068"
          />
          <ContactCard
            img={contact2}
            content="Prefer speaking with someone directly? Give us a call at +91 8310995401 during our office hours, Monday to Saturday, 10:00 AM to 9:00 PM."
          />
          <ContactCard
            img={contact3}
            content="For general inquiries and customer support, drop us an email at support@learniverse.in."
          />
        </div>
      </section>
    </Layout>
  );
}
