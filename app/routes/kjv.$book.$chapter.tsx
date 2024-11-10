import { Box, Typography } from "@mui/material";
import { useLoaderData } from "@remix-run/react";
import { LoaderFunctionArgs, json } from "@remix-run/server-runtime";
import { getChapter } from "~/data";
import invariant from "tiny-invariant";

export const loader = async ({
    params,
  }: LoaderFunctionArgs) => {
    invariant(params.book, "Missing book");
    invariant(params.chapter, "Missing chapter");
    const verses = await getChapter(params.book, params.chapter);
    if (!verses) {
        throw new Response("Not Found", { status: 404 });
    }
    return json({ verses });
  };

  export default function Kjv() {
    const { verses } = useLoaderData<typeof loader>();
  
    return (
        <Box>
            {verses.length ? (
                <div>
                {verses.map((verse) => (
                    <Typography variant="body1">
                        <sup>{verse.verse}</sup> {verse.text}
                    </Typography>
                ))}
                </div>
            ) : (
                <p>
                <i>No data</i>
                </p>
            )}
        </Box>
    );
  }