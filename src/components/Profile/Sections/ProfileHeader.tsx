import React, { useEffect, useState } from 'react';

interface UserProfile {
  name: string;
  image: string;
  role: string;
}

const ProfileHeader: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Sofía Monteverde', // Nombre fijo
    image: 'https://lh3.googleusercontent.com/pelsDJaccSJIJBNMCsrXAJpC3A0AMdY53PXs6uYjfP_YwDj64thnVVHxNiuvTDp07xYFzPvFs95VVv_4N4upBTmx45NM8-IhTuBKBrAPfndn19XtXNA-79TpyIs7PoPYYEHv23Uy',
    role: 'Fotógrafa',
  });
  const [editingRole, setEditingRole] = useState(false);

  useEffect(() => {
    const savedImage = localStorage.getItem('profileImage');
    const savedRole = localStorage.getItem('userRole');

    setUserProfile((prevProfile) => ({
      ...prevProfile,
      image: savedImage || prevProfile.image,
      role: savedRole || prevProfile.role,
    }));
  }, []);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const result = reader.result as string;
        setUserProfile((prevProfile) => ({ ...prevProfile, image: result }));
        localStorage.setItem('profileImage', result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRoleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserProfile((prevProfile) => ({ ...prevProfile, role: event.target.value }));
    localStorage.setItem('userRole', event.target.value);
  };

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.5) 50%, rgba(200, 200, 200, 0.5) 50%), url(/path/to/header-background.jpg)`,
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-white bg-opacity-60 rounded-lg p-8 max-w-sm w-full text-center shadow-lg">
        <div className="relative w-full mb-4 group">
          <img src={userProfile.image} alt="Instructor" className="rounded-lg w-full object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <label className="text-white cursor-pointer">
              Cambiar imagen de perfil
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{userProfile.name}</h1>
        <div className="relative">
          {editingRole ? (
            <input
              type="text"
              value={userProfile.role}
              onChange={handleRoleChange}
              onBlur={() => setEditingRole(false)}
              className="text-lg font-semibold text-gray-600 text-center border border-gray-300 rounded p-1 w-full"
              autoFocus
            />
          ) : (
            <h2
              className="text-lg font-semibold text-gray-600 cursor-pointer"
              onClick={() => setEditingRole(true)}
            >
              {userProfile.role}
            </h2>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfileHeader;
