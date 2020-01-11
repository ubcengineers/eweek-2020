import * as React from "react";

import About from "../components/content/About";
import Contact from "../components/form/Contact";
import Event from "src/components/content/Event";
import ButtonRow from "src/components/content/ButtonRow";

export default () => {
  return (
    <div className="fadein">
      <About color="full blue">
        <h1>Schedule</h1>
        <Event name="" description="" scores={["1st", "2nd", "3rd"]} />
        <h2>Sunday</h2>
        <Event
          name="Opening ceremonies"
          description="10 PM - 12 AM / ESC"
          scores={["-", "-", "-"]}
        />
        <h2>Monday</h2>
        <Event
          name="Red Eye Breakfast"
          description="8 AM - 10 AM / ESC"
          scores={[]}
        />
        <Event
          name="Smash Tourney!"
          description="12 PM - 2 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <Event
          name="Trivia"
          description="4 PM - 5 PM / KAIS 2020"
          scores={["-", "-", "-"]}
        />
        <Event
          name="fEUSball"
          description="6 PM - 8 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <h2>Tuesday</h2>
        <Event
          name="PP Breakfast"
          description="8 AM - 10 AM / ESC"
          scores={[]}
        />
        <Event
          name="Chariot Racing"
          description="1 PM - 4 PM  / Main Mall"
          scores={["-", "-", "-"]}
        />
        <Event
          name="Pong"
          description="5:30 PM - 7:30 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <Event
          name="Pit Purge"
          description="8 PM - 12 AM / The Pit"
          scores={[]}
        />
        <h2>Wednesday</h2>
        <Event
          name="Dodgeball"
          description="10 AM - 12 PM / Great Hall"
          scores={["-", "-", "-"]}
        />
        <Event name="AGM" description="2 PM - 3 PM / KAIS 2020" scores={[]} />
        <Event
          name="Movie Roast-A-Thon"
          description="4 PM - 6:30 PM / SWNG 222"
          scores={["-", "-", "-"]}
        />
        <Event
          name="4 Legged Race"
          description="8 PM - 10 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <h2>Thursday</h2>
        <Event
          name="True Engineer"
          description="11 AM - 1 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <Event
          name="Old Red New Red"
          description="6 PM - 9 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <h2>Friday</h2>
        <Event
          name="Cooking with Beer"
          description="11 AM - 1 PM / ESC"
          scores={["-", "-", "-"]}
        />
        <Event
          name="filmfEUSt"
          description="3:30 PM - 6 PM / SWNG 221"
          scores={["-", "-", "-"]}
        />
        <Event
          name="Red Night"
          description="8 PM - 2 AM / ESC"
          scores={["-", "-", "-"]}
        />
        <h2>Saturday</h2>
        <Event
          name="100th Engineer's Ball"
          description="6 PM - 12 AM / Hellenic Community Centre"
          scores={[]}
        />
        <ButtonRow
          buttons={[
            {
              link:
                "https://calendar.google.com/calendar/embed?src=7siv1nug7eps8tkcrcrd4doqjo%40group.calendar.google.com&ctz=America%2FVancouver",
              logo: "fas fa-calendar-alt",
              title: "Download Calendar"
            }
          ]}
        />
      </About>
      <About color="full red">
        <Contact />
      </About>
    </div>
  );
};
