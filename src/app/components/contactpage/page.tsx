import Image from "next/image";
import Profile from "../../images/profile.jpg";
import Link from "next/link";
export default function ContactPage(){
    return(
        <div className="contactbody">
            <div className="content-container">            
            <h1>Contact Now</h1>
            <h4>
            Hello! My name is <span className="special">Muhammad Saad</span>, I am <span className="special">Memon</span>. I am currently pursuing a Bachelor's degree in <span className="special">Computer Science (BSCS)</span> and further expanding my expertise through the Governor's Initiative on Generative AI course. With a deep passion for technology, particularly in artificial intelligence, I am excited to explore new innovations and contribute to the growing tech industry.
            </h4>
            <h5>
                Phone: +92 310 1235678 <br />
                Email: <Link href={"mailto:random@gmail.com"} style={{textDecoration:'none'}}>
                random@gmail.com
                
                </Link>
            </h5>
            </div>

            <div className="pic-container" slide-right>
                <Image src = {Profile} alt="not found"/>
            </div>
        </div>
    )
}