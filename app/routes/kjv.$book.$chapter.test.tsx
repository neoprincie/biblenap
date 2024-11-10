import '@testing-library/jest-dom/vitest';

import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { createRemixStub } from "@remix-run/testing";
import {
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { expect, test } from 'vitest'
import Kjv from './kjv.$book.$chapter'

test("renders loader data", async () => {
  const RemixStub = createRemixStub([
    {
      path: "kjv/:book/:chapter",
      Component: Kjv,
      loader({ params }) {
        const verses = [
          {"verse": "1", "text": "Verse 1 text"}, 
          {"verse": "2", "text": "Verse 2 text"}];
        return json({ verses });
      },
    },
  ]);

  render(<RemixStub initialEntries={["/kjv/Genesis/1"]} />);

  await waitFor(() => screen.findByText("Verse 1 text"));
});
