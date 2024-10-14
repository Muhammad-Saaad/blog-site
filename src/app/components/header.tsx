import Link from "next/link";
import Image from "next/image";
import Profile from "../images/profile.jpg";
export function Header(){
    return(
        <div id="navBar">
            <Link href={"/components/contactpage/"}>
                <div className="profile-pic">
                    <Image src={Profile} alt="Not found"/>
                </div>
            </Link>
            <ul className="navBar-button">
                <Link href={"/"}  style={{ textDecoration: 'none' }}>
                    <li>Home</li>
                </Link>
                
                <Link href={"/components/aboutpage/"}  style={{ textDecoration: 'none' }}>
                    <li>About</li>
                </Link>

                <Link href={"/components/blogpage/"}  style={{ textDecoration: 'none' }}>
                    <li>Blog</li>
                </Link>

                <Link href={"/components/contactpage"}  style={{ textDecoration: 'none' }}>
                    <li>Contact</li>
                </Link>
                 
            </ul>
        </div>
    )
}