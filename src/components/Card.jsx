import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div
            className="w-[80vw]  max-w-[437px] aspect-[437/680] bg-[#232323] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${CardVector})` }}
        >
            <div className="relative flex flex-col justify-between items-center w-full h-full p-4 sm:p-8">
                {/* Title Section */}
                <div className="w-[90%]">
                    <h2 className="text-[#F6F6F6] font-bold text-[5vw] sm:text-[28px] leading-tight break-words">
                        {data.text}
                    </h2>
                </div>

                {/* Image Section */}
                <div className="absolute  bottom-0 left-0 right-0 flex justify-center">
                    <img
                        src={data.img}
                        alt={data.alt || "Card image"}
                        className="w-[100%]  h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
