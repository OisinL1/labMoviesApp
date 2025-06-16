import MovieDetails from "../components/movieDetails/index";
import sample from "./sampleData";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof MovieDetails> = {
  title: "Movie Details Page",
  component: MovieDetails,
};
export default meta;

type Story = StoryObj<typeof MovieDetails>;

export const Basic: Story = {
  args: { ...sample },
};
