import Image from "next/image";


export const OurGoals = () => {


  const processSteps = [
   {
    id: 1,
    icon: '/images/1.svg',
    title: 'Book a free Appointment',
    description:
     'WEBA Bootcamp: 6-month training plus 2-month profile projects to prepare you for high-paying tech jobs.',
   },
   {
    id: 2,
    icon: '/images/2.svg',
    title: 'Eligibility: Intermediate',
    description:
     "We launched our own software house with expert teams you'll work under on real industry projects.",
   },
   {
    id: 3,
    icon: '/images/3.svg',
    title: '8 Hours work daily (4 hrs on campus & 4 hrs online)',
    description:
     'We launched our own blockchain product that will make waves across the world and shake the industry!',
   },
  ];

  return (
    <section 
      className="relative pt-16 pb-16 w-full max-w-6xl mx-auto px-4"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 order-2 lg:order-1">
            <div className="mb-10" data-aos="fade-down">
              <span className="text-[#363f46] text-lg font-medium uppercase tracking-wider">
                Start with it
              </span>
              <h2 className="text-3xl md:text-4xl capitalize text-[#e92e3e] lg:text-[42px] font-bold mt-2 mb-6 leading-tight">
                Our process begins with a few essential steps
              </h2>
            </div>

            <div className="space-y-6">
              {processSteps.map((step, index) => (
                <div 
                  key={step.id}
                  className="flex items-start gap-6 p-5 bg-[#F1F2F2] rounded-4xl shadow-md hover:shadow-lg transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#e92e3e]/10 flex items-center justify-center">
                    <Image 
                      src={step.icon}
                      width={45}
                      height={45}
                      alt={step.title}
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 pt-5">{step.title}</h3>
                    {/* <p className="text-gray-600 text-base">{step.description}</p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="lg:w-1/2 order-1 lg:order-2 lg:block hidden relative mb-12 lg:mb-0">
            <div 
              className="relative w-full h-[400px] lg:h-[550px]"
              data-aos="fade-left"
            >
              {/* Main Person Image */}
              <Image
                src="https://vveba.s3.eu-north-1.amazonaws.com/process/process-man.png"
                alt="Process illustration"
                fill
                className="object-contain z-10"
              />
              
              {/* Search Icon */}
              <div 
                className="absolute top-[25%] w-60 h-44 z-20"
                data-aos="zoom-in"
                data-aos-delay="300"
              >
                <Image
                  src="https://vveba.s3.eu-north-1.amazonaws.com/process/process-search.png"
                  alt="Search illustration"
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Chart Icon */}
              <div 
                className="absolute top-[15%] -right-5 w-60 h-60 z-20"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                <Image
                  src="https://vveba.s3.eu-north-1.amazonaws.com/process/process-chart.png"
                  alt="Chart illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};