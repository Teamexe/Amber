import "./About.scss";

const  About = (props) => {
  return (
    <div className="about-page">

      <section className="about-content">
        <h2>Amber</h2>
        <h3>Instant access to reliable healthcare services - anytime, anywhere!</h3>
        <p>
          The need for medical treatment has increased recently, and so has the
          desire for easily accessible and affordable ambulances. While
          traditional ambulance services have been around for decades, the
          current system needs an upgrade to cater to the growing population and
          the complexities of modern-day healthcare. This is where our medical
          care and ambulance app comes into play. Our app is a one-stop solution
          for all medical emergencies, providing users with instant access to
          ambulance services and healthcare providers. With the app, users can
          quickly and easily book an ambulance, get instant updates on its
          location, and communicate with medical professionals to ensure that
          they receive timely and efficient care. This eliminates the need for
          users to waste precious time searching for ambulance services and
          healthcare providers, which can be critical in life-threatening
          situations. We understand the financial burden that medical
          emergencies can impose on individuals and families. Hence, we have
          developed our app to ensure that our services are accessible to
          everyone, regardless of their financial status. Another significant
          advantage of our app is the increased efficiency it provides in
          medical emergencies. Our app utilizes advanced technologies such as
          GPS tracking and real-time communication to ensure that users receive
          timely and efficient care. This can be particularly critical in
          situations where time is of the essence, such as heart attacks,
          strokes, or accidents. Overall, our medical care and ambulance app is
          an essential tool for modern-day healthcare. It is not just a business
          venture; it is a commitment to the betterment of society and the
          enhancement of healthcare services worldwide.
        </p>
      </section>

      <div className="video-preview">

        <iframe
          width="420"
          height="800"
          src="https://www.youtube.com/embed/xgiuiCHF4D8"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>

      <footer>
        <span className="copyright">©Amber</span>
        <div className="left">
            <a href="https://github.com/Teamexe/Amber" target="--blank">       
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
        </div>
      </footer>
    </div>
  );
};
export default About;
