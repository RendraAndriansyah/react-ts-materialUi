import { Share } from "@mui/icons-material";
import {
  Box,
  CardContent,
  CardMedia,
  Card,
  Typography,
  CardActions,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import { fontSize, Stack } from "@mui/system";
import React from "react";

export const MuiCard = () => {
  return (
    <Stack>
      <Grid container spacing={1}>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
        <Grid p={1.4} xs={12} md={4} lg={3} xl={2.4}>
          <Box width={"300"}>
            <Card>
              <CardMedia
                component={"img"}
                height={150}
                src="https://source.unsplash.com/random"
                alt="random pict unsplash"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component={"div"}>
                  Card MUI
                </Typography>
                <Typography variant="body2" color={"text.secondary"}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere, neque
                  ipsa! Assumenda ducimus pariatur accusantium, expedita nisi mollitia...
                </Typography>
              </CardContent>
              <Box display={"flex"} justifyContent={"end"}>
                <CardActions>
                  <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    endIcon={<Share />}
                  >
                    Share
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Stack>
  );
};
