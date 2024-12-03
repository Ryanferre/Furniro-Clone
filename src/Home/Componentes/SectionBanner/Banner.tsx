import Banner from './BannerImg/BannerImg.png'

const BannerSection= ()=>{
    return(
        <section className="w-full h-[720px] flex flex-row justify-end items-center pr-10" style={{backgroundImage: `URL(${Banner})`, backgroundPosition: 'contain'}}>
            <div className="bg-[#FFF3E3] w-[643px] h-[460px] flex flex-col items-start justify-between p-10 mt-6 rounded-[15px]">
                <article className="h-[250px] mt-[20px]">
                    <p className="font-semibold tracking-[2px]" style={{textIndent: '3px'}}>New Arrival</p>
                    <h2 className="text-[52px] text-[#B88E2F] font-bold">Discover Our New Collection</h2>
                    <p className="w-[430px] ml-[3px] font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                </article>
                <button className="px-[55px] py-6 bg-[#B88E2F] text-center font-bold text-white text-[16px]">BUY NOW</button>
            </div>
        </section>
    )
}

export default BannerSection