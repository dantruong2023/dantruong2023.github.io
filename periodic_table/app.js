const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);



const app = {
    elements : [
        {
            name: "Hydrogen",
            series: "Nonmetal",
            electronegativity: 2.20,
            atomicRadius: 53,
            weight: 1.008,
            meltingPoint: -259.16,
        },
        {
            name: "Helium",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 31,
            weight: 4.0026,
            meltingPoint: -272.20,
        },
        {
            name: "Lithium",
            series: "Alkali metal",
            electronegativity: 0.98,
            atomicRadius: 167,
            weight: 6.94,
            meltingPoint: 180.54,
        },
        {
            name: "Beryllium",
            series: "Alkaline earth metal",
            electronegativity: 1.57,
            atomicRadius: 112,
            weight: 9.0122,
            meltingPoint: 1287,
        },
        {
            name: "Boron",
            series: "Metalloid",
            electronegativity: 2.04,
            atomicRadius: 87,
            weight: 10.81,
            meltingPoint: 2076,
        },
        {
            name: "Carbon",
            series: "Nonmetal",
            electronegativity: 2.55,
            atomicRadius: 70,
            weight: 12.011, 
            meltingPoint: 3500, 
        },
        {
            name: "Nitrogen",
            series: "Nonmetal",
            electronegativity: 3.04,
            atomicRadius: 75,
            weight: 14.007,
            meltingPoint: -210.01,
        },
        {
            name: "Oxygen",
            series: "Nonmetal",
            electronegativity: 3.44,
            atomicRadius: 60,
            weight: 15.999,
            meltingPoint: -218.79,
        },
        {
            name: "Fluorine",
            series: "Halogen",
            electronegativity: 3.98,
            atomicRadius: 64,
            weight: 18.9984,
            meltingPoint: -219.67,
        },
        {
            name: "Neon",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 38,
            weight: 20.1797,
            meltingPoint: -248.59,
        },
        {
            name: "Sodium",
            series: "Alkali metal",
            electronegativity: 0.93,
            atomicRadius: 190,
            weight: 22.9898,
            meltingPoint: 97.79,
        },
        {
            name: "Magnesium",
            series: "Alkaline earth metal",
            electronegativity: 1.31,
            atomicRadius: 145,
            weight: 24.305,
            meltingPoint: 650,
        },
        {
            name: "Aluminum",
            series: "Post-transition metal",
            electronegativity: 1.61,
            atomicRadius: 118,
            weight: 26.9815,
            meltingPoint: 660.32,
        },
        {
            name: "Silicon",
            series: "Metalloid",
            electronegativity: 1.90,
            atomicRadius: 111,
            weight: 28.0855,
            meltingPoint: 1414,
        },
        {
            name: "Phosphorus",
            series: "Nonmetal",
            electronegativity: 2.19,
            atomicRadius: 107,
            weight: 30.9738,
            meltingPoint: 44.15,
        },
        {
            name: "Sulfur",
            series: "Nonmetal",
            electronegativity: 2.58,
            atomicRadius: 100, // đơn vị: picomet (pm)
            weight: 32.06, // đơn vị: atomic mass units (AMU)
            meltingPoint: 115.21, // đơn vị: độ Celsius (°C)
        },
        {
            name: "Chlorine",
            series: "Halogen",
            electronegativity: 3.16,
            atomicRadius: 99,
            weight: 35.45,
            meltingPoint: -101.50,
        },
        {
            name: "Argon",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 71,
            weight: 39.95,
            meltingPoint: -189.34,
        },
        {
            name: "Potassium",
            series: "Alkali metal",
            electronegativity: 0.82,
            atomicRadius: 227,
            weight: 39.10,
            meltingPoint: 63.25,
        },
        {
            name: "Calcium",
            series: "Alkaline earth metal",
            electronegativity: 1.00,
            atomicRadius: 197,
            weight: 40.08,
            meltingPoint: 842.00,
        },
        {
            name: "Scandium",
            series: "Transition metal",
            electronegativity: 1.36,
            atomicRadius: 162,
            weight: 44.96,
            meltingPoint: 1541.00,
        },
        {
            name: "Titanium",
            series: "Transition metal",
            electronegativity: 1.54,
            atomicRadius: 147,
            weight: 47.87,
            meltingPoint: 1668.00,
        },
        {
            name: "Vanadium",
            series: "Transition metal",
            electronegativity: 1.63,
            atomicRadius: 134,
            weight: 50.94,
            meltingPoint: 1910.00,
        },
        {
            name: "Chromium",
            series: "Transition metal",
            electronegativity: 1.66,
            atomicRadius: 128,
            weight: 51.99,
            meltingPoint: 1907.00,
        },
        {
            name: "Manganese",
            series: "Transition metal",
            electronegativity: 1.55,
            atomicRadius: 139,
            weight: 54.9380,
            meltingPoint: 1246,
        },
        {
            name: "Iron",
            series: "Transition metal",
            electronegativity: 1.83,
            atomicRadius: 125,
            weight: 55.845,
            meltingPoint: 1538,
        },
        {
            name: "Cobalt",
            series: "Transition metal",
            electronegativity: 1.88,
            atomicRadius: 126,
            weight: 58.9332,
            meltingPoint: 1495,
        },
        {
            name: "Nickel",
            series: "Transition metal",
            electronegativity: 1.91,
            atomicRadius: 124,
            weight: 58.6934,
            meltingPoint: 1455,
        },
        {
            name: "Copper",
            series: "Transition metal",
            electronegativity: 1.90,
            atomicRadius: 128,
            weight: 63.546,
            meltingPoint: 1085,
        },
        {
            name: "Zinc",
            series: "Transition metal",
            electronegativity: 1.65,
            atomicRadius: 131,
            weight: 65.38,
            meltingPoint: 419,
        },
        {
            name: "Gallium",
            series: "Metal",
            electronegativity: 1.81,
            atomicRadius: 136,
            weight: 69.723,
            meltingPoint: 30,
        },
        {
            name: "Germanium",
            series: "Metalloid",
            electronegativity: 2.01,
            atomicRadius: 125,
            weight: 72.63,
            meltingPoint: 938.25,
        },
        {
            name: "Arsenic",
            series: "Metalloid",
            electronegativity: 2.18,
            atomicRadius: 114,
            weight: 74.9216,
            meltingPoint: 817,
        },
        {
            name: "Selenium",
            series: "Nonmetal",
            electronegativity: 2.55,
            atomicRadius: 120,
            weight: 78.971,
            meltingPoint: 217,
        },
        {
            name: "Bromine",
            series: "Halogen",
            electronegativity: 2.96,
            atomicRadius: 120,
            weight: 79.904,
            meltingPoint: -7.20,
        },
        {
            name: "Krypton",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 88,
            weight: 83.798,
            meltingPoint: -157.36,
        },
        {
            name: "Rubidium",
            series: "Alkali metal",
            electronegativity: 0.82,
            atomicRadius: 248,
            weight: 85.4678,
            meltingPoint: 38.89,
        },
        {
            name: "Strontium",
            series: "Alkaline earth metal",
            electronegativity: 0.95,
            atomicRadius: 215,
            weight: 87.62,
            meltingPoint: 1042,
        },
        {
            name: "Yttrium",
            series: "Transition metal",
            electronegativity: 1.22,
            atomicRadius: 180,
            weight: 88.90585,
            meltingPoint: 1526,
        },
        {
            name: "Zirconium",
            series: "Transition metal",
            electronegativity: 1.33,
            atomicRadius: 160,
            weight: 91.224,
            meltingPoint: 1855,
        },
        {
            name: "Niobium",
            series: "Transition metal",
            electronegativity: 1.6,
            atomicRadius: 146,
            weight: 92.90638,
            meltingPoint: 2477,
        },
        {
            name: "Molybdenum",
            series: "Transition metal",
            electronegativity: 2.16,
            atomicRadius: 139,
            weight: 95.95,
            meltingPoint: 2623,
        },
        {
            name: "Technetium",
            series: "Transition metal",
            electronegativity: 1.9,
            atomicRadius: 136,
            weight: 98,
            meltingPoint: 2157,
        },
        {
            name: "Ruthenium",
            series: "Transition metal",
            electronegativity: 2.2,
            atomicRadius: 134,
            weight: 101.07,
            meltingPoint: 2334,
        },
        {
            name: "Rhodium",
            series: "Transition metal",
            electronegativity: 2.28,
            atomicRadius: 134,
            weight: 102.9055,
            meltingPoint: 1966,
        },
        {
            name: "Palladium",
            series: "Transition metal",
            electronegativity: 2.2,
            atomicRadius: 137,
            weight: 106.42,
            meltingPoint: 1554.9,
        },
        {
            name: "Silver",
            series: "Transition metal",
            electronegativity: 1.93,
            atomicRadius: 144,
            weight: 107.87,
            meltingPoint: 961.8,
        },
        {
            name: "Cadmium",
            series: "Transition metal",
            electronegativity: 1.69,
            atomicRadius: 151,
            weight: 112.41,
            meltingPoint: 321.07,
        },
        {
            name: "Indium",
            series: "Post-transition metal",
            electronegativity: 1.78,
            atomicRadius: 167,
            weight: 114.82,
            meltingPoint: 156.6,
        },
        {
            name: "Tin",
            series: "Post-transition metal",
            electronegativity: 1.96,
            atomicRadius: 141,
            weight: 118.71,
            meltingPoint: 231.93,
        },
        {
            name: "Antimony",
            series: "Metalloid",
            electronegativity: 2.05,
            atomicRadius: 138,
            weight: 121.76,
            meltingPoint: 630.63,
        },
        {
            name: "Tellurium",
            series: "Metalloid",
            electronegativity: 2.1,
            atomicRadius: 135,
            weight: 127.6,
            meltingPoint: 449.51,
        },
        {
            name: "Iodine",
            series: "Halogen",
            electronegativity: 2.66,
            atomicRadius: 133,
            weight: 126.90447,
            meltingPoint: 113.7,
        },
        {
            name: "Xenon",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 130,
            weight: 131.293,
            meltingPoint: -111.7,
        },
        {
            name: "Cesium",
            series: "Alkali metal",
            electronegativity: 0.79,
            atomicRadius: 225,
            weight: 132.91,
            meltingPoint: 28.44,
        },
        {
            name: "Barium",
            series: "Alkaline earth metal",
            electronegativity: 0.89,
            atomicRadius: 198,
            weight: 137.33,
            meltingPoint: 727,
        },
        {
            name: "Hafnium",
            series: "Transition metal",
            electronegativity: 1.3,
            atomicRadius: 159,
            weight: 178.49,
            meltingPoint: 2233,
        },
        {
            name: "Tantalum",
            series: "Transition metal",
            electronegativity: 1.5,
            atomicRadius: 145,
            weight: 180.95,
            meltingPoint: 3017,
        },
        {
            name: "Tungsten",
            series: "Transition metal",
            electronegativity: 2.36,
            atomicRadius: 137,
            weight: 183.84,
            meltingPoint: 3422,
        },
        {
            name: "Rhenium",
            series: "Transition metal",
            electronegativity: 1.9,
            atomicRadius: 137,
            weight: 186.21,
            meltingPoint: 3186,
        },
        {
            name: "Osmium",
            series: "Transition metal",
            electronegativity: 2.2,
            atomicRadius: 135,
            weight: 190.23,
            meltingPoint: 3033,
        },
        {
            name: "Iridium",
            series: "Transition metal",
            electronegativity: 2.20,
            atomicRadius: 135,
            weight: 192.22,
            meltingPoint: 2453,
        },
        {
            name: "Platinum",
            series: "Transition metal",
            electronegativity: 2.28,
            atomicRadius: 138,
            weight: 195.08,
            meltingPoint: 1768,
        },
        {
            name: "Gold",
            series: "Transition metal",
            electronegativity: 2.54,
            atomicRadius: 144,
            weight: 196.97,
            meltingPoint: 1064,
        },
        {
            name: "Mercury",
            series: "Transition metal",
            electronegativity: 2.00,
            atomicRadius: 149,
            weight: 200.59,
            meltingPoint: -38.83,
        },
        {
            name: "Thallium",
            series: "Post-transition metal",
            electronegativity: 1.62,
            atomicRadius: 148,
            weight: 204.38,
            meltingPoint: 304,
        },
        {
            name: "Lead",
            series: "Post-transition metal",
            electronegativity: 1.87,
            atomicRadius: 147,
            weight: 207.2,
            meltingPoint: 327.5,
        },
        {
            name: "Bismuth",
            series: "Post-transition metal",
            electronegativity: 2.02,
            atomicRadius: 146,
            weight: 208.98,
            meltingPoint: 271.4,
        },
        {
            name: "Polonium",
            series: "Post-transition metal",
            electronegativity: 2.0,
            atomicRadius: 140,
            weight: 209,
            meltingPoint: 254,
        },
        {
            name: "Astatine",
            series: "Metalloid",
            electronegativity: 2.2,
            atomicRadius: 150,
            weight: 210,
            meltingPoint: 302,
        },
        {
            name: "Radon",
            series: "Noble gas",
            electronegativity: null,
            atomicRadius: 145,
            weight: 222,
            meltingPoint: -71,
        },
        {
            name: "Francium",
            series: "Alkali metal",
            electronegativity: 0.79,
            atomicRadius: 348,
            weight: 223.0197,
            meltingPoint: 27,
        },
        {
            name: "Radium",
            series: "Alkaline earth metal",
            electronegativity: 0.9,
            atomicRadius: 215,
            weight: 226.0254,
            meltingPoint: 700,
        },
        {
            name: "Rutherfordium",
            series: "Transition metal",
            electronegativity: null,
            atomicRadius: null,
            weight: 267,
            meltingPoint: null,
        },
        {
            name: "Dubnium",
            series: "Transition metal",
            electronegativity: null,
            atomicRadius: null,
            weight: 268,
            meltingPoint: null,
        },
        {
            name: "Seaborgium",
            series: "Transition metal",
            electronegativity: null,
            atomicRadius: null,
            weight: 269,
            meltingPoint: null,
        },
        {
            name: "Bohrium",
            series: "Transition metal",
            electronegativity: null,
            atomicRadius: null,
            weight: 270,
            meltingPoint: null,
        },
        {
            name: "Hassium",
            series: "Transition metal",
            electronegativity: null,
            atomicRadius: null,
            weight: 269,
            meltingPoint: null,
        },
        {
            name: "Meitnerium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 278,
            meltingPoint: null,
        },
        {
            name: "Darmstadtium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 281,
            meltingPoint: null,
        },
        {
            name: "Roentgenium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 282,
            meltingPoint: null,
        },
        {
            name: "Copernicium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 285,
            meltingPoint: null,
        },
        {
            name: "Nihonium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 284,
            meltingPoint: null,
        },
        {
            name: "Flerovium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 289,
            meltingPoint: null,
        },
        {
            name: "Moscovium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 289,
            meltingPoint: null,
        },
        {
            name: "Livermorium",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 293,
            meltingPoint: null,
        },
        {
            name: "Tennessine",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 294,
            meltingPoint: null, 
        },
        {
            name: "Oganesson",
            series: "Unknown",
            electronegativity: null,
            atomicRadius: null,
            weight: 294,
            meltingPoint: null,
        },
        {
            name: "Lanthanum",
            series: "Lanthanide",
            electronegativity: 1.10,
            atomicRadius: 195,
            weight: 138.904,
            meltingPoint: 918,
        },
        {
            name: "Cerium",
            series: "Lanthanide",
            electronegativity: 1.12,
            atomicRadius: 185,
            weight: 140.116,
            meltingPoint: 795,
        },
        {
            name: "Praseodymium",
            series: "Lanthanide",
            electronegativity: 1.13,
            atomicRadius: 185,
            weight: 140.907,
            meltingPoint: 935,
        },
        {
            name: "Neodymium",
            series: "Lanthanide",
            electronegativity: 1.14,
            atomicRadius: 185,
            weight: 144.242,
            meltingPoint: 1021,
        },
        {
            name: "Promethium",
            series: "Lanthanide",
            electronegativity: 1.13,
            atomicRadius: 185,
            weight: 145,
            meltingPoint: 1042,
        },
        {
            name: "Samarium",
            series: "Lanthanide",
            electronegativity: 1.17,
            atomicRadius: 185,
            weight: 150.36,
            meltingPoint: 1072,
        },
        {
            name: "Europium",
            series: "Lanthanide",
            electronegativity: 1.2,
            atomicRadius: 185,
            weight: 152,
            meltingPoint: 822,
        },
        {
            name: "Gadolinium",
            series: "Lanthanide",
            electronegativity: 1.20,
            atomicRadius: 180,
            weight: 157.25,
            meltingPoint: 1312,
        },
        {
            name: "Terbium",
            series: "Lanthanide",
            electronegativity: 1.20,
            atomicRadius: 175,
            weight: 158.93,
            meltingPoint: 1360,
        },
        {
            name: "Dysprosium",
            series: "Lanthanide",
            electronegativity: 1.22,
            atomicRadius: 175,
            weight: 162.50,
            meltingPoint: 1412,
        },
        {
            name: "Holmium",
            series: "Lanthanide",
            electronegativity: 1.23,
            atomicRadius: 175,
            weight: 164.93,
            meltingPoint: 1470,
        },
        {
            name: "Erbium",
            series: "Lanthanide",
            electronegativity: 1.24,
            atomicRadius: 175,
            weight: 167.26,
            meltingPoint: 1529,
        },
        {
            name: "Thulium",
            series: "Lanthanide",
            electronegativity: 1.25,
            atomicRadius: 175,
            weight: 168.93,
            meltingPoint: 1545,
        },
        {
            name: "Ytterbium",
            series: "Lanthanide",
            electronegativity: 1.10,
            atomicRadius: 175,
            weight: 173.04,
            meltingPoint: 824,
        },
        {
            name: "Lutetium",
            series: "Lanthanide",
            electronegativity: 1.27,
            atomicRadius: 175,
            weight: 175.00,
            meltingPoint: 1663,
        },
        {
            name: "Actinium",
            series: "Actinide",
            electronegativity: 1.10,
            atomicRadius: 195,
            weight: 227.03,
            meltingPoint: 1050,
        },
        {
            name: "Thorium",
            series: "Actinide",
            electronegativity: 1.30,
            atomicRadius: 180,
            weight: 232.04,
            meltingPoint: 1750,
        },
        {
            name: "Protactinium",
            series: "Actinide",
            electronegativity: 1.50,
            atomicRadius: 180,
            weight: 231.04,
            meltingPoint: 1568,
        },
        {
            name: "Uranium",
            series: "Actinide",
            electronegativity: 1.38,
            atomicRadius: 175,
            weight: 238.03,
            meltingPoint: 1132,
        },
        {
            name: "Neptunium",
            series: "Actinide",
            electronegativity: 1.36,
            atomicRadius: 175,
            weight: 237.05,
            meltingPoint: 640,
        },
        {
            name: "Plutonium",
            series: "Actinide",
            electronegativity: 1.28,
            atomicRadius: 175,
            weight: 244.06,
            meltingPoint: 639,
        },
        {
            name: "Americium",
            series: "Actinide",
            electronegativity: 1.13,
            atomicRadius: 175,
            weight: 243.06,
            meltingPoint: 994,
        },
        {
            name: "Curium",
            series: "Actinide",
            electronegativity: 1.28,
            atomicRadius: 175,
            weight: 247.07,
            meltingPoint: 1340,
        },
        {
            name: "Berkelium",
            series: "Actinide",
            electronegativity: 1.30,
            atomicRadius: 170,
            weight: 247.07,
            meltingPoint: 986,
        },
        {
            name: "Californium",
            series: "Actinide",
            electronegativity: 1.30,
            atomicRadius: 170,
            weight: 251.08,
            meltingPoint: 900,
        },
        {
            name: "Einsteinium",
            series: "Actinide",
            electronegativity: null,
            atomicRadius: null,
            weight: 252.08,
            meltingPoint: null,
        },
        {
            name: "Fermium",
            series: "Actinide",
            electronegativity: null,
            atomicRadius: null,
            weight: 257.10,
            meltingPoint: null,
        },
        {
            name: "Mendelevium",
            series: "Actinide",
            electronegativity: null,
            atomicRadius: null,
            weight: 258.10,
            meltingPoint: null,
        },
        {
            name: "Nobelium",
            series: "Actinide",
            electronegativity: null,
            atomicRadius: null,
            weight: 259.10,
            meltingPoint: null,
        },
        {
            name: "Lawrencium",
            series: "Actinide",
            electronegativity: null,
            atomicRadius: null,
            weight: 262.11,
            meltingPoint: null,
        }
    ],
    types : {
        "Nonmetal": "Phi kim",
        "Noble gas": "Khí trơ",
        "Alkali metal": "Kim loại kiềm",
        "Alkaline earth metal": "Kim loại kiềm thổ",
        "Metalloid": "Á kim",
        "Halogen": "Halogen",
        "Post-transition metal": "Kim loại sau chuyển tiếp",
        "Transition metal": "Kim loại chuyển tiếp",
        "Metal": "Kim loại",
        "Lanthanide": "Lantan",
        "Actinide": "Actini", 
        "Unknown" : "Unknown"
    },
    handleEvent : function(){
        $$('td:not(.none):not(.index)').forEach(element =>{
            element.onmouseover = ()=>{
                let value = element.innerText;
                if(value != "" && !value.includes("-")){
                    let M = parseInt(value.split('\n')[0])
                    let real = M
                    if(M < 57){
                        M = M - 1
                    }
                    else if (M > 71 && M < 89){
                        // Real array 56 - 72
                        // Fake array 72 - 88
                        M = M - 16
                    }
                    else if(M > 103 && M < 119){
                        // Real array 73 - 86
                        // Fake array 104 - 118
                        M = M - 31
                    }
                    else if(M >= 57 &&  M < 72){
                        // Real 88 - 102
                        // Fake 57 - 71
                        M = M + 31
                    }
                    else if( M >= 89 && M < 104){
                        // Real 103 - 117
                        // Fake 89 - 103
                        M = M + 14
                    }
                    this.setElement(this.elements[M], real)
                }
            }
        })
    },
    setElement : function(item, index){
        $('.card .name').innerText = `${index} - ${item.name == null ? "N/A" : item.name}`;
        $('.card .series').innerText = `Nhóm : ${item.series == null ? "N/A" : this.types[item.series]}`;
        $('.card .negative').innerText = `Độ âm điện : ${item.electronegativity == null ? "N/A" : item.electronegativity}`;
        $('.card .radius').innerText = `Bán kính nguyên tử : ${item.atomicRadius == null ? "N/A " : item.atomicRadius}pm`;
        $('.card .weight').innerText = `Khối lượng nguyên tử : ${item.weight == null ? "N/A" : item.weight}`;
        $('.card .melting').innerText = `Độ nóng chảy : ${item.meltingPoint == null ? "N/A" : item.meltingPoint} °C`;
    },
    run : function(){
        this.handleEvent();
    }
}

app.run()



