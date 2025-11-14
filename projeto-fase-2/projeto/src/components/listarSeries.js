import React from "react";
import { useEffect, useState } from "react";
import { Card, CardContent, Typography, Grid, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";

function ListaSeries() {

    // Navigate
    const navigate = useNavigate();

    // Series state
    const [series, setSeries] = useState([]);

    // API url
    const url = "http://localhost:5000/series";

    // Data fetching fuction
    function fetch_Data() {
        return axios.get(url)
            .then(response => response.data)
            .catch(error => {
                console.error(error);
                return [];
        });
    }

    // Fetching data when component mounts
    useEffect(() => {
        async function load(){
            const data = await fetch_Data();
            setSeries(data);
        }

        load();
    }, []);

    // Handling the deletion of series
    function HandleDelete(serie){
        const id = serie.id;
        const title = serie.title;
        axios.delete(url + "/" + id)
        .then(
            console.log("Series: " + title + " successfully deleted."),
            window.location.reload()
        )
    }

    console.log(series)
    
    return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        paddingTop: "100px",
        paddingBottom: "40px",
        display: "flex",
        justifyContent: "center",
        background: "linear-gradient(90deg, #010e52, #004894)"
      }}
    >
      <Box
        sx={{
          width: "80%",
          backgroundColor: "white",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: 700,
            color: "#ba0001",
            marginBottom: "30px",
          }}
        >
          Lista de séries
        </Typography>

        <Grid container spacing={3}>
          {series.map((serie, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: "12px",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {serie.title}
                  </Typography>

                  <Typography><strong>Nº de temporadas:</strong> {serie.seasons}</Typography>
                  <Typography><strong>Data de lançamento:</strong> {serie.releaseDate}</Typography>
                  <Typography><strong>Diretor:</strong> {serie.director}</Typography>
                  <Typography><strong>Produtora:</strong> {serie.production}</Typography>
                  <Typography><strong>Categoria:</strong> {serie.category}</Typography>
                  <Typography><strong>Assistiu em:</strong> {serie.watchedAt}</Typography>

                  <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
                    <Button variant="outlined" size="small" color="primary" onClick={() => navigate("/atualizarserie", { state: { serie }})}>
                      Editar
                    </Button>
                    <Button variant="outlined" size="small" color="error" onClick={() => HandleDelete(serie)}>
                      Excluir
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
export default ListaSeries;