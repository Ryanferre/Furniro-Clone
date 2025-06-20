
const FilterBox= ()=>{
   
    return(
        <div className={`absolute inset-0 h-[75px] w-[250px] flex flex-row items-center bg-white border justify-around rounded-[10px]`}>
            <ul className="flex flex-row w-52 justify-around">
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                     <p>Sofar</p>
                     <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer"/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer"></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Cama</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer"/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer"></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Asento</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer"/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer"></span>
                     </div>
                    </label>
                </li>
                <li>
                    <label className="flex flex-col items-center justify-around h-full">
                    <p>Mesas</p>
                    <div className="flex flex-row items-center relative">
                        <input type="checkbox" id="classe2" className="hidden peer"/>
                        <label htmlFor="classe2" className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] border-transparent cursor-pointer peer-checked:border-[#B88E2F]"></label>
                        <span className="w-[11px] h-[11px] rounded-full absolute left-[8.3px] bg-[#D8D8D8] peer-checked:bg-[#B88E2F] peer-checked:border-[#B88E2F] cursor-pointer"></span>
                     </div>
                    </label>
                </li>
            </ul>
            <button>
                <div className="flex flex-col items-center justify-center h-[20px] gap-[5.4px]">
                    <span className="content boder w-[13px] h-[2px] transition-transform -rotate-[38deg] inline-block bg-[#9F9F9F]"></span>
                    <span className="content boder w-[13px] h-[2px] transition-transform rotate-[39deg] inline-block bg-[#9F9F9F]"></span>
                </div>
            </button>
        </div>
    )
}

export default FilterBox