

export interface CategoryItem {
  img: string;
  imgName: string;
}

export interface SubCategory {
  name: string;
  items: CategoryItem[];
}

export interface CategoryType {
  name: string;
  subcategory: SubCategory[];
}

export const categoryList: CategoryType[] = [
  {
    name: "Light Bulbs",
    subcategory: [
      {
        name: "Halogen Bulbs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-Halogen_Bulbs-G4_Halogen_Bulbs-G4_Halo.jpg",
            imgName: "G4 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_2_web.jpg",
            imgName: "G9 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-Halogen_Bulbs-G4_Halogen_Bulbs-G4_Halo.jpg",
            imgName: "G4 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_2_web.jpg",
            imgName: "G9 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-Halogen_Bulbs-G4_Halogen_Bulbs-G4_Halo.jpg",
            imgName: "G4 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_2_web.jpg",
            imgName: "G9 Halogen Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-Halogen_Bulbs-G4_Halogen_Bulbs-G4_Halo.jpg",
            imgName: "G4 Halogen Bulbs",
          },
        ],
      },
      {
        name: "Energy Saving Compact Flurescent",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_249_3.jpg",
            imgName: "Reflector Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-PL%20Light%20Bulbs.jpg",
            imgName: "PL Light Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_6_2.jpg",
            imgName: "GU10 Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-2D%20Square.jpg",
            imgName: "2D Square",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_4.jpg",
            imgName: "Sprial Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_4.jpg",
            imgName: "2G11 PL L Lamps",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-2D%20Square.jpg",
            imgName: "2D Square",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_4.jpg",
            imgName: "Sprial Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_4.jpg",
            imgName: "2G11 PL L Lamps",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/n_2_4.jpg",
            imgName: "2G11 PL L Lamps",
          },
        ],
      },
      {
        name: "Low Voltage Bulbs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_106_40.jpg",
            imgName: "12 Volts",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_106_34.jpg",
            imgName: "6 Volts",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_106_11.jpg",
            imgName: "24 Volts",
          },
        ],
      },
      {
        name: "Incandescent",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/1-Vintage%20Cage%20Edison%20Bulbs.jpg",
            imgName: "Vintage Cage Edision Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-Pygmy-newImg.jpg",
            imgName: "Pygmy",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20Pygmys-newimg.jpg",
            imgName: "Coloured Pygmys",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_94_3.jpg",
            imgName: "Heat Lamp",
          },
        ],
      },
      {
        name: "Decordation Light Bulbs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/new_g95_glass_tree_b22_2w.jpg",
            imgName: "Vintage Tree Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_150.jpg",
            imgName: "Flicker Flame Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_2_10_23.jpg",
            imgName: "Decorative Light Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-Fire%20Flame%20Effect%20Bulbs.jpg",
            imgName: "Fire Flame Effect Bulbs",
          },
        ],
      },
      {
        name: "R7s Halogen Linear J118/J78",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3_110_6.jpg",
            imgName: "R7s-J118",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_148_19.jpg",
            imgName: "R7s-J78",
          },
        ],
      },
      {
        name: "Appliance Bulbs",
        items: [],
      },
      {
        name: "Solidum Lamps",
        items: [],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
  {
    name: "LED Light Bulbs",
    subcategory: [
      {
        name: "LEDs",
        items: [
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-GU10_LEDs-4w_GU10.jpg",
            imgName: "GU10 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/3-Coloured%20LEDs.jpg",
            imgName: "Coloured LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/4-MR16%20LEDs.jpg",
            imgName: "MR16 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2__53_7.jpg",
            imgName: "GX53 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_118_1.jpg",
            imgName: "G9 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Light_Bulbs-E27_Edison_Screw.jpg",
            imgName: "LED Reflectos",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Wifi%20Smart%20Lights.jpg",
            imgName: "Wifi Smart Lights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/Light_Bulbs-LEDs-LED_Light_Bulbs-LED_Decor_Bulbs.jpg",
            imgName: "LED Decor Bulbs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2-LED%20downlights.jpg",
            imgName: "LED Downlights",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-Vintage_LEDs-E27_Edison_Screw.jpg",
            imgName: "Vintage LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/5-MR11%20LEDs.jpg",
            imgName: "MR11 LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/2_117_18.jpg",
            imgName: "PAR LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/Light_Bulbs-LEDs-LED_Golf_Balls-Frosted_Cover_Golf_Ball.jpg",
            imgName: "LED Candles",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/LED_Appliance_Bulbs_2_.jpg",
            imgName: "Appliance Bulbs LEDs",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/menu_icon/all_1_3.jpg",
            imgName: "R7s SMD LED light",
          },
          {
            img: "https://doo9vxlv0gkqf.cloudfront.net/media/catalog/tmp/category/LED_Light_Bulbs-_Pygmy.jpg",
            imgName: "Pygmy",
          },
        ],
      },
    ],
  },
];
