import * as React from 'react';
import { useState } from 'react'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { AppBar, FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

import { useNavigate, useParams } from '@remix-run/react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const params = useParams();
  const [book, setBook] = useState("Genesis");
  const [chapter, setChapter] = useState(params.chapter);
  const navigate = useNavigate();
  
  const handleChange = (event: any) => {
    const selectedChapter = event.target.value;
    setChapter(event.target.value);

    navigate(`/kjv/Genesis/${selectedChapter}`);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">BibleNap</Typography>
          </Toolbar>
        </AppBar>

        <Grid container spacing={2} sx={{ flexGrow: 1, p: 1, mt: 8 }}>
          <Grid size={12}>
            <FormControl variant='standard' sx={{ m: 1, minWidth: 240 }}>
              <InputLabel id="demo-simple-select-label">Book</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={book}
                label="Book"
              >
                <MenuItem value={"Genesis"}>Genesis</MenuItem>
                <MenuItem value={"Exodus"}>Exodus</MenuItem>
                <MenuItem value={"Leviticus"}>Leviticus</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant='standard' sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-label">Chapter</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chapter}
                onChange={handleChange}
                label="Chapter"
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
                <MenuItem value={4}>4</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid size={8}>
            {children}
          </Grid>
          <Grid size={4}>
            <Typography variant="subtitle1">THE CREATION OF HEAVEN AND EARTH. (Gen 1:1-2)</Typography>

            <Typography variant="body2">In the beginning--a period of remote and unknown antiquity, hid in the depths of eternal ages; and so the phrase is used in Pro 8:22-23.</Typography>

            <Typography variant="body2">God--the name of the Supreme Being, signifying in Hebrew, "Strong," "Mighty." It is expressive of omnipotent power; and by its use here in the plural form, is obscurely taught at the opening of the Bible, a doctrine clearly revealed in other parts of it, namely, that though God is one, there is a plurality of persons in the Godhead--Father, Son, and Spirit, who were engaged in the creative work (Pro 8:27; Joh 1:3, Joh 1:10; Eph 3:9; Heb 1:2; Job 26:13).</Typography>

            <Typography variant="body2">created--not formed from any pre-existing materials, but made out of nothing.</Typography>

            <Typography variant="body2">the heaven and the earth--the universe. This first verse is a general introduction to the inspired volume, declaring the great and important truth that all things had a beginning; that nothing throughout the wide extent of nature existed from eternity, originated by chance, or from the skill of any inferior agent; but that the whole universe was produced by the creative power of God (Act 17:24; Rom 11:36). After this preface, the narrative is confined to the earth.</Typography>
            
            <Typography variant="body2"><i>A Commentary, Critical, Practical, and Explanatory on the Old and New Testaments, by Robert Jamieson, A.R. Fausset and David Brown [1882]</i></Typography>
            <Typography variant="body2">Taken from <a href="https://sacred-texts.com/bib/cmt/jfb/gen001.htm">sacred-texts.com</a></Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
    
  );
}
