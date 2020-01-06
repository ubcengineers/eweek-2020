import * as React from "react";

import About from "../components/content/About";
import ButtonRow from "../components/content/ButtonRow";
import Hero from "../components/content/Hero";
import YouTube from "../components/content/YouTube";
import Contact from "../components/form/Contact";

import logo from "../assets/logo.png";

export default () => {
  return (
    <div className="fadein">
      <Hero logo={logo} subtitle="january 19th - 25th" />
      <About color="blue">
        <p>
          E-Week is right around the corner!!! Get ready for a jam-packed week
          of fun hosted by the EUS team. Join your department’s team in the
          fight to win bragging rights and the coveted E-Week trophy!! Don’t
          worry if your a first year or not in a department you’re all one huge
          team!! Get excited for all the events, this year there’s a new one:
          Smash tournament!!
        </p>
        <ButtonRow
          buttons={[
            {
              link: "schedule",
              logo: "fas fa-calendar-alt",
              title: "Schedule"
            }
          ]}
        />
      </About>
      <About color="full blue">
        <h1>Important links</h1>
        <ButtonRow
          buttons={[
            {
              link: "https://forms.gle/QZSCiCAA14YytNuw8",
              logo: "fas fa-barcode",
              title: "Get participation points"
            },
            {
              link: "https://forms.gle/DGbwzyt8vQcY19v88",
              logo: "fas fa-hands-helping",
              title: "Volunteer"
            },
            {
              link: "https://forms.gle/o76uYq9y7wkqgyqFA",
              logo: "fas fa-ticket-alt",
              title: "Go to Old Red New Red"
            },
            {
              link: "e-ball",
              logo: "fas fa-ticket-alt",
              title: "Go to E-Ball"
            }
          ]}
        />
      </About>
      <About color="full yellow">
        <h1>Get hyped</h1>
        <YouTube src="https://www.youtube.com/embed/DGIT3Zgy7bc?controls=0&modestbranding=1&rel=0&showinfo=0" />
      </About>
      <About color="full red">
        <Contact />
      </About>
    </div>
  );
};
