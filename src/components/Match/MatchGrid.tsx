import { motion, AnimatePresence } from "framer-motion";
import { User } from "../../types/User";
import { MatchCard } from "./MatchCard";

interface MatchGridProps {
  users: User[];
  onSelectUser: (user: User) => void;
  onIgnore: (userId: string) => void;
  onMatch: (userId: string) => void;
}

interface ProfileDialogProps {
  user: User | null;
  isOpen: boolean;
  onClose: () => void;
  onIgnore: (userId: string) => void;
  onMatch: (userId: string) => void;
}

export const MatchGrid = ({ users, onSelectUser, onIgnore, onMatch }: MatchGridProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-2 bg-tbc-primaryyellow-100 rounded-2xl md:grid-cols-3 lg:grid-cols-4 gap-4 p-4"
    >
      <AnimatePresence>
        {users.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <MatchCard
              user={user}
              onSelect={onSelectUser}
              onIgnore={onIgnore}
              onMatch={onMatch}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export const ProfileDialog = ({ user, isOpen, onClose, onIgnore, onMatch }: ProfileDialogProps) => {
  if (!user || !isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="relative">
              <div
                className="w-full aspect-video bg-cover bg-center"
                style={{ backgroundImage: `url(${user.profileImage})` }}
              />

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
              >
                ✕
              </motion.button>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center gap-3">
                <div>
                  <h2 className="text-2xl font-bold">{user.name}</h2>
                  <div className="flex items-center gap-2 text-gray-600">
                    <span>{user.age} años</span>
                    <span>•</span>
                    <span>{user.location}</span>
                    {user.countryCode && (
                      <img
                        src={`https://flagcdn.com/24x18/${user.countryCode.toLowerCase()}.png`}
                        alt={user.nationality}
                        className="h-4"
                      />
                    )}
                  </div>
                </div>
              </div>

              {user.bio && (
                <div>
                  <h3 className="font-medium mb-2">Sobre mí</h3>
                  <p className="text-gray-700">{user.bio}</p>
                </div>
              )}

              {user.interests && user.interests.length > 0 && (
                <div>
                  <h3 className="font-medium mb-2">Intereses</h3>
                  <div className="flex flex-wrap gap-2">
                    {user.interests.map((interest) => (
                      <motion.span
                        key={interest}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 bg-[#FFE4D1] text-black rounded-full text-sm"
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 pt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onIgnore(user.id);
                    onClose();
                  }}
                  className="flex-1 py-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium"
                >
                  Ignorar
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    onMatch(user.id);
                    onClose();
                  }}
                  className="flex-1 py-3 rounded-full bg-[#a56441] text-white hover:bg-[#D98355] transition-colors font-medium"
                >
                  Match
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

