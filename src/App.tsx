import { useState } from "react";

const gradients = [
  "bg-gradient-to-r",
  "bg-gradient-to-l",
  "bg-gradient-to-t",
  "bg-gradient-to-b",
  "bg-gradient-to-bl",
  "bg-gradient-to-br",
  "bg-gradient-to-tr",
  "bg-gradient-to-tl"
]

const randomGradient = () => {
    const randomIndex = Math.floor(Math.random() * gradients.length);

    return gradients[randomIndex]
}

const randomColors = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "indigo",
    "teal",
  ]

  const randomColorNumbers = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ]

  const randomColor = colors[Math.floor(Math.random() * colors.length)]
  const randomNumber = randomColorNumbers[Math.floor(Math.random() * randomColorNumbers.length)]
  return `${randomColor}-${randomNumber}`

}

function App() {
  const [bgClass, setBgClass] = useState("bg-white");
  const [modalVisible, setModalVisible] = useState(false);
  const handleClick = () => {
    const includeVia = Math.random() < 0.5; 
    const gradient = randomGradient();
    const fromColor = `from-${randomColors()}`;
    const toColor = `to-${randomColors()}`;
    const viaColor = includeVia ? `via-${randomColors()}` : "";

    setBgClass (`${gradient} ${fromColor} ${viaColor} ${toColor}`)
  }

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(bgClass);
    setModalVisible(true);
    setTimeout(() => setModalVisible(false), 2000)
  }
   return ( 
   <> 
        <div className={`min-h-screen w-full flex items-center justify-center ${bgClass}`}>
            <div className="rounded-3xl font-mono flex flex-col items-center justify-center text-center space-y-7 md:space-y-10 py-8 px-12 md:py-16 border-2 shadow-xl mx-5 bg-white text-black">
              <h1 className="text-5xl md:text-6xl text-black">Tailwind Background Generator</h1>
              <button onClick={handleClick} className="bg-black text-white p-2 md:p-3 font-semibold text-lg md:text-xl rounded-xl hover:opacity-80 transition-all duration-200">Generate Random Background</button> 
              <h3 className="p-3 border-2 rounded-lg text-lg md:text-xl font-semibold bg-gray-100 cursor-pointer" onClick={copyToClipBoard}>{bgClass}</h3>
              <div>
                <a className="transition duration-300 ease-in-out border-b border-transparent cursor-pointer hover:border-black" href="https://aeyika.is-a.dev" target="_none">created by aeyika</a>
              </div>
            </div>
        </div>

         {
          modalVisible && (
            <div className="fixed inset-0 flex items-end mb-32 justify-center">
              <div className="p-5 rounded-lg shadow-lg bg-black text-white">
                <p className="font-semibold text-lg">Copied to Clipboard ✅</p>
              </div>
            </div>
          )
         }
     </> 
  ) 
} 

export default App
