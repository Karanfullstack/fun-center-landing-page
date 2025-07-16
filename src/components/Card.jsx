import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div className="relative bg-[#232323] w-full max-w-md overflow-hidden">
            {/* Background image wrapper */}
            <div
                className="bg-cover bg-no-repeat w-full h-full p-5 flex flex-col justify-between min-h-[500px] sm:min-h-[620px] relative pb-[120px]"
                style={{ backgroundImage: `url(${CardVector})` }}
            >
                {/* Text content */}
                <div>
                    <p className="text-[#F6F6F6] text-start w-full py-3 font-hubot leading-tight text-2xl sm:text-3xl font-medium break-words">
                        {data.text}
                    </p>
                </div>

                {/* Bottom image always sticks to bottom with horizontal padding */}
                <div className="flex justify-center absolute bottom-0 left-0 right-0 px-5  items-end">
                    <img
                        src={data.img}
                        alt="screenshot"
                        className="max-w-[90%] h-auto object-contain"
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    );
}
