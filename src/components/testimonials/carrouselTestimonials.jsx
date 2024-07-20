import { Carousel, Typography, Rating } from "@material-tailwind/react";
import Test1 from "../../assets/testimonials/testimonial1.jpg";
import Test2 from "../../assets/testimonials/testimonial2.jpg";
import Test3 from "../../assets/testimonials/testimonial3.jpg";

export default function CarouselDefault() {
  return (
    <div className="p-2 justify-center items-center">
      <h2 className="text-xl font-bold text-center text-gray-800 my-8">Testimonials:</h2>
      <Carousel className="rounded-xl ">
        <div className="relative h-full w-full">
          <img
            src={Test1}
            alt="image 1"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl"
              >
                Joe M. ~ Hesperus, CO
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Russell is a great instructor. I have been taking lessons from him since I started and he has been extremely helpful and supportive in my journey into aviation."
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Test2}
            alt="image 2"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 pt-5  lg:text-xl md:text-lg sm:text-base text-xl"
              >
                Beck F. ~ Durango, CO
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "In my years of knowing Russell, I have always found him to be knowledgeable, respectful and absolutely thorough. I appreciate his person and his instruction style and he has become a friend. I will always recommend him and am so excited about Emily's future in aviation!"
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
        <div className="relative h-full w-full">
          <img
            src={Test3}
            alt="image 3"
            className="h-80 w-full object-cover"
          />
          <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
            <div className="w-3/4 text-center md:w-2/4">
              <Typography
                variant="h2"
                color="white"
                className="mb-4 lg:text-xl md:text-lg sm:text-base text-xl"
              >
                Third P. ~ Somewhere, NM
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-5 lg:text-xl md:text-lg sm:text-base text-base opacity-80"
              >
                "Instructors at Community Aerosports are passionate and expert. The stunning Colorado views made training 
                special. Felt supported and prepared for my aviation journey!"
              </Typography>
              <Rating className="mb-10" value={5} readonly />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}