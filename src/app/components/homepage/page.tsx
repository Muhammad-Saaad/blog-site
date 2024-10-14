import Image from "next/image";
import Tech from "../../images/slider/tech.jpg";
import Food from "../../images/slider/food.jpg";
import Beauty from "../../images/slider/beauty.jpg";
import Life from "../../images/slider/lifeStyle.webp";
import Travel from "../../images/slider/travel.jpg";
import Link from "next/link";
// import Food from "./images/food.jpg";

// import { Header } from "../header";
// import { Footer } from "../footer";

export default function HomePage() {
  return (
    <div id="home">
      <div id="top">
        <div className="upside">
          <h1>Categories</h1>
        </div>
        <div id="top-middle">

             <div className="elem" id="elem1">
            <Link href={"/components/blogs/category-wise-menu/technology/"} style={{textDecoration : 'none'}}>
              <h1>Technology</h1>
            </Link>
              </div>

            <div className="elem" id="elem2">
            <Link href={"/components/blogs/category-wise-menu/food/"} style={{textDecoration : 'none'}}>
              <h1>Food Blog</h1>
            </Link>
          </div>
          <div className="elem" id="elem3">
            <Link href={"/components/blogs/category-wise-menu/lifestyle/"} style={{textDecoration : 'none'}}>
              <h1>Life Style</h1>
            </Link>
          </div>
          <div className="elem" id="elem4">
          <Link href={"/components/blogs/category-wise-menu/travel/"} style={{textDecoration : 'none'}}>
            <h1>Travel Blog</h1>
            </Link>
          </div>
          <div className="elem" id="elem5">
          <Link href={"/components/blogs/category-wise-menu/beauty/"} style={{textDecoration : 'none'}}>
            <h1>Beauty</h1>
            </Link>
          </div>
        </div>
      </div>
      
      <div id="recent">
      <div className="upside">
          <h1>Latest</h1>
        </div>
        <div id="recent-middle">
          <Link href={"/components/blogs/food/blog1/"} style={{textDecoration:'none'}}>
          <div className="card">
          <Image src={Food} alt="Img not"/>
            <h3>Food Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
          </div>
          </Link>
          <Link href={"/components/blogs/technology/blog1/"} style={{textDecoration:'none'}}>
            <div className="card">
              <Image src={Tech} alt="Img not"/>
              <h3>Technology Blog</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link href={"/components/blogs/travel/blog1/"} style={{textDecoration:'none'}}>
            <div className="card">
            <Image src={Travel} alt="Img not"/>
              <h3>Travel Blog</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link href={"/components/blogs/beauty/blog1/"} style={{textDecoration:'none'}}>
            <div className="card">
              <Image src={Beauty} alt="Img not"/>
              <h3>Beauty Blog</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link href={"/components/blogs/travel/blog1/"} style={{textDecoration:'none'}}>
            <div className="card">
            <Image src={Travel} alt="Img not"/>
              <h3>Travel Blog</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
          <Link href={"/components/blogs/food/blog1/"} style={{textDecoration:'none'}}>
          <div className="card">
          <Image src={Food} alt="Img not"/>
            <h3>Food Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
          </div>
          </Link>
          <Link href={"/components/blogs/lifestyle/blog1/"} style={{textDecoration:'none'}}>
          <div className="card">
            <Image src={Life} alt="Img not"/>
            <h3>Life Style Blog</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
          </div>
          </Link>
          <Link href={"/components/blogs/technology/blog1/"} style={{textDecoration:'none'}}>
            <div className="card">
              <Image src={Tech} alt="Img not"/>
              <h3>Technology Blog</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, unde! Lorem ipsum dolor sit amet.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
