export interface NavLinkProps {
    route: string;
    children: React.ReactNode;
    color?: string;
    large?: boolean;
    onClick?: React.MouseEventHandler<Element>;
}

export interface cardProps {
    title: string;
    year:number;
    rating: number;
    
}