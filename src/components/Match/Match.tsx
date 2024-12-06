"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MatchGrid } from "./MatchGrid";
import { ProfileDialog } from "./MatchGrid";
import { User, MOCK_USERS } from "../../types/User";

interface MatchProps {
  searchQuery: string;
}

const MatchesPage: React.FC<MatchProps> = ({ searchQuery }) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [users, setUsers] = useState(MOCK_USERS);

  useEffect(() => {
    if (searchQuery) {
      const filteredUsers = MOCK_USERS.filter((user) =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setUsers(filteredUsers);
    } else {
      setUsers(MOCK_USERS);
    }
  }, [searchQuery]);

  const handleIgnore = (userId: string) => {
    setUsers(users.filter((user) => user.id !== userId));
    setSelectedUser(null);
  };

  const handleMatch = (userId: string) => {
    window.location.href = `/profile/${userId}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4"
    >
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-tbc-pilarbrown-600 text-2xl font-serif font-bold my-6"
      >
        Nuevos Matches
      </motion.h1>

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
    </motion.div>
  );
};

export default MatchesPage;

