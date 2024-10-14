import Image from "next/image";
import Profile from "../../images/profile.jpg";
export default function AboutPage(){
    return(
        <div className="aboutbody">
            <div className="content-container">            
            <h1>
                About our company
            </h1>
            <h4>
            Hello! My name is <span className="special">Muhammad Saad</span>, I am <span className="special">Memon</span>. I am currently pursuing a Bachelor's degree in <span className="special">Computer Science (BSCS)</span> and further expanding my expertise through the Governor's Initiative on Generative AI course. With a deep passion for technology, particularly in artificial intelligence, I am excited to explore new innovations and contribute to the growing tech industry.
            </h4>
            </div>

            <div className="pic-container">
                <Image src = {Profile} alt="not found"/>
            </div>
        </div>
    )
}