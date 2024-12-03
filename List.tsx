

const NavList= ()=>{
    return(
        <>
         <div className="flex flex-row justify-around border w-[600px] h-full">
            <nav className="h-[270px] flex flex-col gap-[45px] mt-[8px]">
                <p>Links</p>
                <ul className="flex flex-col justify-between h-full">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <nav className="h-[210px] flex flex-col gap-[45px] mt-[8px]">
                <p>Help</p>
                <ul className="flex flex-col justify-between h-full">
                    <li>Paiment Options</li>
                    <li>Retuns</li>
                    <li>Privacy Policies</li>
                </ul>
            </nav>
         </div>
        </>
    )
}

export default NavList