import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../UesrContext";
import { BiCheck } from "react-icons/bi";

const allEvents: EventData[] = [
  {
    event: "Hack Club Boston Day's of Service Organizer",
    dateTime: "March 27, 7am-9pm",
    address: "265 Beaver Street, Plainville, MA",
    orgName: "Zach Latta",
    orgEmail: "Lattaz@hackclub.org",
    numVolunteers: "11",
    description:
      "The event will start at 9, but be there to set up at 7. You will teach Girl Scouts how to identify a problem in their community, devise a solution, and implement technology to solve the problem. There will be around 40 Girl Scouts interested in learning about Computer Science.",
    chosen: false,
  },
  {
    event: "Massachusetts Math Team Finals",
    dateTime: "April 3, 8am-4pm",
    address: "145 Pond Street, Mansfield, MA",
    orgName: "Todd Smith",
    orgEmail: "smitht@gmail.com",
    numVolunteers: "8-10",
    description:
      "Help proctor the Massachusetts State Math Team Competition. Volunteers must walk around the room, collect sheets, and grade math team material.",
    chosen: false,
  },
  {
    event: "Youth Tennis Instructor",
    dateTime: "April 8, 3:00pm-4:30pm",
    address: "800 Chestnut Street, Franklin",
    orgName: "Miguel Cura",
    orgEmail: "Miguelc@adk.com",
    numVolunteers: "4",
    description:
      "Meet 15 minutes early at the Adirondack Club in Franklin. Volunteers will help teach classes with up to 10 students from grades 4-6. You must bring your own racket.",
    chosen: false,
  },
  {
    event: "RoboFest: A Celebration of Innovation",
    dateTime: "June 15, 10:00am-4:00pm",
    address: "Tech Hub Convention Center, 567 Innovation Avenue, Techville, MA",
    orgName: "Rachel Chen",
    orgEmail: "rachel.chen@gmail.com",
    numVolunteers: "20",
    description:
      'Gear up for an action-packed day of robotics excitement at "RoboFest: A Celebration of Innovation"! Hosted by the Robotics Club, this event invites enthusiasts of all ages to witness the cutting-edge creations and ingenious designs from our talented members. From autonomous drones to intricate humanoid robots, explore the forefront of technological innovation through live demonstrations, interactive workshops, and thrilling competitions. Join us for a day filled with robotic marvels and inspire the innovator within!',
    chosen: false,
  },
];

const Event = () => {
  const [notification, setNotification] = useState<string>("");
  const [events, setEvents] = useState<EventData[]>(allEvents);

  return (
    <div>
      <h1 className="text-center font-bitter font-bold text-xl mt-12 mb-2">
        Possible Events for You:
      </h1>
      <ul className="mx-40 gap-2">
        {events.map((event) => (
          <div className="bg-white shadow-md rounded-lg p-8 font-bitter mb-5">
            <div className="flex">
              <div className="grow">
                <p>
                  <b>Event:</b> {event.event}
                </p>
                <p>
                  <b>Date & Time:</b> {event.dateTime}
                </p>
                <p>
                  <b>Address:</b> {event.address}
                </p>
                <p>
                  <b>Organizer Name:</b> {event.orgName}
                </p>
                <p>
                  <b>Organizer Email:</b> {event.orgEmail}
                </p>
                <p>
                  <b>Number of Volunteers:</b> {event.numVolunteers}
                </p>
              </div>
              <div>
                {!event.chosen ? (
                  <button
                    onClick={() => {
                      setEvents((prevEvents) => {
                        const newEvents = prevEvents.map((prevEvent) => {
                          if (prevEvent.event === event.event) {
                            return { ...prevEvent, chosen: true };
                          } else {
                            return prevEvent;
                          }
                        });

                        return newEvents;
                      });
                    }}
                    className="bg-[#fc8d06] hover:bg-[#ff9a1e] active:bg-[#dc7b04] duration-200 px-6 py-3 text-xl rounded-md"
                  >
                    Choose Event
                  </button>
                ) : (
                  <button
                    disabled
                    className="bg-gray-200 px-6 py-3 text-xl rounded-md flex gap-2 items-center"
                  >
                    <div className="p-1 bg-green-500 rounded-full">
                      <BiCheck color="white" />
                    </div>
                    Signed Up!
                  </button>
                )}
              </div>
            </div>
            <p>
              <b>Description:</b> {event.description}
            </p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Event;
