import React from 'react'
import { Fragment } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { switchMode } from "../actions/mainActions";
const x = '80%'
const Div = styled.div`
  background-color: ${(props) => `${props.light ? "yellow" : "gray"}`};
  height: ${x};
  width: ${x};
`;

const Button = styled.div`
  border: 2px solid ${props => `${props.selected ? "green" : "none"}`};
`
function FirstComponent(props) {
  let light = props.light
  return (
    <Fragment>
      <h2>Choisissez le mode : </h2>
      <Button selected={light} onClick={() => props.switchMode(true)}>
        Day
      </Button>
      <Button selected={!light} onClick={() => props.switchMode(false)}>
        Night
      </Button>
      <Div className="center-x m-3" light={light}></Div>
    </Fragment>
  );
}


const mapStateToProps = (state) => ({
  light: state.main.light
})

export default connect(mapStateToProps, {switchMode})(FirstComponent)

