import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div
            className="w-full max-w-[437px] h-[75.56vh] m-auto bg-[#232323] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${CardVector})` }}
        >
            <div className="relative flex  flex-col justify-between items-center  h-full p-[4.3%] sm:p-8">
                {/* Title Section */}
                <div className="w-[90%] z-10">
                    <h2 className="text-[#F6F6F6] font-bold text-[125%] sm:text-[28px] leading-[1.25] break-words">
                        {data.text}
                    </h2>
                </div>

                {/* Image Section */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
                    <img
                        src={data.img}
                        alt={data.alt || "Card image"}
                        loading="eager"
                        className="w-[110%] sm:w-[90%] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
