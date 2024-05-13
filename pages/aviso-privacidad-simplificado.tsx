import { Box, Typography } from "@mui/material"
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";

export default function SimplifyPrivacityAdvertisementPage() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100%"
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "70%",
          gap: 1
        }}
      >
        <Typography variant="h4" sx={{ color: "#a4254b", marginTop: 5, fontWeight: "bold", textAlign: "center" }}>
          AVISO DE PRIVACIDAD SIMPLIFICADO
        </Typography>
        <TypographyBody
          body="El Sistema para el Desarrollo Integral de la Familia del Estado de Oaxaca, (Sistema DIF Oaxaca), con domicilio en 
                  calle General Vicente Guerrero número 114, Colonia Miguel Alemán Valdez, Oaxaca de Juárez, CP. 68120, Oaxaca, México, 
                  es el responsable del tratamiento de los datos personales que proporcionen los beneficiarias (os), conforme a lo 
                  dispuesto por la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado de Oaxaca, y 
                  demás normatividad que resulte aplicable."
        />
        <Box>
          <TypographyBold
            title="FINALIDADES:"
          />
          <ul>
            <li><TypographyBody body="Su información personal será utilizada para identificación de las personas que solicitan servicios de asistencia social." /></li>
            <li><TypographyBody body="Verificación del cumplimiento de los requisitos y criterios de selección aplicables a los servicios de asistencia social." /></li>
            <li><TypographyBody body="Identificación de los beneficiarios para la entrega de apoyos a beneficios sociales." /></li>
            <li><TypographyBody body="Integración del padrón de personas beneficiarias de los programas de asistencia social." /></li>
            <li><TypographyBody body="Publicación de obligaciones de transparencia y evaluar la calidad del servicio que le brindamos." /></li>
          </ul>
          <TypographyBody
            body="Si los datos personales y/o sensibles recabados se necesitaran para una finalidad distinta a las enunciadas con 
                    anterioridad, el Sistema para el Desarrollo Integral de la Familia del Estado de Oaxaca lo comunicará al solicitante 
                    a fin de obtener su autorización para el tratamiento de sus datos de acuerdo con la nueva finalidad."
          />
        </Box>
        <TypographyBold
          title="TRANSMISIÓN Y TRANSFERENCIA DE DATOS PERSONALES Y SENSIBLES:"
        />
        <TypographyBody
          body="Le informamos que sus datos personales pueden ser transferidos y tratados por personal de las áreas del Sistema DIF Oaxaca. 
                  No se realizarán transferencias adicionales, salvo aquéllas que sean necesarias para atender requerimientos de información 
                  de una autoridad competente siempre y cuando, se formulen por escrito debidamente fundados y motivados."
        />
        <TypographyBold
          title="MECANISMOS Y MEDIOS PARA MANIFESTAR LA NEGATIVA AL TRATAMIENTO DE DATOS PERSONALES:"
        />
        <Typography
          sx={{
            '@media screen and (max-width: 770px)': {
              fontSize: 13,
            },
            '@media screen and (max-width: 670px)': {
              fontSize: 12,
            },
          }}>
          Usted podrá presentar su solicitud para el ejercicio de los derechos de acceso, rectificación, cancelación u oposición
          de sus datos personales (derechos ARCO) directamente ante la Unidad de Transparencia de este Sistema DIF, ubicada
          en Avenida Universidad 145, primer piso, Colonia Ex Hacienda de Candiani, Oaxaca de Juárez, Oaxaca, Oaxaca de Juárez,
          CP. 68130, Oaxaca, a los correos electrónicos: <span style={{ color: "#00b19f" }}>dif.transparencia@oaxaca.gob.mx</span> y <span style={{ color: "#00b19f" }}>dif.unidadenlace@oaxaca.gob.mx</span> y
          al teléfono 5015050 ext 1301, de lunes a viernes de 09:00 a 17:00 horas en días hábiles, de igual forma a través
          de la Plataforma Nacional de Transparencia, disponible en <span style={{ color: "#00b19f" }}>http://www.plataformadetransparencia.org.mx.</span>
        </Typography>
        <Typography sx={{
          '@media screen and (max-width: 770px)': {
            fontSize: 13,
          },
          '@media screen and (max-width: 670px)': {
            fontSize: 12,
          },
        }}>
          Pueden consultar el Aviso de Privacidad Integral en el sitio de internet: <span style={{ color: '#00b19f' }}>http://difoaxaca.gob.mx.</span>
        </Typography>
        <Typography
          sx={{
            opacity: 0.7,
            textAlign: "end",
            marginBottom: 5,
            '@media screen and (max-width: 770px)': {
              fontSize: 13,
            },
            '@media screen and (max-width: 670px)': {
              fontSize: 12,
            },
          }}
          variant="subtitle1"
        >
          Fecha de actualización: 18 de mayo de 2020
        </Typography>
      </Box>
    </Box>
  );
}
