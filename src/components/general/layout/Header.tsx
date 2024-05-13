import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Menu, MenuItem, Button, Stack, Divider, IconButton } from "@mui/material";
import { Phone, AccessTime, LocationOn, KeyboardArrowDown } from "@mui/icons-material";
import MenuIcon from '@mui/icons-material/Menu';
import ColorLabel from "./ColorLabel";
import SocialNetworks from "./SocialNetworks";
import { useRouter } from "next/router";
import HideOnScroll from "./HideOnScroll";

type Dropdown = {
  id: number
  name: string
  href: string
};

interface ContactData {
  content: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  first?: boolean
  hidden ?: boolean
}

interface ContactDataList extends ContactData {
  id: number
}

type Navegation = {
  id: number,
  name: string
  path: string | Dropdown[]
}

const NavigationItems: Navegation[] = [
  {
    id: 1,
    name: "Inicio",
    path: "/"
  },
  {
    id: 2,
    name: "Transparencia",
    path: "https://scco.oaxaca.gob.mx/transparencia/?dep=80"
  },
  {
    id: 3,
    name: "Presupuestario",
    path: [
      { id: 7, name: "Fotradis 2017", href: "/fotradis-2017" },
      { id: 8, name: "Fotradis 2018", href: "/fotradis-2018" },
      { id: 9, name: "Fotradis 2019", href: "/fotradis-2019" },
      { id: 10, name: "Fotradis 2020", href: "/fotradis-2020" },
      { id: 11, name: "Normatividad contable", href: "/normatividad-contable" },
      { id: 12, name: "Programa anual de adquisición federal 2022", href: "/paafed2022" },
      { id: 13, name: "S251 Salud", href: "/s251-salud" },
      { id: 14, name: "Reporte PASH", href: "/reporte-pash" },
      { id: 15, name: "Reporte CONAC", href: "/reporte-conac" }
    ],
  },
  {
    id: 4,
    name: "Aviso de privacidad",
    path: [
      { id: 16, name: "Aviso de privacidad integral", href: "/aviso-privacidad-integral" },
      { id: 17, name: "Aviso de privacidad simplificado", href: "/aviso-privacidad-simplificado" }
    ],
  },
  {
    id: 5,
    name: "Control interno",
    path: [
      { id: 18, name: "Comité de ética", href: "/comite-etica" },
      { id: 19, name: "Ética e integridad pública", href: "/etica-integridad-publica" },
      { id: 20, name: "Comités", href: "/comites" }
    ],
  },
  {
    id: 6,
    name: "PEI", path:
      [
        { id: 21, name: "2020", href: "/pei-2020" }
      ],
  },
  {
    id: 50,
    name: "Convocatoria CEPCI",
    path: "https://difoaxaca.gob.mx/dowload/pdf/CONVOCATORIA_CEPCI.pdf"
  },
  {
    id: 51,
    name: "Sobre nosotros",
    path: "/acerca"
  }
];

const ContactDataList: ContactDataList[] = [
  { id: 22, content: "(951) 501 5050", Icon: Phone, first: true },
  { id: 23, content: "Lunes a Viernes de 9:00 a 17:00", Icon: AccessTime, hidden: true },
  { id: 24, content: "Colonia Miguel Alemán, Oaxaca.", Icon: LocationOn },
];

export default function Header() {
  const router = useRouter();
  const [anchor, setAnchor] = useState<null | HTMLElement>(null);
  const [subAnchor, setSubAnchor] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState([false, false, false, false, false, false, false, false])

  const subOpen = Boolean(subAnchor);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setSubAnchor(event.currentTarget);
  }

  const handleOpenMenu = (event: React.MouseEvent<HTMLElement>, index: number) => {
    let temp: boolean[] = open
    temp[index] = true
    setOpen(temp)

    setAnchor(event.currentTarget);
  };
  
  const handleCloseMenu = () => {
    setOpen([false, false, false, false, false, false, false, false])
    setAnchor(null);
    handleClose();
  };

  const handleClose = () => {
    setSubAnchor(null);
  }

  const handleChangeRoute = (href: any) => {
    if (typeof href === "string")
      router.push(href)
    handleClose();
  }

  const ContactDataIcon: React.FC<ContactData> = ({ content, Icon, first, hidden }) => {
    if (first) {
      return (
        <Box
          sx={{
            display: {xs: "none", lg: "flex"},
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1
          }}
        >
          <Icon />
          <Typography
            variant="body2"
          >{content}</Typography>
        </Box>
      )
    }
    else if(hidden) {
      return (
        <Box
          sx={{
            display: {xs: "none", md: "flex"},
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1
          }}
        >
          <Icon />
          <Typography
            variant="body2"
          >{content}</Typography>
        </Box>
      );
    }
    return (
      <Box
        sx={{
          display: {xs: "none", sm: "flex"},
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1
        }}
      >
        <Icon />
        <Typography
          variant="body2"
        >{content}</Typography>
      </Box>
    );
  };

  return (
    <HideOnScroll>
      <AppBar component="nav" sx={{background: "linear-gradient(to right, #009542, #009ee1)"}}>
        <Toolbar
          sx={{ 
            justifyContent: {sm: "space-between", xs: "center"},
            minHeight: "40px !important",
            marginX: 8,
          }}
          disableGutters
        >
          {ContactDataList.map((contact) => (
            <ContactDataIcon
              key={contact.id}
              content={contact.content}
              Icon={contact.Icon}
              first={contact.first}
              hidden={contact.hidden}
            />
          ))}
          <Box>
            <SocialNetworks index={1} />
          </Box>
        </Toolbar>
        <Toolbar
          sx={{
            justifyContent: "space-between",
            background: "white",
            maxHeight: "40px",
          }}
          disableGutters
        >
          <Box
            component="img"
            src="image\logo_header_dif.png"
            sx={{
              '@media screen and (max-width: 350px)': {
                maxWidth: 250, minWidth: 150,
                maxHeight:25
              }, 
              '@media screen and (max-width: 300px)': {
                maxWidth: 230, minWidth: 130,
                maxHeight:20
              }, 
              display: { xs: "flex" },
              marginLeft: 3,
              marginRight: 2,
              height: 35
            }}
          />
          <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} alignItems="center" sx={{ display: { lg: "flex", xs: "none" } }}>
            {NavigationItems.map((navigation, index) => (
              <Box
                key={navigation.id}
              >
                {typeof navigation.path === "string" ?
                  <Button
                    onClick={() => handleChangeRoute(navigation.path)}
                    sx={{
                      minHeight: 15,
                      minWidth: 30,
                      color: "black",
                      fontSize: 11.5,
                      fontWeight: "bold"
                    }}
                  >
                    {navigation.name}
                  </Button> :
                  <>
                    <Button
                      onClick={(e) => {handleOpenMenu(e, index)}}
                      sx={{
                        minHeight: 15,
                        minWidth: 30,
                        color: "black",
                        fontSize: 11.5,
                        fontWeight: "bold"
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <KeyboardArrowDown fontSize="small" />
                        {navigation.name}
                      </Box>
                    </Button>
                    <Menu
                      anchorEl={anchor}
                      id={navigation.name}
                      open={open[index]}
                      onClose={() => { handleCloseMenu() }}
                      onClick={() => { handleCloseMenu() }}
                      PaperProps={{
                        elevation: 1,
                        sx: {
                          overflow: 'visible',
                          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                          mt: 1.5,
                          '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                          },
                        },
                      }}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                      {navigation.path.map((submenu) => (
                        <MenuItem
                          key={submenu.id}
                          onClick={() => { handleChangeRoute(submenu.href) }}
                        >
                          <Typography
                            textAlign="center"
                          >
                            {submenu.name}
                          </Typography>
                        </MenuItem>
                      ))}
                    </Menu>
                  </>}
              </Box>
            ))}
          </Stack>
          <IconButton
            onClick={handleClick}
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { lg: "none", xs: "flex" } }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={subAnchor}
            open={subOpen}
            onClose={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
             {NavigationItems.map((navigation, index) => (
              <Box key={navigation.id}>
                {typeof navigation.path === "string" ? 
                  <>
                    <MenuItem
                      onClick={() => handleChangeRoute(navigation.path)}
                      sx={{
                        minHeight: 15,
                        minWidth: 30,
                        color: "black",
                      }}
                    >
                      {navigation.name}
                    </MenuItem>
                  </> :
                  <>
                    <MenuItem
                      onClick={(e) => {handleOpenMenu(e, index)}}
                      sx={{
                        minHeight: 15,
                        minWidth: 30,
                        color: "black",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center"
                        }}
                      >
                        <KeyboardArrowDown fontSize="small" />
                        {navigation.name}
                      </Box>
                    </MenuItem>
                  </>
                }
                <Divider sx={{ mx: 5 }}/>
              </Box>
            ))}
          </Menu>
          
        </Toolbar>
        <ColorLabel />
      </AppBar>
    </HideOnScroll>
  );
}
