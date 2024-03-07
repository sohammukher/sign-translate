import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, Input, Card, CardActionArea, CardContent } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.transparent,
    border: 0,
}));

const handleConvert = () => {
    alert("convert clicked");
}

function Main() {
    return (
        <Box sx={{ flexGrow: 1 }} >
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <Item sx={{ height: "90%" }}>
                        <h2>Welcome to the Sign Language Converter</h2><br />
                        <p>Type your text in the left section and see it converted to the sign language in the right section</p><br /><br />
                        <Input placeholder="Enter your text here" />&nbsp;&nbsp;&nbsp;
                        <Button variant="contained" color="inherit" onClick={handleConvert}> <b> Convert </b> </Button><br /><br />
                    </Item>
                </Grid>
                <Grid item xs={6} >
                    <Item sx={{ height: "90%" }}>Include a photo or video here</Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{ height: "90%" }}>
                        <h2>How it works</h2>
                        <p>Follow these simple steps to convert your text to sign language</p><br />
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item sx={{ height: "90%" }}>
                        <Card sx={{ maxWidth: 550 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Step 1
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Type your text in the input field on the left side of the screen
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card><br/>
                        <Card sx={{ maxWidth: 550 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Step 2
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Click the convert button
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                        <br/>
                        <Card sx={{ maxWidth: 550 }}>
                            <CardActionArea>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Step 3
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Watch the live video on the right side of the screen to see your text converted to sign language
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Main;
