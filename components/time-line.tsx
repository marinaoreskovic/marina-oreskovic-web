import { dataAboutPage } from "@/data";

const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-40 md:pt-20">
        <div className="-my-6">
          {dataAboutPage.map((data) => (
            <div key={data.id} className="relative py-6 pl-8 sm:pl-32 group">
              {/* Título bien oscuro */}
              <h3 className="mb-1 text-2xl font-bold sm:mb-0 text-gray-900">
                {data.title}
              </h3>

              <div
                className="
                  flex flex-col sm:flex-row items-start mb-1
                  group-last:before:hidden before:absolute
                  before:left-2 sm:before:left-0 before:h-full
                  before:px-px before:bg-slate-300 sm:before:ml-[6.5rem]
                  before:self-start before:-translate-x-1/2
                  before:translate-y-3
                  after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2
                  after:bg-gray-800 after:border-4 after:box-content after:border-white
                  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2
                  after:translate-y-1.5
                "
              >
                {/* Año en gris (antes verde) */}
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-gray-700 bg-gray-200 rounded-full">
                  {data.date}
                </time>

                {/* Subtítulo más oscuro */}
                <div className="text-xl font-bold text-gray-800">
                  {data.subtitle}
                </div>
              </div>

              {/* Descripción en gris 700 para mejor legibilidad */}
              <div className="text-gray-700">{data.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
