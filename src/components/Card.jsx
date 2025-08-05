import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div
            className="w-full md:max-w-[56vh]  max-w-[437px] md:aspect-[437/610] lg:aspect-[437/660] aspect-[437/660] m-auto bg-[#232323] bg-center bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${CardVector})` }}
        >
            <div className="relative flex flex-col justify-between items-center w-full h-full p-4 sm:p-8">
                {/* Title Section */}
                <div className="w-[90%] z-10">
                    <h2 className="text-[#F6F6F6] lg:text-[28px] md:text-[3.4vw] font-bold text-[22px] sm:text-[28px] leading-[1.5] md:leading-[1.5] md:break-words break-words">
                        {data.text}
                    </h2>
                </div>

                {/* Image Section */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-center z-0">
                    <img
                        src={data.img}
                        alt={data.alt || "Card image"}
                        loading="eager"
                        className="w-[120%] lg:w-[100%] md:w-[95%] block sm:w-[100%] h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}
