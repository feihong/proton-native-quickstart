import childProcess from 'child_process'
import React, { Component } from 'react'
import { render, Window, App, Menu, Box, Button, Separator, StyledText, TextInput }
  from 'proton-native'

// Return a number between min and max (inclusive)
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function getRandomHanzi() {
  let codePoint = getRandomInt(0x4e00, 0x9fff)
  return String.fromCodePoint(codePoint)
}

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '火' }
  }

  componentDidMount() {
    console.log('mounted');
    // Give this window focus:
    childProcess.spawnSync('osascript', ['-l', 'JavaScript', '-e',
      `SystemEvents = Application("System Events");
      node = SystemEvents.processes["node"];
      node.frontmost = true;`
    ])
  }

  handleClick = () => {
    this.setState({ text: getRandomHanzi() })
  }

  render() {
    return (
      <App onShouldQuit={() => console.log('quitting')}>
        <Menu>
          <Menu.Item type='Quit' />
        </Menu>
        <Window title="Proton Native Demo" size={{ w: 300, h: 300 }} menuBar={false} margined>
          <Box>
            <Box vertical={false} stretchy={true}>
              <Button stretchy={true} onClick={this.handleClick}>
                Click me
            </Button>
              <StyledText style={{ fontSize: 48, color: 'white' }}> {this.state.text} </StyledText>
            </Box>
            <Separator />
            <TextInput> 你好世界！ </TextInput>
          </Box>
        </Window>
      </App>
    );
  }
}

render(<Demo />);
