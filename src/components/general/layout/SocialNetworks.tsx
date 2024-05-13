import { IconButton, Box } from "@mui/material";
import { Facebook, Instagram, Twitter, Pinterest, YouTube } from "@mui/icons-material";

type Identify = {
    index: number
}

interface SocialNetwork {
    href: string
    Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

interface SocialNetworkList extends SocialNetwork {
    id: number
}

const SocialNetworksList: SocialNetworkList[] = [
    { id: 25, href: "https://www.facebook.com/DIFEstatalOaxaca/", Icon: Facebook, },
    { id: 26, href: "https://twitter.com/DIF_Oaxaca/", Icon: Twitter },
    { id: 27, href: "https://www.instagram.com/difoaxaca/", Icon: Instagram },
    { id: 28, href: "https://www.pinterest.com.mx/difoaxaca/", Icon: Pinterest },
    { id: 29, href: "https://www.youtube.com/@difestataloaxaca9055", Icon: YouTube, },
];


export default function SocialNetworks(props: Identify) {
    const { index } = props;

    const SocialNetworkIcon: React.FC<SocialNetwork> = ({ href, Icon }) => {
        return (
            <IconButton
                sx={{
                    '@media screen and (max-width: 350px)': {
                        maxWidth: 35,
                        maxHeight: 10,
                    },
                    '@media screen and (max-width: 302px)': {
                        display: "none"
                    },
                }}
                key={href} onClick={() => window.open(href, "_blank")}>
                <Icon
                    style={{ color: "white" }} />
            </IconButton>
        );
    };

    return (
        <>
            {SocialNetworksList.map((socialNetwork) => (
                <SocialNetworkIcon
                    key={socialNetwork.id * index}
                    href={socialNetwork.href}
                    Icon={socialNetwork.Icon}
                />
            ))}
        </>
    )
}