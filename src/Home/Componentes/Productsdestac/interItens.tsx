import ImgIten1 from "./ImgItens/image1.png"
import ImgIten2 from "./ImgItens/image2.png"
import ImgIten3 from "./ImgItens/image3.png"
import ImgIten4 from "./ImgItens/image4.png"
import ImgIten5 from "./ImgItens/image5.png"
import ImgIten6 from "./ImgItens/image6.png"
import ImgIten7 from "./ImgItens/image7.png"
import ImgIten8 from "./ImgItens/image8.png"



export type ItensType ={
    titleIten: string,
    NameIten: string,
    Price: string,
    Discount: string,
    ItenImg: string
}

export const ArrListItens: ItensType[] = [
    
    {
    titleIten: "Syltherine",
    NameIten: "Stylish cafe chair",
    Price: "Rp 2.500.000",
    Discount: "Rp 3.500.000",
    ItenImg: ImgIten1
    },

   {
    titleIten: "Leviosa",
    NameIten: "Stylish cafe chair",
    Price: "Rp 2.500.000",
    Discount: "",
    ItenImg: ImgIten2
   },

   {
    titleIten: "Lolito",
    NameIten: "Luxury big sofa",
    Price: "Rp 7.000.000",
    Discount: "Rp 14.000.000",
    ItenImg: ImgIten3
   },

   {
    titleIten: "Respira",
    NameIten: "Outdoor bar table and stool",
    Price: "Rp 500.000",
    Discount: "",
    ItenImg: ImgIten4
   },

   {
    titleIten: "Grifo",
    NameIten: "Night lamp",
    Price: "Rp 1.500.000",
    Discount: "",
    ItenImg: ImgIten5
   },

    {
    titleIten: "Muggo",
    NameIten: "Small mug",
    Price: "Rp 150.000",
    Discount: "",
    ItenImg: ImgIten6
    },

   {
    titleIten: "Pingky",
    NameIten: "Cute bed set",
    Price: "Rp 7.000.000",
    Discount: "",
    ItenImg: ImgIten7
   },

   {
    titleIten: "Potty",
    NameIten: "Minimalist flower pot",
    Price: "Rp 500.000",
    Discount: "",
    ItenImg: ImgIten8
   }]


