import ImageColumn from '../Hooks/Calendary/ImageColumn';
import CalendarColumn from '../Hooks/Calendary/CalendarColumn';
import ActivitiesColumn from '../Hooks/Calendary/ActivitiesColumn';

// Main Component - larger overall size
const ProfileCalendar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tbc-primarybrown-200 p-12">
      <div className="max-w-[90rem] mx-auto bg-tbc-primarybrown-200  p-10 flex">
        <ImageColumn />
        <CalendarColumn />
        <ActivitiesColumn
            selectedDayBg="#738755"
            selectedDayText="white"
            arrowColor='#738755'
            dayBg="#D0D7C2"
            dayText="black"
            activityBg="#957F74"
            activityHoverBg="#AD947D"
            activityText="white"
          />
      </div>
    </div>
  );
};

export default ProfileCalendar;
