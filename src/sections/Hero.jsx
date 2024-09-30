import { Element, Link as LinkScroll } from "react-scroll";
import Button from "../component/button";

const Hero = () => {
  return (
    <section className="relative pt-60 pb-40 max-lg:pt-52 max-lg:pb-36 max-md:pt-36 max-md:pb-32">
      <Element name="hero">
        <div className="container border-b-2 pb-22">
          <div className="relative cursor-default z-2 max-w-512 max-lg:max-w-388">
            <div className="caption small-2 uppercase text-p3">
              wEB DEVELOPER
            </div>
            <h1 className="mb-6 h1 text-p4 hover:text-green-200 transition-all duration-100 uppercase max-lg:mb-7  max-lg:h2 max-md:mb-4 max-md:text-5xl max-md:leading-12">
              M.TUAHA <span className="text-green-200 hover:text-p4 transition-colorsi duration-100">ATHAR</span>
            </h1>
            <p className="max-w-440 mb-14 body-1 max-md:mb-10">
           I'm a web developer | built your your thing for web | built your business with the help of websites. My expertise in <b>HTML | CSS | TAILWIND CSS | REACT | JAVASCRIPT.</b>
            </p>
            <LinkScroll to="features" offset={-100} spy smooth>
              <Button icon="/images/zap.svg">Learn about me</Button>
            </LinkScroll>
          </div>
          <div className="absolute -top-32 left-[calc(50%-340px)] w-[1230px] pointer-events-none hero-img_res">
            <img
              src="/images/port4potr.png"
              className="w-[650px] h-640 ml-330 mt-72 max-md:hidden"
              alt="hero"
              width={250}
              height={250}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};
export default Hero;
