import React from 'react';
import { Panel, Block, Heading, Text } from 'rebass';
import Popover from 'react-popover';
import NodeUp from './NodeUp.jsx';


class Node extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const bool = !this.state.isOpen;
    return this.setState({ isOpen: bool });
  }

  render() {
    const style = {
      transform: `translate(${this.props.xtranslate}px,${this.props.ytranslate}px)`,
      width: this.props.width,
      height: this.props.height,
      cursor: 'pointer',
      backgroundColor: '#FAFAFA',
      borderRadius: '5px',
      boxShadow: '0 0 1em #90A4AE',
      fontSize: '14px',
      textDecoration: 'none',
    };
    // const header = {
    //   width: '100%',
    //   height: Math.floor(this.props.height / 4),
    //   backgroundColor: '#01579B',
    //   color: 'white',
    //   // fontSize: '20px',
    // };
    let propsArr = [];
    let methodsArr = [];
    if (this.props.props.length !== 0) propsArr = this.props.props.map(ele => { return ele.name; });
    if (this.props.methods.length !== 0) methodsArr = this.props.methods;

    return (
      <foreignObject onMouseEnter={this.props.highlight} onMouseLeave={this.props.lowlight} onClick={this.toggle}>
      <Popover isOpen={this.state.isOpen} preferPlace="right" body={<NodeUp state={this.props.state} props={this.props.props} />}>
        <Panel
          className="node"
          style={style}
          theme="secondary"
          p={0}
          my={0}
        >
          <Block borderLeft
            borderColor="#263238"
            backgroundColor="#1976D2"
            color="#FAFAFA"
            px={2}
            py={0}
            my={0}
          >
            <Heading size={3}>
            {this.props.name.toUpperCase()}
            </Heading>
          </Block>
          <Text px={1}>
            Props: <br />
           {propsArr.join(' | ')} <br />
          </Text>
          <br />
          <Text small px={1}>
           Methods:
           {methodsArr.join('| ')}
          </Text>
        </Panel></Popover></foreignObject>
    );
  }
}

Node.propTypes = {
  xtranslate: React.PropTypes.number,
  ytranslate: React.PropTypes.number,
  name: React.PropTypes.string,
  props: React.PropTypes.array,
  state: React.PropTypes.array,
  methods: React.PropTypes.array,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  highlight: React.PropTypes.func,
  lowlight: React.PropTypes.func,
};

Node.defaultProps = {
  xtranslate: 0,
  ytranslate: 0,
  name: 'something messed up',
  props: [],
  state: [],
  methods: [],
  width: 200,
  height: 100,
};


export default Node;
