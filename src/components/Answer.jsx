import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  questions: {
      borderColor: '#FFB549',
      color: '#FFB549',
      fontWeight: 600,
      marginBottom: '8px',
      '&:hover': {
        backgroundColor: '#FF8E53',
        color: '#fff',
      },
    },
});
const Answer = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.questions}
      variant='outlined'
      onClick={() => props.select(props.content, props.nextId)}
    >
      {props.content}
    </Button>
  );
};
export default Answer;
