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

test("displays verses correctly", async () => {
  const verses = [
    {"verse": "1", "text": "Verse 1 text"}, 
    {"verse": "2", "text": "Verse 2 text"}];

  const RemixStub = createRemixStub([
    {
      path: "kjv/:book/:chapter",
      Component: Kjv,
      loader({ params }) {
        return json({ verses });
      },
    },
  ]);

  render(<RemixStub initialEntries={["/kjv/Genesis/1"]} />);

  await waitFor(() => verses.forEach(({ verse, text }) => {
    const supElement = screen.getByText(verse, { selector: 'sup' });
    expect(supElement).toBeInTheDocument();

    screen.findByText(text)
  }));
});

test("when verses are empty", async () => {
  const RemixStub = createRemixStub([
    {
      path: "kjv/:book/:chapter",
      Component: Kjv,
      loader({ params }) {
        return json({ verses: [] });
      },
    },
  ]);

  render(<RemixStub initialEntries={["/kjv/Genesis/1"]} />);

  expect(await screen.findByText(/No data/i)).toBeInTheDocument();
})