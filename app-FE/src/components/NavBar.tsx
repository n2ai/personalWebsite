import React from "react";
import { useState } from "react";

const menuItem = [
	{
		name: "Home",
		link: "#",
	},
	{
		name: "About",
		link: "#",
	},
	{
		name: "Portfolio",
		link: "#",
	},
	{
		name: "Contact",
		link: "#",
	},
];


const NavBar:React.FC = ()=>{
   const [openMenu, setOpenMenu] = useState<boolean>(false);
	
	const onClickMenu = () => {
		setOpenMenu((prev) => !prev);
	}

	return(
		<>
			<nav className=" bg-slate-800 ">
				<div className="max-w-screen-xl mx-auto items-center h-14 flex py-4 px-6 justify-between">
					<div className="nav__logo">
						<svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 rounded-md float-left" viewBox="0 0 1275 1274.999945">
							<defs>
								<clipPath id="efd4c8a2ea">
									<path d="M 772.554688 640.847656 L 1275 640.847656 L 1275 1067.097656 L 772.554688 1067.097656 Z M 772.554688 640.847656 " clip-rule="nonzero"/>
								</clipPath>
								<clipPath id="236e885dfc">
									<path d="M 1023.777344 640.847656 L 1275 1067.097656 L 772.554688 1067.097656 Z M 1023.777344 640.847656 " clip-rule="nonzero"/>
								</clipPath>
								<clipPath id="3da819ab5c"><path d="M 64.992188 208 L 1048.171875 208 L 1048.171875 1060 L 64.992188 1060 Z M 64.992188 208 " clip-rule="nonzero"/></clipPath>
								<clipPath id="e0f2b64dc7">
									<path d="M 703.800781 640.847656 L 1206.640625 640.847656 L 1206.640625 1067.097656 L 703.800781 1067.097656 Z M 703.800781 640.847656 " clip-rule="nonzero" />
								</clipPath>
								<clipPath id="4e4429dba0"><path d="M 955.023438 640.847656 L 1206.246094 1067.097656 L 703.800781 1067.097656 Z M 955.023438 640.847656 " clip-rule="nonzero"/>
								</clipPath>
								<clipPath id="6c069fe2e0"><path d="M 0 208 L 983.179688 208 L 983.179688 1060 L 0 1060 Z M 0 208 " clip-rule="nonzero"/>
								</clipPath>
							</defs>
							<g clip-path="url(#efd4c8a2ea)">
								<g clip-path="url(#236e885dfc)">
									<path fill="#0558ee" d="M 772.554688 640.847656 L 1275.398438 640.847656 L 1275.398438 1067.097656 L 772.554688 1067.097656 Z M 772.554688 640.847656 " fill-opacity="1" fill-rule="nonzero"/>
								</g>
							</g>
							<g clip-path="url(#3da819ab5c)">
								<path fill="#0558ee" d="M 64.992188 208.515625 L 187.886719 421.332031 L 310.785156 634.148438 L 556.582031 208.515625 Z M 679.476562 421.332031 L 802.375 208.515625 L 1048.171875 208.515625 L 679.476562 846.964844 L 556.582031 1059.78125 L 433.683594 846.964844 L 556.582031 634.148438 Z M 679.476562 421.332031 " fill-opacity="1" fill-rule="nonzero"/>
							</g>
							<g clip-path="url(#e0f2b64dc7)">
								<g clip-path="url(#4e4429dba0)">
									<path fill="#35beff" d="M 703.800781 640.847656 L 1206.640625 640.847656 L 1206.640625 1067.097656 L 703.800781 1067.097656 Z M 703.800781 640.847656 " fill-opacity="1" fill-rule="nonzero"/>
								</g>
							</g>
							<g clip-path="url(#6c069fe2e0)">
								<path fill="#35beff" d="M 0 208.515625 L 122.898438 421.332031 L 245.792969 634.148438 L 491.589844 208.515625 Z M 614.488281 421.332031 L 737.382812 208.515625 L 983.179688 208.515625 L 737.382812 634.148438 L 614.488281 846.964844 L 491.589844 1059.78125 L 368.691406 846.964844 Z M 614.488281 421.332031 " fill-opacity="1" fill-rule="nonzero"/>
							</g>
						</svg>
						<span className="text-white">lorem ipsum</span>
					</div>
					<button onClick={onClickMenu} className="text-white md:hidden">
						<svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 rounded-md float-right">
							<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
						</svg>
					</button>
					<div className="hidden w-[50%] text-white md:block">
						<ul className="flex justify-between">
							{ menuItem.map((item,index) => {
								return (
									<li key={index} className="cursor-pointer font-semibold">{item.name}</li>
								)
							})}
						</ul>
					</div>
				</div>
			</nav>
			{openMenu && <div className="mt-2 sm:hidden px-8 justify-center">
					<ul className="border bg-slate-50 p-3 items-center justify-between rounded-md text-slate-300">
						{ menuItem.map((item,index) => {
								return (
									<li key={index} className="p-3 hover:bg-slate-200 rounded-md transition-all duration-200 text-slate-500">
										<a href={item.link}> {item.name} </a>
									</li>
								)
							})
						}
					</ul>
				</div>}
		</>
		
   )
}

export default NavBar