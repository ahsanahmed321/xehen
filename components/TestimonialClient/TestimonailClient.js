import { Avatar } from "@material-ui/core";
import "./TestimonialClient.scss";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8)
  },

  [theme.breakpoints.up("md")]: {
    large: {
      width: theme.spacing(15),
      height: theme.spacing(15)
    }
  }
}));

const TestimonialClient = () => {
  const classes = useStyles();
  return (
    <div className="clientHolder">
      <Avatar className={classes.large} />
    </div>
  );
};

export default TestimonialClient;
