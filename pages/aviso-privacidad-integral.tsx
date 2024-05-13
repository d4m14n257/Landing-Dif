import { Box, Typography } from "@mui/material";
import { TypographyBold, TypographyBody } from "../src/components/general/TypographyHelp";

export default function PrivacityAdvertisementPage() {
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
          AVISO DE PRIVACIDAD INTEGRAL
        </Typography>
        <TypographyBody
          body="El Sistema para el Desarrollo Integral de la Familia del Estado de Oaxaca, (Sistema DIF Oaxaca), con domicilio en la Calle General Vicente Guerrero número 114, 
                  Colonia Miguel Alemán, Oaxaca de Juárez, CP. 68120, Oaxaca, México, es el responsable del tratamiento de los datos personales que proporcionen las beneficiarias 
                  (os), los cuales serán protegidos conforme a lo dispuesto por la Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados, y demás 
                  normatividad que resulte aplicable."
        />
        <TypographyBold
          title="¿Qué datos personales solicitamos y para qué fines?"
        />
        <TypographyBody
          body="Su información personal será utilizada para las siguientes finalidades:"
        />
        <Box>
          <ul>
            <li><TypographyBody
              body="Identificar a las personas que solicitan servicios de asistencia social."
            /></li>
            <li><TypographyBody
              body="Verificar el cumplimiento de los requisitos y criterios de selección aplicables a los servicios de asistencia social."
            /></li>
            <li><TypographyBody
              body="Identificar a los beneficiarios para la entrega de apoyos de beneficios sociales."
            /></li>
            <li><TypographyBody
              body="Integrar el padrón de personas beneficiarias de los programas de asistencia social."
            /></li>
            <li><TypographyBody
              body="Publicar obligaciones de transparencia y evaluar la calidad del servicio que le brindamos."
            /></li>
          </ul>
        </Box>
        <TypographyBody
          body="Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, se solicitarán los siguientes datos personales:"
        />
        <Box>
          <ul>
            <li><TypographyBody body="Nombre" /></li>
            <li><TypographyBody body="Sexo" /></li>
            <li><TypographyBody body="Edad" /></li>
            <li><TypographyBody body="Estado Civil" /></li>
            <li><TypographyBody body="Identificación Oficial" /></li>
            <li><TypographyBody body="Clave Única de Registro de Población(CURP)" /></li>
            <li><TypographyBody body="Registro Federal de Contribuyentes" /></li>
            <li><TypographyBody body="Lugar de nacimiento (Municipio y Estado)" /></li>
            <li><TypographyBody body="Fecha de nacimiento" /></li>
            <li><TypographyBody body="Grupo Étnico" /></li>
            <li><TypographyBody body="Lengua Indígena" /></li>
            <li><TypographyBody body="Nacionalidad" /></li>
            <li><TypographyBody body="Domicilio" /></li>
            <li><TypographyBody body="Número telefónico personal" /></li>
            <li><TypographyBody body="Correo electrónico" /></li>
            <li><TypographyBody body="Firma autógrafa" /></li>
            <li><TypographyBody body="Datos socioeconómicos" /></li>
          </ul>
        </Box>
        <TypographyBody
          body="Además, de los datos personales mencionados anteriormente, para las finalidades informadas en el presente aviso de 
                  privacidad, utilizaremos los siguientes datos personales considerados como sensibles, que requieren de especial 
                  protección:"
        />
        <Box>
          <ul>
            <li><TypographyBody body="Estado de salud físico presente, pasado o futuro." /></li>
            <li><TypographyBody body="Estado de salud mental presente, pasado o futuro." /></li>
          </ul>
        </Box>
        <TypographyBody
          body="Si desea que sus datos personales sensibles se utilicen para las finalidades que requieren de su consentimiento, 
                  podrá manifestarlo a continuación:"
        />
        <Box>
          <ul>
            <li><TypographyBody body="Consiento que mis datos personales sensibles sean tratados conforme a los términos y condiciones del 
                                        presente Aviso de Privacidad. ________________________________ Nombre completo y 
                                        firma autógrafa del Titular de los datos personales sensibles."
            />
            </li>
          </ul>
        </Box>
        <TypographyBold
          title="¿Con quién compartimos su información personal y para qué fines?"
        />
        <TypographyBody
          body="Asimismo, le informamos que sus datos personales pueden ser transferidos y tratados por personal de las áreas del Sistema DIF Oaxaca. 
                  No se realizarán transferencias adicionales, salvo aquéllas que sean necesarias para atender requerimientos de información de una 
                  autoridad competente siempre y cuando, se formulen por escrito debidamente fundados y motivados."
        />
        <TypographyBold
          title="¿Cuál es el fundamento para el tratamiento de datos personales?"
        />
        <TypographyBody
          body="Fundamento en los artículos 1, 3 fracciones II, III y V, 8 fracción V, 12, 20, 90 y 114 apartado C, de la Constitución Política del Estado Libre 
                  y Soberano de Oaxaca; artículos 1, 3 fracción II, 59 y 60 de la Ley Orgánica del Poder Ejecutivo del Estado de Oaxaca; 1, 2, 3, 5, 6, 11, 13, 14, 
                  15, 17, 19, 20, 22, 24, Titulo Tercero, y demás relativos de la Ley de Protección de Datos Personales en Posesión de Sujetos Obligados del Estado 
                  de Oaxaca, 1, 2, 4, 6, 9 fracción II, 14 fracciones I, IV, VIII, IX, XII, 21, 22, 23, 24, 29 y 59, de la Ley del Sistema para el Desarrollo Integral 
                  de la Familia del Estado de Oaxaca."
        />
        <TypographyBold
          title="¿Dónde puedo ejercer mis derechos ARCO?"
        />
        <Typography variant="body1" sx={{
          textAlign: "justify",
          '@media screen and (max-width: 770px)': {
            fontSize: 13,
          },
          '@media screen and (max-width: 670px)': {
            fontSize: 12,
          },
        }}>
          Usted podrá presentar su solicitud para el ejercicio de los derechos de acceso, rectificación, cancelación u oposición de sus datos personales (derechos ARCO)
          directamente ante la Unidad de Transparencia de este Sistema DIF, ubicada en Avenida Universidad 145, primer piso, Colonia Ex Hacienda de Candiani, Oaxaca de
          Juárez, Oaxaca, Oaxaca de Juárez, CP. 68130, Oaxaca; a los correos electrónicos: <span style={{ color: "#00b19f" }}>dif.transparencia@oaxaca.gob.mx </span>
          y <span style={{ color: "#00b19f" }}>dif.unidadenlace@oaxaca.gob.mx</span> y al teléfono 5015050 ext 1301, de lunes a viernes de 09:00 a 17:00 horas en días hábiles,
          de igual forma a través de la Plataforma Nacional de Transparencia, disponible en <span style={{ color: "#00b19f" }}>http://www.plataformadetransparencia.org.mx.</span>

          Si usted considera que su derecho de protección de datos personales ha sido lesionado por alguna conducta de nuestros empleados o de nuestras actuaciones o
          respuestas, presume que en el tratamiento de sus datos personales existe alguna violación a las disposiciones previstas en la Ley de Protección de Datos
          Personales en Posesión de Sujetos Obligados del Estado de Oaxaca, podrá interponer la denuncia correspondiente, ante el Instituto de Acceso a la
          Información Pública y Protección de Datos Personales del Estado de Oaxaca IAIP, en términos de los artículos 102, 103 de la Ley en comento; para mayor
          información visite <span style={{ color: "#00b19f" }}>http://iaipoaxaca.org.mx.</span>
        </Typography>
        <TypographyBold
          title="¿Cómo puede conocer los cambios en este aviso de privacidad?"
        />
        <Typography
          variant="body1"
          sx={{
            textAlign: "justify",
            '@media screen and (max-width: 770px)': {
              fontSize: 13,
            },
            '@media screen and (max-width: 670px)': {
              fontSize: 12,
            },
          }}
        >
          El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones, en dado caso lo haremos de su conocimiento en nuestro portal
          de Internet <span style={{ color: "#00b19f" }}>http://www.difoaxaca.gob.mx.</span>
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
