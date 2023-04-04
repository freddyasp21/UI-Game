import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";


function Hero() {
  return (
    <main className="text-white lg:pl-[280px] p-8 pt-36">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-2">
        <div className="md:col-span-5 relative">
            <img src="https://i.blogs.es/ea4ddf/dduhp_zv4aaxedj/1366_2000.jpg" alt="" className="w-full h-[500px] object-cover lg:rounded-tl-xl lg:rounded-bl-xl" />
            <div className="absolute left-0 bottom-0 p-8 max-w-xl">
                <p className="text-gray-200">Update</p>
                <h2 className="text-4xl font-bold mb-4">The hunt is on in Fornite Charapter 2 - Season 5: Zero point</h2>
                <button className="text-lg flex items-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-700 rounded-xl group transition-all">Play for free <RiArrowRightSLine className="group-hover:translate-x-1 transition-all"/></button>
            </div>
        </div>
        <div className="bg-[#232323] col-span-1 h-[500px] lg:rounded-tr-xl lg:rounded-br-xl w-full">
            <ul className="p-2 box-border flex flex-col md:items-center lg:items-start gap-4 h-full overflow-y-scroll">
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/12/elder-scrolls-v-skyrim-anniversary-edition-caratula-2551097.jpeg?itok=f7Xn_a1n" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Skyrim</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://i.blogs.es/b25956/doom-eternal/1366_2000.jpeg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Doom Eternal</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://media.vandal.net/i/1440x1080/2-2023/202325138222_1.jpg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">RE4</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://www.somosxbox.com/wp-content/uploads/2014/08/Dead-Island-2-header.jpg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Dead Island 2</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://i.blogs.es/27b361/death-stranding-01/840_560.jpeg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Death Stranding</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_DyingLight2StayHuman_Techland_S3_2560x1440-f1dcd15207f091674615ccb4bd9dc3c7" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Dying Light 2</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://sm.ign.com/t/ign_es/screenshot/default/atomic-heart-analisis_5ryu.1200.jpg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Atomic Heart</span></a>
                </li>
                <li className="">
                    <a className="flex items-center gap-2 text-lg lg:text-sm hover:bg-[#141414] transition-all"><img src="https://media.vandal.net/i/1200x630/4-2023/20234314472621_1.jpg" alt="" className="w-[80px] h-[80px] object-cover" /><span className="md:hidden lg:block">Cyberpunk 2077</span></a>
                </li>
            </ul>
        </div>
      </div>
    </main>
  );
}

export default Hero;
