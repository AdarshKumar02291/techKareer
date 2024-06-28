import Figma from "../../../public/Figma.png";
import Adobe from "../../../public/Adobe.png";
import XD from "../../../public/XD.png";
import Logo from "../../../public/Square.png";
import Image from "next/image";
const LOCATION = (
  <svg
    width="18"
    height="23"
    viewBox="0 0 18 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12.5C10.6569 12.5 12 11.1569 12 9.5C12 7.84315 10.6569 6.5 9 6.5C7.34315 6.5 6 7.84315 6 9.5C6 11.1569 7.34315 12.5 9 12.5Z"
      stroke="#5D5D5D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9 21.5C13 17.5 17 13.9183 17 9.5C17 5.08172 13.4183 1.5 9 1.5C4.58172 1.5 1 5.08172 1 9.5C1 13.9183 5 17.5 9 21.5Z"
      stroke="#5D5D5D"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const COIN = (
  <svg
    width="22"
    height="21"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 3.5C12 4.60457 9.53757 5.5 6.5 5.5C3.46243 5.5 1 4.60457 1 3.5M12 3.5C12 2.39543 9.53757 1.5 6.5 1.5C3.46243 1.5 1 2.39543 1 3.5M12 3.5V5M1 3.5V15.5C1 16.6046 3.46243 17.5 6.5 17.5M6.5 9.5C6.33145 9.5 6.16468 9.49724 6 9.49185C3.19675 9.39999 1 8.54328 1 7.5M6.5 13.5C3.46243 13.5 1 12.6046 1 11.5M21 10C21 11.1046 18.5376 12 15.5 12C12.4624 12 10 11.1046 10 10M21 10C21 8.89543 18.5376 8 15.5 8C12.4624 8 10 8.89543 10 10M21 10V17.5C21 18.6046 18.5376 19.5 15.5 19.5C12.4624 19.5 10 18.6046 10 17.5V10M21 13.75C21 14.8546 18.5376 15.75 15.5 15.75C12.4624 15.75 10 14.8546 10 13.75"
      stroke="#5D5D5D"
      stroke-width="1.6"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export const Right = () => {
  return (
    <div className="">
      <div className="border-b-[1px] border-[#E7E7E7] py-8 pl-[100px]">
        <div className="flex items-center gap-x-[12px]">
          <div className="font-semibold text-[35px]">
            Senior Product Designer
          </div>
          <div className="w-1 h-1 rounded-full bg-[#D1D1D1]"></div>
          <div className="text-[14px] text-[#888888]">
            posted 2 days ago
          </div>
          <div className="border-[1px] rounded-full border-[#ABEFC6] flex items-center p-2 gap-x-[6px]">
            {" "}
            <div className="w-[6px] h-[6px] bg-[#17B26A] rounded-full "></div>
            <div className="text-[#067647] text-[12px]">Open</div>
          </div>
        </div>
        <div className="mt-5 flex gap-x-[8px] items-center text-[20px] text-[#5D5D5D]">
          <div>{LOCATION}</div>
          <div className="">Delaware, USA</div>
          <div className="w-1 h-1 rounded-full bg-[#D1D1D1]"></div>
          <div>{COIN}</div>
          <div>$300k - $400k</div>
        </div>
      </div>
      <div className=" border-b-[1px] border-[#E7E7E7]">
        <div className="pl-[100px] py-8 flex justify-between  gap-x-[64px] w-[872px]">
          <div className="flex flex-col gap-y-2">
            <div className="text-[#6E6D6D] text-[14px]">Skills Required</div>
            <div className="border-[1px] border-[#D0D5DD] rounded-xl py-1 px-[6px] flex gap-x-[4px] items-center w-fit">
              <Image src={Figma} alt=""></Image>
              <div className="text-[12px]">Figma</div>
            </div>
            <div className="border-[1px] border-[#D0D5DD] rounded-xl py-1 px-[6px] flex gap-x-[4px] items-center w-fit">
              <Image src={Adobe} alt=""></Image>
              <div className="text-[12px]">Adobe Illustrator</div>
            </div>
            <div className="border-[1px] border-[#D0D5DD] rounded-xl py-1 px-[6px] flex gap-x-[4px] items-center w-fit">
              <Image src={XD} alt=""></Image>
              <div className="text-[12px]">Adobe XD</div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="text-[#6E6D6D] text-[14px]">Preffered Language</div>
            <div className="font-semibold text-[16px]">English</div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="text-[#6E6D6D] text-[14px]">Type</div>
            <div className="font-semibold text-[16px]"> Full Time</div>
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="text-[#6E6D6D] text-[14px]">Years Of Experience</div>
            <div className="font-semibold text-[16px]">
              {" "}
              3+ Years of Experience
            </div>
          </div>
        </div>
      </div>
      <div className="border-b-[1px] border-[#E7E7E7] pl-[100px] py-8">
        <div className="text-[14px] text-[#6E6D6D]">About the Job</div>
        <div className="text-[16px]">
          <ol className="list-decimal list-inside">
            <li>Handle the UI/UX research design</li>
            <li>
              Work on researching on latest web applications designs & trends
            </li>
            <li>Work on conceptualizing and visualizing</li>
            <li>
              Work on creating graphics content and other graphic related works{" "}
            </li>
          </ol>
          <ul className="list-none list-inside">
            <li>
              Benefits:
              <ul className="list-disc list-inside ">
                <li>Health insurance</li>
                <li>Provident Fund</li>
              </ul>
            </li>
            <li>
              Schedule
              <ul className="list-disc list-inside">
                <li>Day Shift</li>
              </ul>
            </li>
            <li>
              Supplemental pay types:
              <ul className="list-disc list-inside">
                <li>Performance bonus</li>
                <li>Yearly bonus</li>
              </ul>
            </li>
            <li>Work Location: In person</li>
          </ul>
        </div>
      </div>
      <div className="border-b-[1px] border-[#E7E7E7] pl-[100px] py-8">
        <div className="flex items-center gap-x-3 p-[10px] pl-0">
            <Image src={Logo} alt=""></Image>
            <div className="text-[20px] text-[#4F4F4F]">Atlassian</div>
        </div>
        <div className="mt-4 max-w-[736px] grid grid-cols-2 gap-y-6">
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Company Size</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">1k - 2k Employees</div>
            </div>
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Type</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">Private</div>
            </div>
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Sector</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">Information Technology, Infrastructure</div>
            </div>
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Funding</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">Bootstraped</div>
            </div>
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Founded in</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">2019</div>
            </div>
            <div>
                <div className="text-[14px] text-[#6E6D6D]">Founded By</div>
                <div className="text-[16px] text-[#3D3D3D] mt-2">Scott Farquhar, Mike Cannon-Brookes</div>
            </div>
        </div>
      </div>
    </div>
  );
};
