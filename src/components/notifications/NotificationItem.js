import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import classNames from "classnames";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    textAlign: "left"
  },
  avatar: {
    maxWidth: "70px",
    display: "inline-block",
    marginRight: "10px",
    verticalAlign: "middle"
  },
  contentNotification: {
    width: "calc(100% - 80px)",
    display: "inline-block",
    verticalAlign: "middle"
  }
});

class Notification extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root} elevation={1}>
        <Avatar
          alt="Anh avarta cua Hung"
          src={this.props.image}
          className={classNames(classes.avatar)}
        />
        <div className={classes.contentNotification}>
          <Typography variant="subtitle2" component="div">
            This is a sheet of paper.
          </Typography>
          <Typography component="p">
            Paper can be used to build surface or other elements for your
            application.
          </Typography>
        </div>
      </Paper>
    );
  }
}
Notification.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(Notification);
