import React from "react";
import SideNav from "../components/SideNav";
import Button from "../components/Button";
import TaskCard from "../components/TaskCard";

const MainPage: React.FC = () => {
  return (
    <div className="flex mt-5 gap-10">
      <div className=" w-1/5">
        <SideNav />
      </div>
      <div className="w-4/5 inline-flex flex-col m-2">
        <div className="inline-flex flex-col items-start gap-6 mb-5">
          <h2 className=" font-serif text-2xl font-semibold">
            Tasks of the day
          </h2>
        </div>
        <div className=" flex items-start gap-3">
          <Button>Not Going</Button>
          <Button>Ongoing</Button>
          <Button>Scheduled</Button>
          <Button>Completed</Button>
          <Button>Delayed</Button>
          <Button>Ontime</Button>
        </div>
        <TaskCard />
      </div>
    </div>
  );
};

export default MainPage;
