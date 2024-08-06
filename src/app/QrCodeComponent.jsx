import Link from "next/link"
import ArrowRightIcon from "../../public/svg/ArrowRightIcon"
import BannerIcon from "../../public/svg/Banner"
import HomeIcon from "../../public/svg/Home"
import MagicCutIcon from "../../public/svg/MagicCutIcon"
import MajesticIcon from "../../public/svg/MajesticIcon"

function QrCodeComponent() {

    return (
        <div className="container mx-auto grid grid-cols-2 gap-12">
            <div>

                <div>
                    <HomeIcon />

                </div>
                <h1 className="font-medium leading-3 text-7xl text-blue-600 mt-10">QR code component</h1>
                <p className="leading-relaxed text-2xl m-8">This is a Figma design file for a Frontend Mentor challenge. Figma is a  design tool professional teams use to collaborate on projects. Need help  using Figma?<span className="font-bold px-2">
                    Read our Figma for developers article </span> </p>
                <div>

                    <BannerIcon />
                </div>
            </div>

            <div className=" justify-center items-center flex-row">
                <div className="flex justify-center gap-8 mt-48 ">
                    <div className="flex items-center" >
                        <MajesticIcon />
                    </div>
                    <div className="">
                        <div className="flex  gap-6">
                            <h1 className="font-semibold text-3xl">Design System</h1>
                            <ArrowRightIcon />
                        </div>
                        <p className="mt-6 text-xl ">

                            The design system contains all the information for reusable components  and styles. It shows colors, typography styles, and components,  including various component states if they're interactive.
                        </p>
                    </div>

                </div>
                <div className="w-full h-1 text-black">

                </div>
                <div className="flex justify-center gap-8 mt-48">
                    <div className="flex items-center" >
                        <MagicCutIcon />
                    </div>
                    <div className="">
                        <div className="flex  gap-6">
                            <h1 className="font-semibold text-3xl">Designs</h1>
                            <ArrowRightIcon />
                        </div>
                        <p className="mt-6 text-xl  ">
                            The high-fidelity designs help you build responsive, accessible  projects. Aim for precision rather than pixel-perfect replicas. For  guidance, see Josh Comeau's <span className="underline text-gray-500 cursor-pointer">
                                <Link href="#">
                                    "Chasing the Pixel-Perfect Dream."
                                </Link>
                            </span>
                        </p>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default QrCodeComponent