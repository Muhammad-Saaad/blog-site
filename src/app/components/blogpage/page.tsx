import Link from "next/link";
export default function BlogPage(){
    return(
        <div className="blog-menu"> 
            <div className="category-card" id="cat1">
                <Link href={"/components/blogs/category-wise-menu/technology/"} style={{textDecoration:'none'}}>
                    <h1>Technology</h1>
                </Link>
            </div>
            <div className="category-card" id="cat2">
            <Link href={"/components/blogs/category-wise-menu/food/"} style={{textDecoration:'none'}}>
                    <h1>Food</h1>
                </Link>
            </div>
            <div className="category-card" id="cat3">
            <Link href={"/components/blogs/category-wise-menu/lifestyle/"} style={{textDecoration:'none'}}>
                    <h1>Life Style</h1>
                </Link>
            </div>
            <div className="category-card" id="cat4">
            <Link href={"/components/blogs/category-wise-menu/travel/"} style={{textDecoration:'none'}}>
                    <h1>Travel</h1>
                </Link>
            </div>
            <div className="category-card" id="cat5">
            <Link href={"/components/blogs/category-wise-menu/beauty/"} style={{textDecoration:'none'}}>
                    <h1>Beauty</h1>
                </Link>
            </div>


        </div>
    )
}