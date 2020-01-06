import * as React from "react";

import About from "../components/content/About";
import Contact from "../components/form/Contact";
import ButtonRow from "src/components/content/ButtonRow";
import Hero from "src/components/content/Hero";

import ball from "../assets/ball.png";

export default () => {
  return (
    <div className="fadein">
      <About color="white">
        <Hero logo={ball} subtitle="Saturday January 25th, 2020" />
        <p>
          Come to the 100th annual EUS Engineers' Ball to celebrate the end of
          E-Week 2020 and to learn which department takes the ultimate victory!
          The evening will start with a catered dinner, followed by an awards
          ceremony for all the major events of E-Week, and end with a dance.
          Drinks are $2 all night. Don't miss the photobooth by Star Speed!
        </p>
        <ButtonRow
          buttons={[
            {
              title: "Buy your ticket",
              link:
                "https://www.showpass.com/100th-annual-engineers-ball/?fbclid=IwAR15d8C0mxbiCVrEExNetytmEEUCa7DDvjFXnZKsYWbbjMc4GeFJWcDoec8",
              logo: "fas fa-ticket-alt"
            }
          ]}
        />
      </About>
      <About color="full blue">
        <h2>TICKETS</h2>
        <p>
          Ticket Price: $35
          <br /> A ticket buys you entry into the venue, a buffet-style meal,
          and table wine followed by a dance and DJ. If you have volunteered for
          7 or more shifts during E-Week 2020, you will receive a partial
          reimbursement after payment!
        </p>
        <h2>MENU</h2>
        <p>
          The dinner is buffet-style, consisting of salads, sides, mains, and
          desserts (with options for dietary restrictions). The main dishes are:
          Roast Beef Mediterranean Penne (Vegan) Sockeye Salmon
        </p>
        <h2>ATTIRE</h2>
        <p>Cocktail/Formal</p>
      </About>
      <About color="full red">
        <Contact />
      </About>
    </div>
  );
};
