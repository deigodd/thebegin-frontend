import React from 'react';
import { motion } from 'framer-motion';

interface ContentDisplayProps {
    title: string;
    content: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, content }) => {
    return (
        <motion.div 
            className="md:p-8 text-justify bg-white bg-opacity-90 rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.h2 
                className="text-2xl font-serif text-tbc-primarybrown-600 mb-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
            >
                The Begin
            </motion.h2>
            <motion.h2 
                className="text-4xl font-serif font-bold text-tbc-primarybrown-500 mb-6"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.3 }}
            >
                {title}
            </motion.h2>
            <motion.p 
                className="text-gray-700 text-lg leading-relaxed whitespace-pre-line"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
            >
                {content}
            </motion.p>
        </motion.div>
    );
};

export default ContentDisplay;

