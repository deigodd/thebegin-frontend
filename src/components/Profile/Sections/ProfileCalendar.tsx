
import CalendarColumn from '../Hooks/Calendary/CalendarColumnTemplate2';
import ActivitiesColumn from '../Hooks/Calendary/ActivitiesColumn';
import bg from "../../../assets/backgroundProfile/calendarBgP1.jpg";
import Background from '../Hooks/BackgroundImage';

const ProfileCalendar = () => {
  return (
    <Background imageUrl={bg} overlayOpacity={0.4} overlayColor="black">
      <section className="min-h-screen flex items-center justify-center p-10">
        <div className="max-w-[90rem] flex flex-col lg:flex-row w-full lg:max-w-[900px] ">
          {/* Calendario */}
          <div className="flex-1 h-auto lg:h-5/6 flex justify-center">
            <CalendarColumn />
          </div>

          {/* Activities */}
          <div className="flex-1 bg-[#504c4c] bg-opacity-70 p-5 mt-10">
            <ActivitiesColumn
              selectedDayBg="#282c2c"
              selectedDayText="white"
              arrowColor='white'
              dayBg="#5d6062"
              dayText="white"
              activityBg="#282c2c"
              activityHoverBg="#8c8c94"
              activityText="white"
            />
          </div>
        </div>
      </section>
    </Background>
  );
};

export default ProfileCalendar;
