import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Type for each activity
interface Activity {
    time: string;
    name: string;
  }
  
  // Type for the activitiesByDay object
  interface ActivitiesByDay {
    [key: number]: Activity[];
  }

const ActivitiesColumn = () => {
    const [selectedDay, setSelectedDay] = useState<number>(13);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
  
    // Activities for different days
    const activitiesByDay: ActivitiesByDay = {
      10: [
        { time: "08 a 10 hs", name: "Taller: Introducción al jardín" },
        { time: "14 a 16 hs", name: "Curso: Plantas de interior" },
        { time: "18 a 20 hs", name: "Charla: Riego eficiente" },
      ],
      11: [
        { time: "09 a 11 hs", name: "Taller: Cultivo de hierbas" },
        { time: "15 a 17 hs", name: "Curso: Jardinería básica" },
      ],
      12: [
        { time: "10 a 12 hs", name: "Charla: Plantas medicinales" },
        { time: "16 a 18 hs", name: "Taller: Huerta orgánica" },
      ],
      13: [
        { time: "07 a 09 hs", name: "Taller: Cultivo de aromáticas y especias" },
        { time: "09 a 11 hs", name: "Charla: Calendario de siembra" },
        { time: "13 a 15 hs", name: "Curso: Cocina saludable" },
        { time: "17 a 18 hs", name: "Charla: Huerto libre de plagas" },
        { time: "19 a 21 hs", name: "Taller: Compost y compostaje" },
        { time: "19 a 21 hs", name: "Taller: Macetas pintadas" },
      ],
      14: [
        { time: "11 a 13 hs", name: "Curso: Diseño de jardines" },
        { time: "15 a 17 hs", name: "Taller: Bonsái para principiantes" },
        { time: "19 a 21 hs", name: "Charla: Flores de temporada" },
      ],
    };

    const handleDayChange = (day: number) => {
        setIsAnimating(true);
        setSelectedDay(day);
        setTimeout(() => setIsAnimating(false), 500);
      };
    
      return (
        <div className="w-[28rem]">
          <div className="flex items-center justify-between mb-8">
            <ChevronLeft className="w-8 h-8 text-[#738755] cursor-pointer" />
            <div className="flex gap-2">
              {[10, 11, 12, 13, 14].map((day) => (
                <div
                  key={day}
                  onClick={() => handleDayChange(day)}
                  className={`px-5 py-3 rounded cursor-pointer transition-all duration-300 ${
                    day === selectedDay
                      ? "bg-[#738755] text-white scale-105"
                      : "bg-[#D0D7C2] text-gray-700 hover:bg-green-100"
                  }`}
                >
                  <div className="text-base">{day}</div>
                  <div className="text-sm">ABRIL</div>
                </div>
              ))}
            </div>
          <ChevronRight className="w-8 h-8 text-[#738755] cursor-pointer" />
        </div>
    
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedDay}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-3"
            >
              {activitiesByDay[selectedDay].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-[#957F74] p-5 hover:bg-[#AD947D] transition cursor-pointer"
                >
                  <div className="text-base text-white">{activity.time}</div>
                  <div className="text-lg text-white">{activity.name}</div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      );
    };

export default ActivitiesColumn;