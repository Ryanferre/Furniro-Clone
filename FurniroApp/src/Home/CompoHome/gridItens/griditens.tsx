
const FileImg= ()=>{


    return(
        <section className="hidden lg:block border-b pt-[60px] pb-3">
            <div className="w-full flex flex-col items-center">
                <p className="text-[#616161] font-semibold">Share your setup with</p>
                <h5 className="text-[35px] font-bold">#FuniroFurniture</h5>
            </div>
            <div style={{display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 2fr 2fr', gridTemplateRows: '1.5fr 9fr 2fr 4fr 2fr .4fr', height: '55vmax', gap: '2%'}}>
                    <img style={{gridRow: '1/3', gridColumn: '1', height: '100%'}} src={'https://i.postimg.cc/VkwZKtYb/Rectangle-36.png'}/>
                    <img style={{gridRow: '2/3', gridColumn: '1/3', marginLeft: '18.5%', height: '100%', width: '90%'}} src={'https://i.postimg.cc/0N2WsqKk/Rectangle-38.png'}/>
                    <img style={{gridRow: '3/6', gridColumn: '1', height: '100%'}} src={'https://i.postimg.cc/hGTjcNkY/Rectangle-37.png'}/>
                    <img style={{gridRow: '3/5', gridColumn: '2/4', height: '100%', width: '72%', marginLeft: '-16%'}} src={'https://i.postimg.cc/s2V8ghqR/Rectangle-39.png'}/>
                    <img style={{gridRow: '2/5', gridColumn: '3', height: '70%', marginTop: '35%', marginLeft: '13%'}} src={'https://i.postimg.cc/kXRP0W31/Rectangle-40.png'}/>
                    <img style={{gridRow: '3/6', gridColumn: '4', height: '80%', marginTop: '15%', marginLeft: '9%'}} src={'https://i.postimg.cc/QCrYvKpP/Rectangle-41.png'}/>
                    <img style={{gridRow: '2/4', gridColumn: '4', height: '81%', marginTop: '12%', marginLeft: '9%'}} src={'https://i.postimg.cc/Vv3pfHQ7/Rectangle-43.png'}/>
                    <img style={{gridRow: '3/5', gridColumn: '5',height: '90%', width: '85%', marginTop: '14%',  marginLeft: '-22%'}} src={'https://i.postimg.cc/R0kgnJbF/Rectangle-44.png'}/>
                    <img style={{gridRow: '1/4', gridColumn: '5', height: '90%', width: '95%', marginLeft: '5%'}} src={'https://i.postimg.cc/KvGJL2Qn/Rectangle-45.png'}/>
            </div>
        </section>
    )
}

export default FileImg