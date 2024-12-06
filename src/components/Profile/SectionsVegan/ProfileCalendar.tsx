import ImageColumn from '../Hooks/Calendary/ImageColumn';
import CalendarColumn from '../Hooks/Calendary/CalendarColumn';
import ActivitiesColumn from '../Hooks/Calendary/ActivitiesColumn';

// Main Component - larger overall size
const ProfileCalendar = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-tbc-primarybrown-200">
      <div className="max-w-[90rem] mx-auto bg-tbc-primarybrown-200 p-6 sm:p-10 flex flex-wrap gap-6 sm:gap-12">
        {/* Image Column */}
        <div className="w-full sm:w-1/3 lg:w-1/4 xl:w-1/5 mx-auto">
          <ImageColumn />
        </div>
          <CalendarColumn />

        {/* Activities Column */}
        <div className="w-full sm:w-1/3 lg:w-1/3 xl:w-1/3 mx-auto">
          <ActivitiesColumn
            selectedDayBg="#738755"
            selectedDayText="white"
            dayBg="#D0D7C2"
            dayText="black"
            activityBg="#957F74"
            activityHoverBg="#AD947D"
            activityText="white"
            arrowColor='#AD947D'
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCalendar;
