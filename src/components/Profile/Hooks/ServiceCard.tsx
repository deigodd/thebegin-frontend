import { ServiceCardData } from "../../../data/ProjectsData";

interface ServiceCardProps {
    data: ServiceCardData;
    className?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ data }) => {
    const { title, image } = data;

    return (
        <div className="relative overflow-hidden shadow-md bg-[#f3f0ea] border border-[#d8d4ce] transition-transform hover:scale-105">
            <div className="aspect-square relative  ">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 rounded-md"
                />
                <div className="absolute inset-0 bg-tbc-secondarygreen-600 group-hover:bg-white/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <h3 className="text-[#FFFFFF] text-center text-mb font-light tracking-wider">
                        {title.toUpperCase()}
                    </h3>
                </div>
            </div>
        </div>
    );
};