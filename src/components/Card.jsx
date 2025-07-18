import CardVector from "../assets/Card-Vector.svg";

export default function Card({ data }) {
    return (
        <div className="relative bg-[#232323]  w-full max-w-md overflow-hidden rounded-md">
            {/* Background image wrapper */}
            <div
                className="
          bg-cover bg-no-repeat w-full p-5 flex flex-col justify-between relative
          pb-[120px] /* bottom padding for image */
          min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] 
        "
                style={{ backgroundImage: `url(${CardVector})` }}
            >
                {/* Text content */}
                <div>
                    <p
                        className="
              text-[#F6F6F6] text-start w-full py-3 font-hubot leading-tight 
              text-lg sm:text-xl md:text-3xl font-medium break-words
            "
                    >
                        {data.text}
                    </p>
                </div>

                {/* Bottom image sticks to bottom */}
                <div
                    className="
            flex justify-center absolute bottom-0 left-0 right-0 
            px-5 items-end
          "
                    style={{ maxHeight: "40%" }}
                >
                    <img
                        src={data.img}
                        alt="screenshot"
                        className="max-w-full h-auto sm:h-[50vh] object-contain"
                        loading="lazy"
                        style={{ maxHeight: "100%" }}
                    />
                </div>
            </div>
        </div>
    );
}
