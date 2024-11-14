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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {users.map((user) => (
          <MatchCard
            key={user.id}
            user={user}
            onSelect={onSelectUser}
            onIgnore={onIgnore}
            onMatch={onMatch}
          />
        ))}
      </div>
    );
  };

  export const ProfileDialog = ({ user, isOpen, onClose, onIgnore, onMatch }: ProfileDialogProps) => {
    if (!user || !isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
          <div className="relative">
            {/* Imagen de portada */}
            <div 
              className="w-full aspect-video bg-cover bg-center"
              style={{ backgroundImage: `url(${user.profileImage})` }}
            />
            
            {/* Botón de cerrar */}
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-70"
            >
              ✕
            </button>
          </div>
  
          <div className="p-6 space-y-6">
            {/* Encabezado */}
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
  
            {/* Bio */}
            {user.bio && (
              <div>
                <h3 className="font-medium mb-2">Sobre mí</h3>
                <p className="text-gray-700">{user.bio}</p>
              </div>
            )}
  
            {/* Intereses */}
            {user.interests && user.interests.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Intereses</h3>
                <div className="flex flex-wrap gap-2">
                  {user.interests.map((interest) => (
                    <span
                      key={interest}
                      className="px-3 py-1 bg-[#FFE4D1] text-black rounded-full text-sm"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}
  
            {/* Botones de acción */}
            <div className="flex gap-4 pt-4">
              <button
                onClick={() => {
                  onIgnore(user.id);
                  onClose();
                }}
                className="flex-1 py-3 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-50 transition-colors font-medium"
              >
                Ignorar
              </button>
              <button
                onClick={() => {
                  onMatch(user.id);
                  onClose();
                }}
                className="flex-1 py-3 rounded-full bg-[#a56441] text-white hover:bg-[#D98355] transition-colors font-medium"
              >
                Match
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };