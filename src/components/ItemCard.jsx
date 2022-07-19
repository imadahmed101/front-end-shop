import { Paper, Grid, Typography, Box, Rating } from '@mui/material'
import { Thermostat, LocalFireDepartment } from '@mui/icons-material'


const ItemCard = ({ url, prodname, prodspicelevel, prodstars, prodreviews, prodprice }) => {
    return (
        <Grid item xs={6} sm={4} md={3}>
            <Paper elevation="3">

                <img
                    src={url}
                    alt="fire"
                    className='img'
                    height= "100px"
                    width= "100px"/>
                <Box paddingX={1}>
                    <Typography variant="subtitle1" component="h2">{prodname}</Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "Center"
                        }}>
                        <LocalFireDepartment sx={{ width: 20 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>{prodspicelevel}</Typography>
                    </Box>
                    <Box
                        marginTop={3}
                        sx={{
                            display: "flex",
                            alignItems: "Center"
                        }}>
                        <Rating
                            name="read-only"
                            value={prodstars}
                            precision={0.5}
                            size="small"
                        />
                        <Typography variant="body2" component="p" marginLeft={0.5}>{prodstars}</Typography>
                        <Typography variant="body3" component="p" marginLeft={0.5}>({prodreviews} reviews)</Typography>
                    </Box>
                    <Box>
                        <Typography variant="h6" component="h3" marginLeft={0.5}>From ${prodprice}</Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    )
}

export default ItemCard