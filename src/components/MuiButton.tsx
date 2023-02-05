import {
  CleaningServices,
  DarkMode,
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  Headphones,
  Home,
  Person,
  Settings,
  WbSunny,
} from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  IconButton,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { convertLength } from "@mui/material/styles/cssUtils";
import { useState } from "react";
const MuiButton = () => {
  const [format, setFormat] = useState<string | null>(null);
  const [mode, setMode] = useState<boolean>(true);
  console.log(mode);
  console.log(format);

  const handleMode = () => {
    setMode(!mode);
  };

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormat(updatedFormat);
  };
  return (
    <>
      <Stack spacing={4} alignItems={"center"}>
        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" href="#">
            Cointain
          </Button>
          <Button variant="outlined">outline</Button>
          <Button variant="text">Text</Button>
        </Stack>

        <Stack spacing={2} direction={"row"}>
          <Button variant="contained" color="primary">
            primary
          </Button>
          <Button variant="contained" color="secondary">
            secondary
          </Button>
          <Button variant="contained" color="success">
            success
          </Button>
          <Button variant="contained" color="info">
            info
          </Button>
          <Button variant="contained" color="warning">
            warning
          </Button>
          <Button variant="contained" color="error">
            error
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2} display={"block"}>
          <Button variant="contained" size="small">
            small
          </Button>
          <Button variant="contained" size="medium">
            medium
          </Button>
          <Button variant="contained" size="large">
            large
          </Button>
        </Stack>
        <Stack direction={"row"} spacing={2} display="block">
          <Button variant="contained" size={"small"}>
            <Home />
          </Button>
          <Button variant="contained" size={"small"} startIcon={<Settings />}>
            {" "}
            Settings
          </Button>
          <Button
            variant="contained"
            size={"small"}
            endIcon={<Person />}
            onClick={() => alert("Rendra")}
          >
            about me
          </Button>
          <IconButton>
            <Headphones color="primary" />
          </IconButton>
        </Stack>
        <Stack direction={"row"} display={"block"} spacing={10}>
          <ButtonGroup variant="contained" color="primary">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
          <ButtonGroup variant="text" color={"secondary"} orientation={"vertical"}>
            <Button>Top</Button>
            <Button>Center</Button>
            <Button>Bottom</Button>
          </ButtonGroup>
        </Stack>

        <Stack>
          <ButtonGroup>
            <ToggleButtonGroup
              aria-label="text formatting"
              value={format}
              onChange={handleFormatChange}
              size="small"
              color="primary"
              exclusive
            >
              <ToggleButton value={"bold"} aria-label="bold">
                <FormatBold />
              </ToggleButton>
              <ToggleButton value={"italic"} aria-label="italic">
                <FormatItalic />
              </ToggleButton>
              <ToggleButton value={"underlined"} aria-label="underlined">
                <FormatUnderlined />
              </ToggleButton>
            </ToggleButtonGroup>
          </ButtonGroup>
          <ToggleButton value={mode} onClick={handleMode}>
            {mode ? <WbSunny /> : <DarkMode />}
          </ToggleButton>
        </Stack>
      </Stack>
    </>
  );
};

export default MuiButton;
