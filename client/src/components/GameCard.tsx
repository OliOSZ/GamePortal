interface GameCardProps {
    title: string;
    image: string;
    link: string;
}

export default function GameCard({ title, image, link }: GameCardProps) {
    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-transform transform hover:-translate-y-1 text-center">
            <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-2">{title}</h3>
            <a href={link} className="inline-block bg-yellow-400 text-white px-4 py-2 rounded-full mt-2 mb-4"> Spill </a>
        </div>
    );
}