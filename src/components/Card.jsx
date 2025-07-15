import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data, index }) {
    return (
        <div className="relative bg-[#232323] w-full max-w-md  overflow-hidden">
            {/* Background image wrapper */}
            <div
                className="bg-cover bg-no-repeat w-full h-full p-5 flex flex-col justify-between min-h-[550px] sm:min-h-[670px]"
                style={{ backgroundImage: `url(${CardVector})` }}
            >
                {/* Text content */}
                <div>
                    <p className="text-[#F6F6F6] text-start w-full py-3 font-hubot leading-tight text-2xl sm:text-3xl font-medium break-words">
                        {data.text}
                    </p>
                </div>

                {/* Bottom image with space only on small screens */}
                <div className="flex justify-center mt-6 sm:mt-0">
                    <img
                        src={data.img}
                        alt="screenshot"
                        className="max-w-full h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
