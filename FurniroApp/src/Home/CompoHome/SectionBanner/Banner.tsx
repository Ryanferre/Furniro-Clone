
const BannerSection= ()=>{
    return(
        <section className="w-full h-100 lg:h-160 flex flex-row justify-end lg:px-25 items-center" style={{backgroundImage: `URL("https://i.postimg.cc/WbxT2p2N/scandinavian-interior-mockup-wall-decal-background-1.png")`, backgroundPosition: 'contain'}}>
            <div className="bg-[#FFF3E3] w-93 lg:w-150 py-5 px-4 mx-auto lg:mx-0 h-70 lg:h-105 flex flex-col items-start justify-between rounded-[15px]">
                <article className="h-[250px]">
                    <p className="font-semibold tracking-[2px]" style={{textIndent: '3px'}}>New Arrival</p>
                    <h2 className="text-[2em] w-60 lg:w-90 lg:text-[3em] text-[#B88E2F] font-bold">Discover Our New Collection</h2>
                    <p className="w-84 lg:w-[430px] text-[.9em] lg:text-[1em] ml-[3px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </article>
                <button className=" px-6 lg:px-[55px] py-3 lg:py-5 bg-[#B88E2F] text-center font-bold text-white text-[16px]">BUY NOW</button>
            </div>
        </section>
    )
}

export default BannerSection