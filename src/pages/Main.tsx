import * as React from "react";

import About from "../components/content/About";
import ButtonRow from "../components/content/ButtonRow";
import Hero from "../components/content/Hero";
import YouTube from "../components/content/YouTube";
import Contact from "../components/form/Contact";

import logo from "../assets/logo.png";
import Event from "src/components/content/Event";

export default () => {
  return (
    <div className="fadein">
      <Hero logo={logo} subtitle="january 18th - 23rd" />
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
              logo: "far fa-calendar-alt",
              title: "View Schedule"
            },
            {
              link: "https://forms.gle/QZSCiCAA14YytNuw8",
              logo: "fas fa-poll-h",
              title: "Get participation points"
            },
            {
              link: "https://forms.gle/DGbwzyt8vQcY19v88",
              logo: "fas fa-hands-helping",
              title: "Volunteer"
            },
            {
              link: "e-ball",
              logo: "fas fa-ticket-alt",
              title: "Go to E-Ball"
            }
          ]}
        />
      </About>
      <About color="full blue">
        <h1>Leaderboard</h1>
        <Event name="" description="" scores={["part.", "vol.", "total"]} />
        <Event name="AOESPD" description="" scores={["-", "-", "-"]} />
        <Event name="BME" description="" scores={["-", "-", "-"]} />
        <Event name="CHBE" description="" scores={["-", "-", "-"]} />
        <Event name="CIVL" description="" scores={["-", "-", "-"]} />
        <Event name="FIZZ" description="" scores={["-", "-", "-"]} />
        <Event name="ENVE" description="" scores={["-", "-", "-"]} />
        <Event name="GEOE" description="" scores={["-", "-", "-"]} />
        <Event name="IGEN" description="" scores={["-", "-", "-"]} />
        <Event name="MANU" description="" scores={["-", "-", "-"]} />
        <Event name="MECH" description="" scores={["-", "-", "-"]} />
        <Event name="MINE" description="" scores={["-", "-", "-"]} />
        <Event name="MTRL" description="" scores={["-", "-", "-"]} />
        <Event name="First Year" description="" scores={["-", "-", "-"]} />
      </About>
      <About color="full yellow">
        <h1>Get hyped</h1>
        <YouTube src="https://www.youtube.com/embed/U0NT7_L5my4?controls=0&modestbranding=1&rel=0&showinfo=0" />
      </About>
      <About color="full red">
        <Contact />
      </About>
    </div>
  );
};
