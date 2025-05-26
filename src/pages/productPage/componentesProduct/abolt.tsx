

const Aboult= ({Img1, Img2})=>{
    const styleImgs= 'w-[530px] h-[300px] rounded-[5px]'
    return(
        <section className="px-20 pt-9 pb-16 flex flex-col items-center gap-7 border border-[#D9D9D9]">
            <div className="flex flex-col items-center justify-between w-[900px] h-[240px]">
                <div className="flex flex-row justify-between w-[500px]">
                    <h2 className="font-semibold text-[24px]">Description</h2>
                    <h3 className="font-normal text-[24px] text-[#9F9F9F]">Additional Information</h3>
                </div>
                <p className="font-normal text-[16px] text-[#9F9F9F]" >Embodying the raw, wayward spirit of rock ‘n’ roll, 
                    the Kilburn portable active stereo speaker takes the 
                    unmistakable look and sound of Marshall, unplugs the 
                    chords, and takes the show on the road.</p>
                <p className="font-normal text-[16px] text-[#9F9F9F]" >Weighing in under 7 pounds, the Kilburn is a lightweight piece 
                    of vintage styled engineering. Setting the bar as one of the 
                    loudest speakers in its class, the Kilburn is a compact, stout-hearted 
                    hero with a well-balanced audio which boasts a clear midrange and extended 
                    highs for a sound that is both articulate and pronounced. The analogue knobs 
                    allow you to fine tune the controls to your personal preferences while the 
                    guitar-influenced leather strap enables easy and stylish travel.</p>
            </div>
            <div className="flex flex-row justify-between w-[1090px]">
                <img className={styleImgs} src={Img1} />
                <img className={styleImgs} src={Img2} />
            </div>
        </section>
    )
}

export default Aboult