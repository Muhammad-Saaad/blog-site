import Link from "next/link"
export function Footer(){
    return(
        <div id="footer">
            <div className="col">
                <ul id="quick-link" style={{textDecoration:'none'}}>
                    <li><h3>Quick Link</h3></li>
                    <Link href={"/components/aboutpage/"} style={{textDecoration:'none'}}>
                        <li>About</li>
                    </Link>
                    <Link href={"/components/contactpage/"} style={{textDecoration:'none'}}>
                        <li>Contact</li>            
                    </Link>
                </ul>
            </div>
    
            
            <div className="col">
                <ul id="blogs">
                    <li><h3>Blogs</h3></li>
                    <Link href={"/components/blogs/beauty/blog1/"} style={{textDecoration:'none'}}><li>Blog1</li></Link>
                    <Link href={"/components/blogs/technology/blog1/"} style={{textDecoration:'none'}}><li>Blog2</li></Link>
                    <Link href={"/components/blogs/lifestyle/blog1/"} style={{textDecoration:'none'}}><li>Blog3</li></Link>
                    <Link href={"/components/blogs/food/blog1/"} style={{textDecoration:'none'}}><li>Blog4</li></Link>
                </ul>
            </div>

            <div className="col" >
                <ul id="contact" >
                    <li><h3>Contact</h3></li>
                    <Link href={"www.facebok.com"} style={{textDecoration:'none'}}>
                    <li>Facebook</li></Link>
                    <Link href={"https://www.linkedin.com/in/muhammad-saad-627ba4214/"} style={{textDecoration:'none'}}><li>Linkedin</li></Link>
                    <Link href={"mailto:abc@gmail.com"} style={{textDecoration:'none'}}>
                        <li>Email</li> 
                    </Link>
                </ul>
            </div>
        </div>
    )
}