import React from 'react';
import Dialog from './Dialog.jsx';
export default React.createClass({
  statics: {
    currentValue(){
      return 20;
      // return new Url().query["buildCount"] || 20;
    }
  },
  getInitialState(){
    return {value: this._getQueryValue() || this.props.min}
  },
  render(){
    return <span className="range-slider-container hint--bottom" data-hint={this.props.tooltip}>
      <paper-button onClick={this._onEdit} toggles="true" >
        {this.state.value}<iron-icon  icon="expand-more"></iron-icon>
      </paper-button>
      <Dialog ref="buildCountDialog" heading="Build Count" onSave={this._valueChange}> 
        {this._sliderDialog()}
      </Dialog>
    </span>;
  },
  _onEdit(e){
    this.refs.buildCountDialog.show();
  },
  _sliderDialog(){
    return <paper-slider  ref="ca-slider" 
      value={this.state.value} 
      editable="true" 
      expand= "true" 
      pin= "true" 
      min={this.props.min} 
      max= {this.props.max}/>
  },
  _valueChange(e){
    const newValue =this.refs['ca-slider'].getDOMNode().value;
    this.replaceState({value: newValue});
    this.props.onChange(newValue);
  },
  _getQueryValue(){
    return 20 ;//new Url().query["buildCount"];
  }
});
