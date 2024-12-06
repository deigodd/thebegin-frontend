import { motion } from "framer-motion";
import { User } from "../../types/User";

interface MatchCardProps {
  user: User;
  onSelect: (user: User) => void;
  onIgnore: (userId: string) => void;
  onMatch: (userId: string) => void;
}

export const MatchCard = ({ user, onSelect }: MatchCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-xl overflow-hidden bg-white shadow-lg"
    >
      <motion.div
        className="w-full aspect-[4/5] bg-cover bg-center cursor-pointer"
        style={{ backgroundImage: `url(${user.profileImage})` }}
        onClick={() => onSelect(user)}
        whileHover={{ filter: "brightness(1.1)" }}
      />

      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{user.name}</h3>
            <span className="text-lg text-gray-500">{user.age}</span>
            {user.countryCode && (
              <img
                src={`https://flagcdn.com/24x18/${user.countryCode.toLowerCase()}.png`}
                alt={user.nationality}
                className="h-4 ml-auto"
              />
            )}
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{user.bio}</p>
        </div>
      </div>
    </motion.div>
  );
};

