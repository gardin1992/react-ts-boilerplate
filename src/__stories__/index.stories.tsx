import { ComponentStory, ComponentMeta } from "@storybook/react";
import App from "../App";

export default {
  title: "App",
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (args) => <App />;

export const Default = Template.bind({});
Default.args = {};
