import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    backgroundColor: "white",
    borderRadius: "10px",
    marginTop: "20px",
    marginBottom: "20px",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default useStyles;
