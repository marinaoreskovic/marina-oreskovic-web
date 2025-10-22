import { dataCounter } from "@/data";
import CountUp from "react-countup";

const CounterServices = () => {
  return (
    <div className="grid justify-between max-w-3xl grid-cols-2 gap-4 mx-auto my-8 md:flex md:grid-cols-4 md:gap-6">
      {dataCounter.map(
        ({ id, endCounter, text, lineRight, lineRightMobile }) => (
          <div key={id} className={lineRight ? "ltr" : ""}>
            <div
              className={[
                "px-4",
                lineRight ? "md:border-e md:border-gray-300" : "",
                lineRightMobile ? "border-e border-gray-300 md:border-0" : "",
              ].join(" ")}
            >
              <p className="flex items-baseline mb-1 text-2xl md:text-4xl font-extrabold text-black tabular-nums">
                <span className="mr-1">+</span>
                <CountUp end={endCounter} start={0} duration={5} />
              </p>
              <p className="text-xs md:text-sm uppercase max-w-[140px] text-black-700 tracking-wide">
                {text}
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default CounterServices;
