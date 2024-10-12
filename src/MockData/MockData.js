import { FaChartPie } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RiFolder6Line } from "react-icons/ri";
import { BsBook } from "react-icons/bs";
import { FaRegIdCard } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { TbBook2 } from "react-icons/tb";
import { LuMessagesSquare } from "react-icons/lu";
import { AiOutlineRise } from "react-icons/ai";
import { AiOutlineFall } from "react-icons/ai";

import { FaIdBadge } from "react-icons/fa";
export const sideBarData = [
  {
    header: "Dashboards",
    child: [
      { name: "Default", path: "/", logo: FaChartPie },
      { name: "eCommerce", path: "ecommerce", logo: FiShoppingBag, child:[] },
      { name: "Projects", path: "projects", logo: RiFolder6Line,child:[] },
      { name: "Online Courses", path: "online-course", logo: BsBook, child:[] },
    ],
  },
  {
    header: "Pages",
    child: [
      {
        name: "User Profile",
        path: "#",
        child: [
          { name: "Overview", path: "#" },
          { name: "Projects", path: "#" },
          { name: "Campaigns", path: "#" },
          { name: "Documents", path: "#" },
          { name: "Followers", path: "#" },
        ],
        logo: FaIdBadge,
      },
      { name: "Account", logo: FaRegIdCard,path:"#", child: [] },
      { name: "Corporate", logo: GrGroup,path:"#", child: [] },
      { name: "Blog", logo: TbBook2, path:"#", child: [] },
      { name: "Social", logo: LuMessagesSquare,path:"#", child: [] },
    ],
  },
];
export const DetailBoxData = [
  {
    header: "Customers",
    value: "3,781",
    impact: "+11.01% ",
    lightModeColor: "#E3F5FF",
    darkModeColor: "#E3F5FF",
    path: "",
    icon:AiOutlineRise 
  },
  {
    header: "Orders",
    value: "3,781",
    impact: "-0.03% ",
    lightModeColor: "#F7F9FB",
    color: "#F7F9FB",
    darkModeColor: "#262424",
    path: "/orders",
    icon:AiOutlineFall 
  },
  {
    header: "Revenue",
    value: "$695",
    impact: "+15.03% ",
    lightModeColor: "#F7F9FB",
    darkModeColor: "#262424",
    path: "",
    icon:AiOutlineRise 
  },
  {
    header: "Growth",
    value: "30.1%",
    impact: "+6.08% ",
    lightModeColor: "#E5ECF6",
    darkModeColor: "#E5ECF6",
    path: "",
    icon:AiOutlineRise 
  },
];
