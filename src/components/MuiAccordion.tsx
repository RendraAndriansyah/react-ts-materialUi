import { ExpandCircleDownOutlined } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { useState } from "react";

export const MuiAccordion = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpaned: boolean, panel: string) => {
    setExpanded(isExpaned ? panel : false);
  };
  return (
    <>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(e, isExpanded) => {
          handleChange(isExpanded, "panel1");
          console.log({ isExpanded });
        }}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-header"
          expandIcon={<ExpandCircleDownOutlined />}
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem aut omnis
          reprehenderit ipsam adipisci magnam cumque? Nesciunt ducimus facere temporibus
          saepe distinctio illo quo, fuga quidem molestias fugiat quia!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-header"
          expandIcon={<ExpandCircleDownOutlined />}
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem aut omnis
          reprehenderit ipsam adipisci magnam cumque? Nesciunt ducimus facere temporibus
          saepe distinctio illo quo, fuga quidem molestias fugiat quia!
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(e, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-header"
          expandIcon={<ExpandCircleDownOutlined />}
        >
          <Typography>Accordion 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo rem aut omnis
          reprehenderit ipsam adipisci magnam cumque? Nesciunt ducimus facere temporibus
          saepe distinctio illo quo, fuga quidem molestias fugiat quia!
        </AccordionDetails>
      </Accordion>
    </>
  );
};
