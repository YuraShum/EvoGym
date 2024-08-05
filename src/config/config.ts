

export enum NavLinks {
    HOME = 'home',
    BENEFITS = "benefits",
    OUR_CLASSES = "ourclasses",
    CONTACT_US = "contactus"
}


export const navLinkLabels: Record<NavLinks, string> = {
    [NavLinks.HOME]: "Home",
    [NavLinks.BENEFITS]: "Benefits",
    [NavLinks.OUR_CLASSES]: "Our Classes",
    [NavLinks.CONTACT_US]: "Contact Us"
}
export interface BenefitsType {
    icon: JSX.Element,
    title: string,
    description: string
}


export interface ClassType {
    name: string,
    description?: string,
    image: string
}
