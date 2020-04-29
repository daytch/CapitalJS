import React from 'react';

function DelaySpinner(props){
  const {delay} = props;
  const [showSpinner, setSpinner] = React.useState(false);
  let timer;
  React.useEffect(() => {
    timer = setTimeout(
      () => setSpinner(true),
      delay
    );
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return(
    showSpinner && <Spinner {...props}/>
  )
}

function Spinner(props){
  return(
    <div className="usLoader-container" {...props.containerProps}>
      <div className="usLoader" data-size={props.size}></div>
      {props.children ? <div data-margin-top="sm" data-font="xs" data-color="light" data-weight="bold">{props.children}</div> : null}
    </div>
  )
}

export {
  DelaySpinner,
  Spinner
}