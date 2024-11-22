// components/ContentDisplay.tsx
import React from 'react';

interface ContentDisplayProps {
    title: string;
    content: string;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ title, content }) => {
    return (
        <div className="p-24 h-full bg-white shadow-md">
            <h2 className="text-2xl font-serif text-tbc-primarybrown-600 mb-4">The Begin</h2>
            <h2 className="text-4xl font-serif font-bold text-tbc-primarybrown-500 mb-4">{title}</h2>
            <p className="text-gray-700 text-lg">{content}</p>
        </div>
    );
};

export default ContentDisplay;
