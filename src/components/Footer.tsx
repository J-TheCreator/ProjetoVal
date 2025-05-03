import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookF, faXTwitter, faInstagram} from "@fortawesome/free-brands-svg-icons"



export default function Footer() {
    
    const year = new Date().getFullYear();
    return (
        <>
            <footer className="w-screen h-28 bottom-0 bg-[#101622] flex flex-col justify-center items-center">
                {/* Social Icons */}
                <div className="flex items-center justify-center gap-5">
                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="size-6 text-[#C1D5F2] "/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="size-6 text-[#C1D5F2]"/></a>
                    <a href="#"><FontAwesomeIcon icon={faXTwitter} className="size-6 text-[#C1D5F2]"/></a>
                </div>

                {/* Links and Copyright Notice */}
                <div className="flex gap-2 font-cCode">
                    <p><a href="#">Privacy Policy</a></p>
                    <span>|</span>
                    <p><a href="#" >Contact us</a></p>
                    <span>| </span>
                    <p><a href="#">Terms & Conditions</a></p>
                </div>
                <p className="mt-2 font-cCode">JettTips Copyright © {year} - All rights reserved</p>
            </footer>
        </>
    )
}
