import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, MobileStepper, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { StepperCards } from './types/types';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function StepperCard(props : StepperCards) {
  const { path, sizeWidth } = props
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = path.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };


  return (
    <Box sx={{ maxWidth: Number(sizeWidth), flexGrow: 1 ,
    }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {path.map((step, index) => (
          <Box key={(index + 1) * 1117} sx={{display: "flex", justifyContent: "center"}}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  display: 'block',
                  maxWidth: Number(sizeWidth),
                }}
                src={step.href}
              />
            ) : null}
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              '@media screen and (max-width: 400px)': {
                fontSize: 8,
            },
            }}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}
          sx={{
            '@media screen and (max-width: 400px)': {
              fontSize: 8,
          },
          }}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Regresar
          </Button>
        }
      />
    </Box>
  );
}