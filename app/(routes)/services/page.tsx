import ContainerPage from "@/components/container-page";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
    return (
        <>
            <TransitionPage />
            <div className="flex flex-col items-center justify-center h-full">
                <ContainerPage>
                    <div className="max-w-5xl text-center">
                        <div className="mb-10">
                            <h1 className="text-2xl leading-tight md:text-4xl md:mb-5">Mis <span className="font-bold text-secondary">servicios.</span></h1>
                            <p className="mb-3 text-xl text-gray-300">Ofrezco servicios de Desarrollo Web Front-end especializados en la creación de sitios web y aplicaciones atractivas y funcionales. Utilizando las últimas tecnologías como: HTML5, CSS3, JavaScript, React.js, diseño interfaces de usuario intuitivas y responsivas que reflejan la identidad de marca de mis clientes y mejoran su presencia en línea.</p>
                        </div>

                        {/* SLIDER */}
                        <div className="w-full md:w-3/4 mx-auto">
                            <SliderServices />
                        </div>
                    </div>
                </ContainerPage>
            </div>
        </>
    );
}

export default ServicesPage;
