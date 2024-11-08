export const SectionTitle = ({ 
    title, 
    iconColor 
  }: { 
    title: string; 
    iconColor: string;
  }) => (
    <div className="flex items-center mb-6">
      <div className={`w-8 h-8 ${iconColor} rounded-full flex items-center justify-center mr-3`}>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      </div>
      <h2 className={`text-2xl font-bold ${iconColor.replace('bg-', 'text-')}`}>{title}</h2>
    </div>
);