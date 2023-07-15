import React from "react";
import Image from "next/image";
import Ghost from "../assets/ghost1.png";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { timelineItemClasses } from "@mui/lab/TimelineItem";


const Chandigarh = () => {
  return (
    <div className="p-20">
      <div className="flex">
        <div data-aos="zoom-in-right" data-aos-duration="1500" className="space-y-4 mr-10">
          <p>Wrong with self-improvement & how we&apos;re fixing it.</p>
          <h1 className="text-4xl font-bold">Self-improvement. Ugh.</h1>
        </div>
        <Image
          data-aos="fade-left"
          className="w-20"
          src={Ghost}
          alt="ghost"
        />
      </div>
      <div data-aos="fade-up" className=" m-10 h-[500px] overflow-y-scroll scroll-smooth no-scrollbar">
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 2,
            },
          }}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">It&apos;s not as easy as 1-2-3</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
              <TimelineConnector sx={{ bgcolor: "secondary.main", height: "120px" }} />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot color="secondary" />
            </TimelineSeparator>
            <TimelineContent>
              <div>
                <h1 className="font-bold mb-2">Old habbits are hard to break.</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default Chandigarh;