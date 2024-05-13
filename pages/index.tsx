import Slider from "../src/components/home/Slider";
import BodyPrograms from "../src/components/home/BodyPrograms";
import { Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import OutboxIcon from '@mui/icons-material/Outbox';
import { getActionsInHome } from "../src/api/home";
import { useRouter } from "next/router";

const ButtonRequest = styled(Button)({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  borderRadius: "50%",
  width: 100,
  height: 100,
  bottom: 70,
  right: 20,
  background: "#002b59",
  color: 'white',
  boxShadow: '1px 1px 8px black',
  transition: '0.5s',
  zIndex: 1,
  '&:hover': {
    background: "#001933",
    width: 110,
    height: 110,
    right: 20,
    bottom: 65,
  },
  '&:active': {
    background: '#d12654'
  }
})

export const getStaticProps = async () => {
  const { success, message, data } = await getActionsInHome();

  return {
    props: {
      success: success,
      message: message ? message : null,
      data: data ? data : null
    }
  }
}

export default function HomePage(props) {
  const router = useRouter()
  const { success, message, data } = props

  return (
    <>
      <Slider />
      <BodyPrograms
        message={message}
        success={success}
        data={data}
      />
      <ButtonRequest
        onClick={() => { router.push('/solicitar-beneficio') }}
      >
        <OutboxIcon fontSize="large" />
        <Typography
          variant="caption"
          sx={{
            fontSize: 9
          }}
        >
          Solicitar Beneficio
        </Typography>
      </ButtonRequest>
    </>
  );
}
