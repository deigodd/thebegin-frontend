"use client";

import { useState, useEffect } from "react";
import { MatchGrid } from "./MatchGrid";
import { ProfileDialog } from "./MatchGrid";
import { User, MOCK_USERS } from "../../types/User";

interface MatchProps {
  searchQuery: string; // Adding searchQuery as a prop
}

const MatchesPage: React.FC<MatchProps> = ({ searchQuery }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState(MOCK_USERS);

  useEffect(() => {
    // Filter users based on the search query whenever it changes
    if (searchQuery) {
      const filteredUsers = MOCK_USERS.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUsers(filteredUsers);
    } else {
      setUsers(MOCK_USERS); // Reset to all users if no search query
    }
  }, [searchQuery]); // Re-run the effect when searchQuery changes

  const handleIgnore = (userId: string) => {
    setUsers(users.filter(user => user.id !== userId));
    setSelectedUser(null);
  };

  const handleMatch = (userId: string) => {
    // Handle navigation, you can replace this with your preferred routing solution
    window.location.href = `/profile/${userId}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold my-6">Nuevos Matches</h1>

      <MatchGrid
        users={users}
        onSelectUser={setSelectedUser}
        onIgnore={handleIgnore}
        onMatch={handleMatch}
      />

      <ProfileDialog
        user={selectedUser}
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        onIgnore={handleIgnore}
        onMatch={handleMatch}
      />
    </div>
  );
};

export default MatchesPage;
