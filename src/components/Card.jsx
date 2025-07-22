import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div className="relative bg-[#232323] sm:px-2 sm:pb-0 sm:p-[2rem] w-full max-w-md overflow-hidden">
            <div
                className="
                    bg-cover bg-no-repeat w-full p-5 flex flex-col justify-between relative
                    pb-[50%] min-h-[450px] sm:min-h-[550px] md:min-h-[600px]
                "
                style={{ backgroundImage: `url(${CardVector})` }}
            >
                {/* Text */}
                <div className="z-10 sm:w-[373px] sm:leading-[125%]">
                    <p
                        className="
                        text-[#F6F6F6] text-start w-full py-3 font-hubot leading-tight 
                        text-lg sm:text-xl md:text-[1.75rem] font-[700] break-words
                    "
                    >
                        {data.text}
                    </p>
                </div>

                {/* Bottom Image */}
                <div
                    className="absolute bottom-0 left-0 right-0 px-5 flex justify-center items-end"
                    style={{ height: "70%" }} // Now 50% of the card height
                >
                    <img
                        src={data.img}
                        alt="screenshot"
                        className="w-auto max-w-full h-full max-h-[300px] sm:max-h-[350px] md:max-h-[400px] object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
