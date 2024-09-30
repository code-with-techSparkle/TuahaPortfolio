import { Element } from "react-scroll";
import { links, logos } from "../constants/index.jsx";
import { Marker } from "../component/marker.jsx";
import { FaHtml5 , FaCss3 , FaReact  } from "react-icons/fa";
import { IoLogoJavascript  } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

const Download = () => {
  return (
    <section>
      <Element
        name="download"
        className="g7 relative pb-32 pt-24 max-lg:pb-24 max-md:py-16"
      >
        <div className="container">
          <div className="flex items-center">
            <div className="relative mr-6 flex-540 max-xl:flex-280 max-lg:flex256 max-md:flex-100">
              <div className="mb-10">
                <img
                  src="/images/header.svg"
                  width={160}
                  height={55}
                  alt="Tuaha"
                />
              </div>

              <p className="body-1 mb-10 max-w-md">
                Creative web developer crafting responsive, user-friendly
                websites and applications.
              </p>

              <ul className="flex flex-wrap items-center gap-6">
                {links.map(({ id, url, icon }) => (
                  <li
                    key={id}
                    className="download_tech-link download_tech-link_last-before download_tech-link_last-after"
                  >
                    <a
                      href={url}
                      target="_blank"
                      className="size-22 download_tech-icon_before relative flex items-center justify-center rounded-half border-2 border-s3 bg-s1 transition-borderColor duration-100"
                    >
                      <span className="absolute -top-2 rotate-90">
                        <Marker />
                      </span>
                      <img
                        src={"/images/lines.svg"}
                        alt="lines"
                        className="absolute size-13/20 object-contain"
                      />
                      <span className="download_tech-icon">{icon}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-10 max-md:hidden">
              <div className="download_preview-before download_preview-after rounded-40 relative w-[955px] border-2 border-s1 p-6">
                <div className="relative rounded-3xl bg-s1 px-6 pb-6 pt-14">
                  <img
                    src="/images/screen.PNG"
                    width={855}
                    height={655}
                    alt="screen"
                    className="rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          <marquee scrollamount="15" direction="x">
            <ul className="mt-24 flex justify-center max-lg:hidden">
              {logos.map(({ id, url,title }) => (
                <li key={id} className="mx-10">
                  <a>{url}</a>
                  {/* <img src={url} width={width} height={height} alt={title} /> */}
                </li>
              ))}
            </ul>
          </marquee>
        </div>
      </Element>
    </section>
  );
};
export default Download;
