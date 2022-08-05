import Card from "./Card";
import Button from "./Button";
// import LoadingButton from "./LoadingButton";
import Input from "./Input";
import Paper from "./Paper";
import Typography from "./Typography";
import IconButton from "./IconButton";
// import Backdrop from "./Backdrop";
import Accordion from "./Accordion";

export default function ComponentsOverrides(theme) {
  return {
    ...Card(theme),
    ...Button(theme),
    // ...LoadingButton(theme),
    ...Input(theme),
    ...Paper(theme),
    ...Typography(theme),
    // ...Backdrop(theme),
    ...IconButton(theme),
    ...Accordion(theme),
  };
}
