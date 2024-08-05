
import { HiHomeModern } from "react-icons/hi2";
import { HiUserGroup } from "react-icons/hi2";
import { HiAcademicCap } from "react-icons/hi2";
import { BenefitsType } from "./config";



export const BENEFITS_LIST: Array<BenefitsType> = [
    {
        icon: <HiHomeModern className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description:
            "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
        icon: <HiUserGroup className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description:
            "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
        icon: <HiAcademicCap className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description:
            "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
];